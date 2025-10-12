# Next.js Portfolio (Urjit)

## Prerequisites
- Node.js 18+
- npm

## Setup
1. Copy your images into `public/assets/images/`:
   - From your existing project: `assets/images/*` -> `next-portfolio/public/assets/images/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## Structure
- `app/layout.js` — global HTML, metadata, Bootstrap script.
- `app/globals.css` — base styles + Bootstrap/AOS/Icons imports.
- `app/page.js` — home page composing components.
- `app/components/` — `Hero`, `ProjectsGrid`, `ThemeToggle`, `AOSInit`.
- `app/data/projects.json` — projects data (copied from original `assets/projects.json`).
- `public/assets/images/` — images used by components.

## Notes
- Images are optimized with `next/image`.
- Theme toggle state is saved in `localStorage`.
- AOS is initialized client-side in `AOSInit`.

## Next steps (optional)
- Add sections for Skills, Timeline, Contact.
- Create dynamic routes for `/projects/[slug]`.
- Add API route for contact form.
# Urjit_Upadhyay_Portfolio
