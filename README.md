# StickerSmash 🖼️

A small cross-platform (iOS, Android, web) image app built with **Expo**. Pick a photo from your device, view it in a framed image viewer, and — as the next steps of the build — drop emoji stickers on it and save the result. It's based on Expo's official tutorial and is being developed incrementally.

## Built with

- [Expo SDK 56](https://docs.expo.dev/versions/v56.0.0/)
- [React Native 0.85](https://reactnative.dev/) · [React 19.2](https://react.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/) — file-based routing (typed routes enabled)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- React Compiler (enabled via Expo experiments)

## Features

**Implemented**

- Tab-based navigation (Home + About) on top of a root Stack
- Pick an image from the device library (`expo-image-picker`)
- Framed image viewer with a placeholder default image
- Reusable themed `Button` component (optional border + icon)
- Custom 404 / "Page not found" screen

**Planned (tutorial roadmap)**

- Overlay emoji stickers on the selected image
- Move/scale stickers with gestures (`react-native-gesture-handler`, `react-native-reanimated`)
- Capture and save the composed image to the device

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS) and npm
- One of the following to run the app:
  - [Expo Go](https://expo.dev/go) on a physical device, **or**
  - an [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) (macOS), **or**
  - an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/), **or**
  - a web browser

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Open the app from the terminal output — scan the QR code with Expo Go, or press `i` (iOS simulator), `a` (Android emulator), or `w` (web). You can also launch a target directly:

   ```bash
   npm run ios      # iOS simulator
   npm run android  # Android emulator
   npm run web      # web browser
   ```

## Project structure

```
StickerSmash/
├── src/
│   └── app/                  # expo-router routes (file-based)
│       ├── _layout.tsx       # root Stack navigator
│       ├── +not-found.tsx    # 404 screen
│       └── (tabs)/
│           ├── _layout.tsx   # Tabs navigator (Home + About)
│           ├── index.tsx     # Home: pick & view an image
│           └── about.tsx     # About screen
├── components/
│   ├── Button.tsx            # reusable themed button
│   └── ImageViewer.tsx       # expo-image wrapper
├── assets/
│   ├── images/               # icons, splash, emoji & placeholder images
│   └── expo.icon/            # iOS app icon source
├── example/                  # original create-expo-app starter (kept for reference)
├── app.json                  # Expo app config
└── tsconfig.json             # TypeScript config + path aliases
```

## Routing

The app uses [Expo Router](https://docs.expo.dev/router/introduction/), where files under `src/app` become routes:

- `_layout.tsx` defines a root **Stack** and hides its header for the tabs group.
- `(tabs)/_layout.tsx` defines a **Tabs** navigator (dark theme, yellow active tint) with two screens: **Home** (`index.tsx`) and **About** (`about.tsx`).
- `+not-found.tsx` handles unmatched routes.

## Path aliases

Configured in `tsconfig.json` for cleaner imports:

| Alias            | Resolves to     |
| ---------------- | --------------- |
| `@/*`            | `./src/*`       |
| `@/assets/*`     | `./assets/*`    |
| `@/components/*` | `./components/*` |

Example: `import Button from "@/components/Button";`

## Scripts

| Command                  | Description                              |
| ------------------------ | ---------------------------------------- |
| `npm start`              | Start the Expo dev server                |
| `npm run ios`            | Start and open the iOS simulator         |
| `npm run android`        | Start and open the Android emulator      |
| `npm run web`            | Start and open the web build             |
| `npm run lint`           | Run Expo's ESLint                        |
| `npm run reset-project`  | Reset to a blank starter project         |

## Tech notes

- **Typed routes** and **React Compiler** are enabled via `experiments` in `app.json`.
- TypeScript runs in **strict** mode (`tsconfig.json`).
- Web builds use static output (`web.output: "static"` in `app.json`).

## Credit & license

Based on Expo's official [tutorial](https://docs.expo.dev/tutorial/introduction/). Released under the [MIT License](./LICENSE).
