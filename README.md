# iScribe Health

Marketing landing page for iScribe Health, an AI medical scribe that writes clinical notes from patient visits and syncs them to your EHR.

## Stack

- React 19 + Vite
- CSS Modules
- [@tabler/icons-react](https://tabler.io/icons)

## Getting started

```bash
npm install
npm run dev
```

## Environment

The Integrations section pulls EHR vendor logos from [logo.dev](https://www.logo.dev). To enable them, copy `.env.example` to `.env` and add a publishable token:

```
VITE_LOGODEV_TOKEN=pk_your_token
```

Without a token, those cards fall back to styled wordmark text.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build

## Notes

- The site currently uses a **test build** of Messina Sans, which watermarks certain glyphs. Swap in the licensed font before launch.
- Hero email capture and footer subscribe are UI-only and not yet wired to a backend.
