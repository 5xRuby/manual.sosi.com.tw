document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("sidebar-toggle")
  const sidebar = document.getElementById("docs-sidebar")
  if (!toggle || !sidebar) return

  // Create overlay
  const overlay = document.createElement("div")
  overlay.className = "sidebar-overlay"
  document.body.appendChild(overlay)

  function openSidebar() {
    sidebar.classList.add("open")
    overlay.classList.add("open")
  }

  function closeSidebar() {
    sidebar.classList.remove("open")
    overlay.classList.remove("open")
  }

  toggle.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) {
      closeSidebar()
    } else {
      openSidebar()
    }
  })

  overlay.addEventListener("click", closeSidebar)

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar()
  })
})
