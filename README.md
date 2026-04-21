# tmpc-audit

Automated weekly Lighthouse audit of [tmpc.org](https://tmpc.org), published as a static dashboard.

## What it does

- Crawls tmpc.org (56 pages from the sitemap)
- Runs Google Lighthouse on each page
- Publishes the interactive report to Cloudflare Pages
- Runs every Monday 10:00 UTC (6:00 ET) + manually via GitHub Actions "Run workflow"

## Viewing the latest report

https://tmpc-audit.pages.dev

## Running locally

```bash
npm install
npm run audit
npx sirv-cli ./dist
```

Opens a local preview of the report.

## What to look at

- Pages with **Performance < 50** — usually image-heavy pages that need compression
- Pages with **Accessibility < 70** — missing alt text, color contrast, iframe titles
- Pages with **SEO < 90** — usually missing meta description

The full audit methodology and action list lives in TMPC's internal notes.
