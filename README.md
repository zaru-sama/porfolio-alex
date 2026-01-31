# Portfolio Website (Astro)

A modern, high-performance portfolio website built with **Astro** and **Tailwind CSS**. Includes dark mode, smooth animations, MDX-based blog posts, and SEO-friendly defaults.

![Astro](https://img.shields.io/badge/Astro-5.15.4-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.10-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

## ✨ Features

- 🚀 **Astro** for fast, lightweight pages
- 🎨 **Theme + Dark Mode** ready
- 📱 **Fully Responsive**
- 🎭 **Animations** (AOS + custom effects)
- 🔍 **SEO + Social cards** support
- ⚡ **Performance minded** (image optimization, code splitting, lazy loading)

## 🛠️ Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Animations**: AOS, Motion
- **Physics**: Matter.js
- **Type Checking**: TypeScript

## 📦 Install

```bash
# pnpm (recommended)
pnpm install

# npm
npm install
```

## 🔧 Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Then set `PUBLIC_SITE_URL` when you know your final domain:

```env
PUBLIC_SITE_URL=https://porfolio-alex.vercel.app
```

### Why `PUBLIC_SITE_URL` matters

Astro uses it for canonical URLs, sitemap generation, RSS feeds, and some SEO meta tags. If you don’t know it yet, keep the placeholder and update it after deployment.

## 🚀 Development

```bash
pnpm dev
# visit http://localhost:5200
```

## 📦 Build

```bash
pnpm build
pnpm preview
```

## 🧩 Personalization checklist

Where you’ll typically replace template defaults:

- **.env / .env.example** → `PUBLIC_SITE_URL`
- **astro.config.mjs** → fallback `siteUrl` value (used if env var isn’t set)
- **package.json** → `name`, `author`, `repository`, `homepage`, `bugs`
- **README.md** → project title/description and credits

## 🙏 Credits

Design / asset credits used in this template:

- Mockups: https://www.figma.com/@brixtemplates
- Mockups: https://www.figma.com/@artboardstudio
- Icons: https://www.figma.com/@iconorastudio
- Stickers: https://www.figma.com/community/file/1392100849031958853/programming-sticker-1-0

## 📄 License

MIT
