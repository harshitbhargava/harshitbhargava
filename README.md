# Harshit Bhargava — Portfolio

A modern, animated developer portfolio built with **React** and **Vite**.

## Features

- Matrix rain background animation
- Custom cursor with hover effects
- Scroll-triggered reveal animations
- Animated stat counters
- Terminal typing effect
- Parallax floating orbs
- Responsive design
- Scroll progress indicator

## Tech Stack

- React 19
- Vite
- CSS3 (custom properties, animations, grid)
- Google Fonts (Sora, JetBrains Mono)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── MatrixRain.jsx
│   ├── Navigation.jsx
│   ├── Orbs.jsx
│   ├── ScrollProgress.jsx
│   └── Skills.jsx
├── hooks/
│   ├── useCustomCursor.js
│   └── useScrollReveal.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Deployment

Build the project and deploy the `dist/` folder to any static hosting (Vercel, Netlify, GitHub Pages).

```bash
npm run build
```
