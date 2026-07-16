<h1 align="center">
  <br/>
  🔒 Bundle Builder
  <br/>
</h1>

<p align="center">
  An interactive multi-step bundle configurator for home security products — cameras, sensors, plans, and accessories.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Available Scripts](#-available-scripts)
- [Architecture](#-architecture)

---

## 🌟 Overview

**Bundle Builder** is a React-based product configurator that guides users through a 4-step wizard to build a custom home security package. Users can choose cameras, a monitoring plan, sensors, and accessories — with a live order review panel updating in real time as they configure their bundle.

---

## ✨ Features

- 🧭 **4-Step Guided Wizard** — Step-by-step accordion UI for selecting cameras, plans, sensors, and accessories
- 🛒 **Live Review Panel** — Sticky order summary panel that updates instantly with selected items, quantities, and pricing
- ➕➖ **Quantity Controls** — Increment/decrement product quantities per variant
- 🏷️ **Variant Selection** — Support for product variants (e.g., different camera models)
- 💸 **Dynamic Pricing** — Real-time total calculation including compare-at prices and shipping
- 📦 **Bundle Management** — Clear the entire bundle and start over with one click
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop layouts
- ⚡ **Blazing Fast** — Powered by Vite for near-instant HMR during development

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0 | Type safety |
| [Redux Toolkit](https://redux-toolkit.js.org/) | ^2.12 | Global state management |
| [React Redux](https://react-redux.js.org/) | ^9.3 | React bindings for Redux |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.3 | Utility-first styling |
| [Vite](https://vite.dev/) | ^8.1 | Build tool & dev server |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5.7 | Icon library |
| [SweetAlert2](https://sweetalert2.github.io/) | ^11 | Beautiful alert dialogs |

---

## 📁 Project Structure

```
bundle_builder/
├── public/                   # Static assets (icons, images)
├── src/
│   ├── app/
│   │   ├── store.ts          # Redux store configuration
│   │   └── provider.tsx      # Redux Provider wrapper
│   ├── components/
│   │   ├── Accordion/        # Collapsible step container
│   │   ├── ProductCard/      # Individual product card with variants
│   │   ├── ReviewPanel/      # Order summary sidebar
│   │   └── StepHeader/       # Step header with icon and title
│   ├── data/
│   │   └── products.json     # Product catalog data
│   ├── features/
│   │   ├── bundle/
│   │   │   ├── bundleSlice.ts  # Redux slice (actions & reducers)
│   │   │   ├── selectors.ts    # Memoized state selectors
│   │   │   └── types.ts        # TypeScript interfaces
│   │   └── steps.ts          # Step definitions (id, title, category)
│   ├── hooks/
│   │   └── useAppSelector.ts # Typed Redux selector hook
│   ├── pages/
│   │   └── Home.tsx          # Main application page
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** `>= 18.x` — [Download here](https://nodejs.org/)
- **npm** `>= 9.x` _(comes with Node.js)_

Verify your versions:

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/bundle_builder.git
cd bundle_builder
```

2. **Install dependencies:**

```bash
npm install
```

### Running Locally

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at **[http://localhost:5173](http://localhost:5173)**

### Building for Production

Compile TypeScript and bundle the app for production:

```bash
npm run build
```

The optimized output will be placed in the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start dev server with HMR |
| `build` | `npm run build` | Build for production |
| `preview` | `npm run preview` | Preview production build |
| `lint` | `npm run lint` | Run ESLint checks |

---

## 🏗 Architecture

The app follows a **feature-based architecture** with Redux Toolkit for state management.

### State Management

All bundle selections are stored in a single Redux slice (`bundleSlice`):

```
BundleState
├── currentStep: number           — active wizard step
└── selections: Record<productId, {
      selectedVariant: string | null
      quantities: Record<variantId, number>
    }>
```

**Actions available:**
- `setCurrentStep(step)` — navigate between wizard steps
- `increaseQuantity({ productId, variantId })` — add one unit
- `decreaseQuantity({ productId, variantId })` — remove one unit
- `selectVariant({ productId, variantId })` — choose a product variant
- `clearBundle()` — reset all selections

### Data Flow

```
products.json → ProductCard → dispatch(action) → bundleSlice → selectors → ReviewPanel
```

### Bundle Steps

| Step | Category | Description |
|---|---|---|
| 1 | `camera` | Choose your cameras |
| 2 | `plan` | Choose your monitoring plan |
| 3 | `sensor` | Choose your sensors |
| 4 | `accessory` | Add extra protection |

---

<p align="center">Made with ❤️ using React & TypeScript</p>
