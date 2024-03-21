# Deliveroo

## Install

- bun i
- bunx expo i react-native-web react-dom @expo/metro-runtime
- bun i --dev @expo/metro-runtime
  - add this import to App.js: import "@expo/metro-runtime";
- bun i @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack
- bun i react-native-heroicons
- bun create sanity@latest -- --project ea3eep63 --dataset production --provider sanity
- bun install @sanity/client (@sanity/image-url)

## Run

- bun start (main folder for RN)
- bun dev (from deliveroo-clone) for sanity

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

## React Native

- SafeAreaView makes sure nothing is out of bounds of users screen
- View is flex-col by default -> Still need to add flex to beginning if you want to use flex-1 on a child
- ScrollView is the same as a View but it is scrollable
  - FlatList also works a little better and performs better
- TouchableOpacity -> when you touch the area it changes color
- contentContainerStyle -> defines inner styles (like padding)

## Santity

- CMS
- Create sanity.js in root folder
- imageUrlBuilder from sanity gives you urls from backend
