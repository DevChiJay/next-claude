# CLAUDE.md

<!-- Use context7 mcp servers for finding the updated docs for libraries -->

We are building the app described in @SPEC.md. Read that file for general architectural tasks or to double-check the exact database structure, tech stack or application architecture.

Keep your replies extremely concise and focus on conveying the key information. No unnecessary fluff, no long code snippets.

Whenever working with any third-party library or something similar, you MUST look up the official documentation to ensure that you're working with up-to-date information.
Use the DocsExplorer subagent for efficient documentation lookup.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 project using the App Router architecture, React 19, TypeScript, and Tailwind CSS v4.

## Common Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### File Structure

- `src/app/` - App Router pages and layouts
  - `page.tsx` - Main home page (client component with animations)
  - `layout.tsx` - Root layout with font configuration
  - `globals.css` - Global styles and custom animations

### Key Configuration

- **React Compiler**: Enabled in `next.config.ts` (`reactCompiler: true`)
- **Path Aliases**: `@/*` maps to `./src/*` (configured in tsconfig.json)
- **Fonts**: Uses Geist Sans and Geist Mono from `next/font/google`
- **Tailwind CSS v4**: Imported via `@import "tailwindcss"` in globals.css with inline theme configuration

### Styling Architecture

This project uses Tailwind CSS v4 with a custom configuration approach:
- Global CSS variables defined in `:root` for theming
- `@theme inline` block for Tailwind theme extensions
- Custom animations defined in globals.css using `@keyframes`
- Black background theme with animated gradients and effects

### Client Components

The main page (`src/app/page.tsx`) is a client component (`"use client"`) that includes:
- Fixed header with glassmorphism effect
- Animated hero section with gradient backgrounds
- Custom CSS animations for slide-up, fade-in, gradient shifts, and floating elements
- Footer component

When adding new pages, consider whether they need client-side interactivity before adding `"use client"` directive.
