import mermaid from "mermaid"

// Initialize mermaid with dark-mode compatible theme
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
  themeVariables: {
    fontFamily: "inherit",
  },
})

// Find all mermaid code blocks and render them
async function renderMermaidBlocks() {
  const blocks = document.querySelectorAll("pre code.language-mermaid")
  if (blocks.length === 0) return

  for (const block of blocks) {
    const pre = block.parentElement
    const code = block.textContent

    try {
      const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).slice(2, 8)}`, code)
      const wrapper = document.createElement("div")
      wrapper.className = "mermaid-diagram"
      wrapper.innerHTML = svg
      pre.replaceWith(wrapper)
    } catch (err) {
      console.warn("Mermaid render failed:", err)
    }
  }
}

// Run on page load and after Turbo/Hotwire navigation
document.addEventListener("turbo:load", renderMermaidBlocks)
document.addEventListener("DOMContentLoaded", renderMermaidBlocks)
