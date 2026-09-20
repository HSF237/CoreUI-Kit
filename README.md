# CoreUI-Kit

**CoreUI-Kit is a premium, open-source copy-and-paste UI registry for React and Tailwind CSS.**

Browse polished production-minded interface blocks, preview them live, inspect the exact source file, and copy the code directly into your own product.

**Live showcase:** https://core-ui-kit-livid.vercel.app/

## v0.2 — 27 production-ready blocks

CoreUI-Kit currently ships six categories:

| Category | Blocks |
| --- | ---: |
| Fintech Blocks | 5 |
| Dashboards | 5 |
| Interactive Sections | 5 |
| Buttons & Actions | 4 |
| Loaders & Progress | 4 |
| Forms & Inputs | 4 |
| **Total** | **27** |

### Fintech Blocks
- Transaction & Exchange Overview
- Premium Wallet Card
- Payment Method Stack
- Revenue Metric Card
- Invoice Status Panel

### Dashboards
- Responsive Sidebar Navigation
- Analytics Command Center
- Activity Timeline
- Data Table Pro
- System Health Panel

### Interactive Sections
- Glassmorphic Upcoming Features
- Bento Feature Grid
- Notification Center
- Pricing Tier Card
- Command Palette

### Buttons & Actions
- Premium Action Buttons
- Segmented Control
- Gradient Icon Buttons
- Floating Action Dock

### Loaders & Progress
- Loading Status Panel
- Multi-Step Progress
- Circular Progress Stats
- Skeleton Dashboard

### Forms & Inputs
- Smart Login Panel
- Profile Settings Form
- Search & Filter Bar
- File Upload Dropzone

## Why CoreUI-Kit?

- Live rendered previews.
- Preview / Code tabs for every block.
- One-click **Copy code**.
- Exact source display powered by Vite raw imports.
- Search and category filtering.
- Responsive mobile and desktop states.
- React + Tailwind CSS.
- Minimal dependency surface.
- Machine-readable `registry.json`.
- Vercel-ready deployment.
- MIT licensed.

## Architecture

```text
CoreUI-Kit/
├── src/
│   ├── components/
│   │   ├── registry/
│   │   │   ├── buttons/
│   │   │   ├── dashboard/
│   │   │   ├── fintech/
│   │   │   ├── forms/
│   │   │   ├── interactive/
│   │   │   └── loaders/
│   │   └── showcase/
│   │       ├── RegistryShowcase.jsx
│   │       └── SnippetBlock.jsx
│   ├── registry/
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── registry.json
├── vercel.json
├── vite.config.js
├── package.json
├── README.md
└── LICENSE
```

## How source copying works

A component is imported normally for the live preview and again with Vite's `?raw` suffix for the source viewer.

```js
import Component from "../components/registry/example/Component.jsx";
import componentSource from "../components/registry/example/Component.jsx?raw";
```

This keeps the preview and copied source synchronized from one real component file.

## Getting Started

### Requirements

- Node.js 20+
- npm

### Clone

```bash
git clone https://github.com/HSF237/CoreUI-Kit.git
cd CoreUI-Kit
```

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

### Production build

```bash
npm run build
npm run preview
```

## Adding a component

1. Add the component under `src/components/registry/<category>/`.
2. Import the component and its `?raw` source in `src/registry/index.js`.
3. Add its metadata to `registryItems`.
4. Add matching metadata to `registry.json`.
5. Test the live preview at mobile and desktop widths.
6. Confirm the copied source is self-contained and readable.

## Deployment

### Vercel

The repository is connected to Vercel and production updates deploy from `main`.

The included `vercel.json` uses:

```text
Framework: Vite
Build command: npm run build
Output directory: dist
```

### GitHub repository

https://github.com/HSF237/CoreUI-Kit

## Contributing

Contributions are welcome. Keep pull requests focused, include screenshots for visual changes, test responsive states, and prefer components that solve real product UI needs rather than increasing the component count for its own sake.

## License

CoreUI-Kit is released under the **MIT License**. See [LICENSE](./LICENSE).
