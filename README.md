# Deliveroo

## Install

- bun i
- bunx expo i react-native-web react-dom @expo/metro-runtime
- bun i --dev @expo/metro-runtime
  - add this import to App.js: import "@expo/metro-runtime";
- bun i @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack
- bun i react-native-heroicons
- bun create sanity@latest -- --project ea3eep63 --dataset production --provider sanity
- bun install @sanity/client @sanity/image-url

## Run

- bun start (main folder for RN)
- bun dev (from deliveroo-clone) for sanity
- bunx sanity cors add http://localhost:19006 (add localhost:3000 to admitted url)
- bunx sanity cors add http://localhost:3000 (add localhost:3000 to admitted url)

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
- NOTE: Pressable is updated version of TouchableOpacity
- contentContainerStyle -> defines inner styles (like padding)
- IMPORTANT NOTE ABOUT THIS WORKING IN WEB VERSION:
  - add style={{ flex: 1 }} to main SafeAreaView for it to scroll on web

## React Nav

- Restaurant card has example of linking
- App.js is where the root is set up
- When using navigation, you can pass props which can then be accessed from useRoute as seen in RestaurantScreen.js
- useLayoutEffect -> lets you set options to turn the header off

## Images

- need to give them a height and width for them to show

## Santity

- CMS
- Create sanity.js in root folder
- imageUrlBuilder from sanity gives you urls from backend
- Query with GROK
  - gives all featured data without giving actual object information - \*[_type == "featured"] {
    ...,
  - Spreads out resteraunts and dishes
    } - \*[_type == "featured"] {
    ...,
    restaurants[]->{
    ...,
    dishes[]->
    }
    }
  - Grab values based on id and get only name from type - \*[_type == "featured" && _id == "53f3f628-ba70-4957-a375-7c8732dfc7fa"
    ] {
    ...,
    restaurants[] -> {
    ...,
    dishes[] ->,
    type->{
    name
    }
    }
    }[0]
