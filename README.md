<h3 align="center">AquaFlow Plumbing Co. — Website</h3>

<p align="center">
  Reliable plumbing solutions engineered for your home and business.
  <br />
  Production: <a href="https://aquaflowplumbing.com">https://aquaflowplumbing.com</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/bun-runtime-f9f1e1?logo=bun&logoColor=black" alt="bun" />
</p>

---

### Tech Stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 16 (App Router, static export)            |
| Styling    | Tailwind CSS v4 + Stitch Tokens                   |
| Language   | TypeScript 5                                      |
| Runtime    | bun                                               |
| Hosting    | Cloudflare Pages                                  |
| Forms      | Pixelotech central forms API                      |

### Quick Start

```bash
bun install
bun run dev
```

Open **[http://localhost:3000](http://localhost:3000)** to view the site.

### Build & Static Export

```bash
bun run build
```

The static output is emitted to `out/` with pre-rendered HTML, clean routing, sitemap, and Cloudflare `_headers`.

### Project Structure

```
src/app/           Pages, layout, sitemap.ts, robots.ts, 404, privacy
src/components/    layout/ (header, footer) · sections/ (hero, services, why-choose-us, testimonials, contact-section, contact-form)
src/lib/           site.ts (business info) · forms.ts (form submission layer) · utils.ts (cn helper)
scripts/           postbuild.mjs (static route cleanup)
public/            images/ · og-image.jpg · _headers
```

---

*Built by Pixelotech · Conforms to Pixelotech Website Standard v1.0.0*
