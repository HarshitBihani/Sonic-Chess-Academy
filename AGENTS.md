# AGENTS — Sonic Chess Academy

## Project Architecture

Next.js 16 App Router project. All pages live under `app/` using the `page.tsx` convention. Shared layout (navbar, footer, WhatsApp button) is in `app/layout.tsx`.

## Key Directories

```
app/            — Route pages (home, about, courses, coaches, tournaments, contact)
components/     — Reusable UI components
  ui/           — shadcn/Radix primitives (do not modify by hand; regenerate via CLI)
  hero-section.tsx
  courses-preview.tsx
  why-choose-us.tsx
  team-sonic-section.tsx
  cta-section.tsx
  navbar.tsx
  footer.tsx
  whatsapp-button.tsx
  chess-background.tsx
public/         — Static assets (logo, icons)
styles/         — Global CSS (also duplicated at app/globals.css)
lib/utils.ts    — `cn()` helper for merging Tailwind classes
```

## Coding Conventions

- Components use Framer Motion for animations (`initial/animate/transition` pattern).
- Dark-mode support via `next-themes`; CSS variables defined in `globals.css`.
- Tailwind v4 — config is inlined via `@theme` in `globals.css`, no `tailwind.config.js`.
- All icons come from `lucide-react`.
- shadcn component config is in `components.json`.

## Non-Obvious Decisions

- The hero stats section was intentionally reduced to two items (Course Levels, Languages) — the "500+ Active Students" and "50+ Tournaments" claims were removed per product requirements.
- `pnpm-lock.yaml` is committed; use `pnpm` as the package manager.
