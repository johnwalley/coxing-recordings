# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A website showcasing coxswain recordings from rowing competitions. Built with Astro, React, and Tailwind CSS. Live at www.coxing.co.uk.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm preview      # Preview production build locally
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting
```

## Architecture

**Content Collections**: Recordings are stored as JSON files in `src/content/recordings/`. The schema is defined in `src/content/config.ts` using Zod validation with fields: id, name, year, description, cox, imageSrc (YouTube embed URL).

**Page Flow**: `src/pages/index.astro` fetches all recordings via `getCollection('recordings')` and passes them to the `Recordings.tsx` React component with `client:load` hydration.

**Recordings Component**: The main interactive component at `src/components/Recordings.tsx` implements search filtering. It renders all recordings but uses CSS to hide non-matching ones (rather than removing from DOM) to prevent YouTube embeds from reloading on filter changes.

## Adding New Recordings

Create a JSON file in `src/content/recordings/` following the schema:
```json
{
  "id": "unique-slug",
  "name": "Event Name",
  "year": "2024",
  "description": "Event details",
  "cox": "Coxswain Name",
  "imageSrc": "https://www.youtube.com/embed/VIDEO_ID"
}
```

## Commit Convention

Uses Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `build:`
