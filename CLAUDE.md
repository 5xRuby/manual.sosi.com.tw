# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Bridgetown 2.1.1** static site project (Ruby-based, similar to Jekyll but modern). It combines Ruby for content/site generation with esbuild for frontend bundling. Template engine is ERB.

## Common Commands

```bash
# Development - starts Puma server + esbuild watcher on localhost:4000
bin/bridgetown start

# Production build (clean + frontend build + site build)
bin/bridgetown deploy
# or equivalently:
rake deploy
rake  # default task is deploy

# Test build
rake test

# Ruby console with site loaded
bin/bridgetown console

# Clean build artifacts
rake clean

# Frontend only
npm run esbuild          # production build (minified)
npm run esbuild-dev      # development watch mode
```

## Architecture

**Dual-layer build system:**
- **Ruby/Bridgetown** processes content from `src/` into static HTML in `output/`
- **esbuild** bundles frontend assets from `frontend/` into `output/_bridgetown/static/`

**Key directories:**
- `src/` - Site content: layouts (`_layouts/`), components (`_components/`), partials (`_partials/`), posts (`_posts/`), data (`_data/`)
- `frontend/` - JavaScript entry (`javascript/index.js`) and styles (`styles/`)
- `server/` - Roda web app (`roda_app.rb`) and optional dynamic routes (`routes/`)
- `plugins/` - Custom Bridgetown builders subclassing `SiteBuilder` go in `plugins/builders/`
- `config/` - `initializers.rb` (main Bridgetown config, requires server restart on change), `puma.rb`, `esbuild.defaults.js` (auto-generated, do not edit)

**Frontend path aliases** (defined in `jsconfig.json`):
- `$styles/*` → `frontend/styles/*`
- `$javascript/*` → `frontend/javascript/*`
- `$components/*` → `src/_components/*`

**Components** use a Ruby class + ERB template pattern (e.g., `src/_components/shared/navbar.rb` + `navbar.erb`). Components are auto-imported in the frontend entry point via glob.

**Site metadata** lives in `src/_data/site_metadata.yml` and is accessible as `site.metadata.*` in templates. This file reloads on change; `config/initializers.rb` does not.

## Bridgetown Skill

Use `/bridgetown` skill for detailed Bridgetown reference when building pages, components, or styles. It covers:

- **Quick Reference** - File placement, path aliases, ERB helpers table, template variables
- **Pages** - Front matter, permalinks, Markdown/ERB pages
- **Layouts & Partials** - Layout inheritance chain (`page.erb` → `default.erb`), partial data passing
- **Ruby Components** - `Bridgetown::Component` pattern, slots, lifecycle hooks, sidecar CSS/JS auto-bundling
- **Content** - Posts, custom collections, data files, `_defaults.yml` cascade, pagination
- **Styling** - PostCSS, CSS custom properties, CSS nesting, `asset_path` helpers
- **Configuration** - `initializers.rb` (requires restart) vs `site_metadata.yml` (hot reload)
- **Plugins & Builders** - `SiteBuilder` subclass, helper/generator/hook DSL, Zeitwerk naming
- **Advanced** - Prototype pages, Declarative Shadow DOM, SSR/Roda routes, external sources

## Pending Task: Phase 7 - Screenshot Capture from SOSI Demo Site

**Status:** Not started. Phases 1-6 are complete (i18n, layouts, styling, zh content, JS, en/ja translations).

### Goal

Capture screenshots from `https://app.demo.sosi.com.tw/` in three languages (zh, en, ja) to replace the Word-doc-extracted images with fresh, locale-specific screenshots.

### Current State

- **Chinese screenshots exist** in `src/images/screenshots/zh/` (36 jpg files: image002–image070, extracted from Word doc). These work but are from the original document.
- **English & Japanese screenshot dirs exist** but are **empty** (`src/images/screenshots/en/`, `src/images/screenshots/ja/`).
- **All en/ja content pages currently point to `/images/screenshots/zh/`** (Chinese screenshots as fallback). After capturing locale-specific screenshots, update the image paths in en/ja markdown files.

### Screenshots Referenced in Content (28 unique images)

| Image File | Used In | Content |
|---|---|---|
| image004.jpg | introduction.md | Product architecture diagram |
| image008.jpg | login-security.md | Login screen |
| image010.jpg | login-security.md | 2FA setup screen |
| image012.jpg | login-security.md | Recovery codes |
| image014.jpg | login-security.md | Account lockout screen |
| image016.jpg | login-security.md | Unlock operation |
| image020.jpg | admin/devices.md | Device information |
| image022.jpg | admin/devices.md | Connection logs |
| image026.jpg | admin/devices.md | Connection actions |
| image030.jpg | admin/devices.md | SFTP settings |
| image032.jpg | admin/devices.md | Device settings |
| image034.jpg | admin/users.md | User list |
| image036.jpg | admin/users.md | User records |
| image038.jpg | admin/users.md | Account edit |
| image040.jpg | admin/users.md | 2FA settings |
| image042.jpg | admin/credentials.md | Credential list |
| image044.jpg | admin/credentials.md | View credential |
| image046.jpg | admin/connection-auth.md | Authorization group list |
| image048.jpg | admin/connection-auth.md | View group |
| image050.jpg | admin/connection-auth.md | Authorized device overview |
| image052.jpg | admin/connection-auth.md | Create connection authorization |
| image058.jpg | admin/connection-auth.md | Authorization details |
| image060.jpg | admin/domains.md | Domain list |
| image062.jpg | admin/domains.md | Add domain |
| image064.jpg | admin/site-settings.md | Site-wide 2FA settings |
| image066.jpg | admin/audit.md | Connection log list |
| image068.jpg | admin/audit.md | File transfer logs |
| image070.jpg | admin/audit.md | Activity log list |

### Process

1. **Ask user for credentials** to `https://app.demo.sosi.com.tw/` (needs admin account)
2. **Open Chrome** to the demo site, user inputs credentials
3. **For each of the 3 languages** (zh, en, ja):
   - Switch UI language in the SOSI app
   - Navigate to each page/section and take a screenshot
   - Save to `src/images/screenshots/{locale}/` with same filenames (image004.jpg, etc.)
4. **Update en/ja markdown files**: Change image paths from `/images/screenshots/zh/` to `/images/screenshots/en/` and `/images/screenshots/ja/` respectively
5. **Optionally re-capture zh screenshots** with fresh ones from the demo site (higher quality than Word doc extraction)

### Two Sessions Needed

- **Session A (Regular User):** Login page, 2FA setup, user connection to devices, dashboard
  - Covers: login-security.md, quick-start.md
- **Session B (Admin):** Admin console — devices, users, credentials, authorization, watermark, domains, settings, audit
  - Covers: admin/*.md pages

### To Start Phase 7

Tell Claude: "進行 Phase 7 截圖" and provide login credentials for the SOSI demo site.
