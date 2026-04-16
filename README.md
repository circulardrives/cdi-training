# CDI Training Portal

Interactive training modules for the **Circular Drive Initiative (CDI)** — a non-profit promoting secure, sustainable media sanitization and drive reuse.

## Modules

The certification program covers 5 modules with 19 topics total:

1. **Introduction to Sustainability in Data Storage** — E-waste crisis, environmental impact of HDDs vs SSDs, GHG accounting, and the destruction problem
2. **Circularity in the Storage Economy** — Circular economy principles, economic imperatives, GHG allocation incentives, and hardware interoperability
3. **Introduction to Media Sanitization & Risk Assessment** — Sanitization definitions, target data, risk assessment framework, and regulatory landscape
4. **IEEE 2883 and Media Sanitization Methods** — Clear, Purge (Cryptographic Erase, Block Erase, Overwrite), and Destruct methods
5. **Building a Trustworthy Sanitization Program** — Sanitization lifecycle, verification, Certificate of Sanitization, and hardware root of trust

## Features

- Interactive topic pages with steppers, toggles, expandable cards, and comparison views
- Progress tracking persisted in localStorage (visit-based completion)
- Cross-module navigation with prev/next topic flow
- Completion certificate generator with confetti and PNG download
- Light theme using CDI brand colors (Simply Green, Foliage Green, Green Spruce, Real Teal, Lilac Gray)

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [shadcn/ui](https://ui.shadcn.com/) (base-ui primitives)
- [Tailwind CSS](https://tailwindcss.com/) v4
- TypeScript
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com/)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Standards Referenced

- CDI Data Sanitization Best Practices
- IEEE 2883-2022
- NIST SP 800-88 Rev. 2
- ISO/IEC 27040:2024

## License

Copyright Circular Drive Initiative. All rights reserved.
