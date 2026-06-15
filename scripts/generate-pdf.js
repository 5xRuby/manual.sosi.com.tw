import puppeteer from "puppeteer"
import { readFileSync, readdirSync, mkdirSync, existsSync, statSync } from "fs"
import { resolve, relative, basename, join } from "path"
import { spawn } from "child_process"
import YAML from "yaml"

const SERVER_URL = "http://localhost:4001"
const ROOT = resolve(import.meta.dirname, "..")

async function waitForServer(timeout = 60000) {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(`${SERVER_URL}/zh/`)
      if (res.ok) return
    } catch {}
    await new Promise(r => setTimeout(r, 500))
  }
  throw new Error("Server not ready")
}

// Walk output dir and return all HTML page paths
function getPages(locale) {
  const dir = join(ROOT, "output", locale)
  const pages = []
  function walk(d) {
    if (!existsSync(d)) return
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      if (entry.name.startsWith("_")) continue
      const full = join(d, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (entry.name === "index.html") {
        pages.push(full)
      }
    }
  }
  walk(dir)
  // Sort by depth then name
  pages.sort((a, b) => {
    const da = relative(dir, a).split("/").length
    const db = relative(dir, b).split("/").length
    if (da !== db) return da - db
    return relative(dir, a).localeCompare(relative(dir, b))
  })
  return pages
}

async function generate(locale) {
  const locales = locale === "all" ? ["zh", "en", "ja"] : [locale]

  process.stdout.write("Starting dev server... ")
  const server = spawn("bin/bridgetown", ["start", "--port", "4001"], { cwd: ROOT, stdio: "pipe" })
  try {
    await waitForServer()
    console.log("ready")

    const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] })

    for (const loc of locales) {
      const pages = getPages(loc)
      console.log(`\n📄 ${loc}: ${pages.length} pages`)

      const outDir = join(ROOT, "output", "_pdf", loc)
      mkdirSync(outDir, { recursive: true })

      for (const file of pages) {
        const rel = relative(join(ROOT, "output", loc), file)
        const url = `${SERVER_URL}/${loc}/${rel}`
        const pdfName = rel.replace(/\/index\.html$/, "").replace(/\//g, "-") || "home"
        const pdfPath = join(outDir, `${pdfName}.pdf`)

        process.stdout.write(`  ${url} → ${pdfName}.pdf`)

        const page = await browser.newPage()
        try {
          await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 })
          // Wait for mermaid to render (code blocks replaced by SVG)
          await page.waitForFunction(
            () => !document.querySelector("code.language-mermaid"),
            { timeout: 8000 }
          ).catch(() => {})

          await page.pdf({ path: pdfPath, format: "A4", printBackground: true,
            margin: { top: "15mm", bottom: "15mm", left: "12mm", right: "12mm" } })
          console.log(" ✅")
        } catch (err) {
          console.log(` ❌ ${err.message.slice(0, 60)}`)
        } finally {
          await page.close()
        }
      }
    }

    await browser.close()
    console.log("\n🎉 Done! PDFs in output/_pdf/")
  } finally {
    server.kill("SIGTERM")
  }
}

const locale = process.argv[2] || "all"
generate(locale).catch(err => { console.error(err); process.exit(1) })
