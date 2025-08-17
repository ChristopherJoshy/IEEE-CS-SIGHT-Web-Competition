# IEEE SB CEK Society Website Design Competition — SIGHT Affinity Group

A responsive, content‑rich website built for the IEEE Student Branch CEK Society Website Design Competition. This implementation targets the SIGHT Affinity Group and follows the required structure: Home, About, Execom Members, Activities, Achievements, and Contact.

maded my Christopher Joshy — https://github.com/ChristopherJoshy/

## Tech stack
- React 18 + TypeScript, Vite
- Tailwind CSS + Radix UI primitives
- Wouter (routing), TanStack Query
- Express server with Vite middleware for dev; static build for prod

## Features mapped to the brief
- Persistent navigation: Home, About, Execom Members, Activities, Achievements, Contact
- Home: Hero/banner with logo/name, intro, CTAs, animated stats
- About: Two sections (local chapter + global IEEE SIGHT overview) with imagery
- Execom Members: Card layout with placeholders for name, position, contact
- Activities: Event cards with title, photo, description, status (past/upcoming)
- Achievements: Cards with title, optional photo, description, date/year
- Contact: Email, phone, and space for social/location
- Responsive, consistent typography/colors, subtle animations

Sample data lives under `client/src/data/` and UI components under `client/src/components/ui/`.

## Getting started
Prerequisites: Node.js 18+ recommended.

Install dependencies and start the dev server (Express + Vite):

```sh
npm install
npm run dev
```

By default the server listens on PORT (defaults to 5000). Open http://localhost:5000.

## Production build
Build client and server, then run:

```sh
npm run build
npm start
```

This serves the prebuilt client from `dist/public` via the bundled Express server.

## Project structure (simplified)
- `client/` — React app (pages, components, styles)
- `server/` — Express entry and Vite dev integration
- `shared/` — Shared types/schemas
- `Assets/` — Static assets

## Customization
- Update branding (logo/colors) in Tailwind/theme files and assets
- Edit content/data in `client/src/data/*.json`
- Extend pages/components under `client/src/pages` and `client/src/components`

## License
MIT — see `LICENSE`.

## Credits
Built for the IEEE SB CEK competition.

maded my Christopher Joshy — https://github.com/ChristopherJoshy/
