# Deliveroo

## Install

- yarn install
- bunx expo install react-native-web react-dom @expo/metro-runtime
- yarn add --dev @expo/metro-runtime
  - add this import to App.js: import "@expo/metro-runtime";
- yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack

## Run

- bunx expo start

## Change package.json start entry to either of these this

- bunx cross-env NODE_OPTIONS=--openssl-legacy-provider expo start --web
- bunx cross-env NODE_OPTIONS=--openssl-legacy-provider expo start --tunnel
  - need @expo/ngrok to be installed globally and then locally

## Android WSL-2 process (not worth it)

- sudo apt-get update
- https://gist.github.com/steveclarke/d988d89e8cdf51a8a5766d69ecb07e7b

## How to incorporate tailwind

- Use Yarn! or NPM! PNPM and Bun do not work!
- add this to tailwind.config.js
  - content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    ],
- add this to babel.config.js
  - plugins: ["nativewind/babel"]

## Hot commnads

- rnfe
