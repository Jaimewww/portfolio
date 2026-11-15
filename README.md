# jaime.dev — Portfolio

Personal portfolio of **Jaime Landázuri**, full-stack developer from Loja, Ecuador.

Built with **Astro** — static HTML output, zero client-side JavaScript, components-only architecture.

## Design

Bold-blocks brutalist direction with a light lilac (`#c4b5fd`) accent on near-black surfaces. The design was iterated as HTML artboards under `design/portafolio-dev/` before implementation (the chosen artboard is `03-bold-blocks.html`; the others are alternatives).

## Structure

- `src/components/` — Header, Hero, Marquee, Projects, Agentica, Skills, Contact, Footer
- `src/data/` — site identity, projects, skills and agentic-section content (single source of truth)
- `src/styles/global.css` — design tokens and base styles
- `src/layouts/Base.astro` — HTML document shell

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## License

Code and design: all rights reserved. Content reflects the site owner's experience; project descriptions reference private repositories (sensitive work), so the cards intentionally ship without links.
