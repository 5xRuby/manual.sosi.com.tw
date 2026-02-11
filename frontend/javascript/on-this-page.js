document.addEventListener("DOMContentLoaded", () => {
  const tocNav = document.getElementById("toc-nav")
  const content = document.querySelector(".docs-content")
  if (!tocNav || !content) return

  // Build TOC from headings in content
  const headings = content.querySelectorAll("h2[id], h3[id]")
  if (headings.length === 0) return

  headings.forEach((heading) => {
    const link = document.createElement("a")
    link.href = `#${heading.id}`
    link.textContent = heading.textContent
    link.dataset.level = heading.tagName === "H3" ? "3" : "2"
    tocNav.appendChild(link)
  })

  // Scroll spy
  const tocLinks = tocNav.querySelectorAll("a")

  function updateActive() {
    let current = null
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect()
      if (rect.top <= 100) {
        current = heading
      }
    })

    tocLinks.forEach((link) => {
      link.classList.remove("active")
      if (current && link.getAttribute("href") === `#${current.id}`) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", updateActive, { passive: true })
  updateActive()
})
