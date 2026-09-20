# CoreUI-Kit

**CoreUI-Kit is a premium, open-source copy-and-paste UI registry for React and Tailwind CSS.**

It gives frontend developers polished interface blocks that can be previewed live, inspected line by line, and copied directly into an application.

## Launch categories

- **Fintech Blocks**
- **Dashboard Elements**
- **Interactive Sections**

## Included components

- Transaction & Exchange Overview
- Responsive Sidebar Navigation
- Glassmorphic Upcoming Features Card

## Features

- Live component previews
- One-click **Copy Code**
- Search and category filtering
- Responsive React components
- Tailwind CSS styling
- Vite raw-source imports so displayed code matches the actual component file
- Machine-readable component registry
- MIT license
- Vercel-ready configuration

## Project structure

```text
CoreUI-Kit/
├── src/
│   ├── components/
│   │   ├── registry/
│   │   │   ├── dashboard/
│   │   │   ├── fintech/
│   │   │   └── interactive/
│   │   └── showcase/
│   ├── registry/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── registry.json
├── vercel.json
└── vite.config.js
```

## Getting started

```bash
git clone https://github.com/HSF237/CoreUI-Kit.git
cd CoreUI-Kit
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Import this GitHub repository into Vercel. The repository already contains a `vercel.json` configured for Vite:

- Build command: `npm run build`
- Output directory: `dist`

## Contributing

1. Fork the repository.
2. Create a focused feature branch.
3. Add or improve a reusable component.
4. Check responsiveness and accessibility.
5. Open a pull request with screenshots for visual changes.

## License

MIT. See [LICENSE](./LICENSE).
