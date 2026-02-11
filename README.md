# SOSI Operation Manual

SOSI 安全閘道器的多語系操作手冊網站，支援繁體中文、English、日本語三種語言。

SOSI 是一套整合身分認證與遠端存取審計的資安網關，支援 RDP、SSH、VNC 協定，提供強制 LDAP/2FA 認證、精確存取控制及完整操作錄影與稽核功能。

## Tech Stack

- [Bridgetown](https://www.bridgetownrb.com/) 2.1 — Ruby-based static site generator
- [esbuild](https://esbuild.github.io/) — Frontend bundling
- [PostCSS](https://postcss.org/) — CSS processing
- [Puma](https://puma.io/) — Development server

## Prerequisites

- Ruby >= 3.2 (tested with 3.4)
- Node.js >= 20
- Bundler

## Getting Started

```sh
# Install dependencies
bundle install && npm install

# Start development server (localhost:4000)
bin/bridgetown start

# Production build
bin/bridgetown deploy
```

## Project Structure

```
src/
├── {zh,en,ja}/          # Localized content (Markdown)
│   ├── index.md         # Landing page
│   ├── introduction.md  # Product introduction
│   ├── login-security.md
│   ├── user/            # User guide
│   └── admin/           # Admin guide (9 pages)
├── _components/         # Ruby ViewComponents + ERB templates
├── _layouts/            # Layout templates (default → docs)
├── _partials/           # Shared partials (head, footer)
├── _data/
│   ├── navigation/      # Sidebar nav per locale
│   ├── i18n/            # UI string translations
│   └── site_metadata.yml
└── images/              # Screenshots & assets

frontend/
├── javascript/          # JS entry point + components
└── styles/              # CSS (PostCSS)

config/
├── initializers.rb      # Bridgetown config (restart required)
├── puma.rb              # Dev server config
└── esbuild.defaults.js  # Auto-generated, do not edit

plugins/                 # Custom Bridgetown builders
server/                  # Roda app + optional dynamic routes
```

## Manual Sections

| Section | Description |
|---------|-------------|
| Overview | Product introduction, login & account security |
| User Guide | Device browsing, remote connections, file transfer |
| Admin Guide | Quick setup, device/user/credential management, connection authorization, watermark, domains, site settings, security audit |

## Development

```sh
# Development server with live reload
bin/bridgetown start

# Build only (no server)
bin/bridgetown build

# Ruby console with site loaded
bin/bridgetown console

# Clean build artifacts
rake clean
```

## Adding Content

- **Pages** go in `src/{locale}/` as Markdown files with YAML front matter
- **Navigation** is defined in `src/_data/navigation/{locale}.yml`
- **UI translations** are in `src/_data/i18n/{locale}.yml`
- **Site metadata** is in `src/_data/site_metadata.yml` (hot-reloads)
- **Config changes** in `config/initializers.rb` require a server restart

## License

All rights reserved.
