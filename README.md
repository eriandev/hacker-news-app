# Hacker News App

## 🦾 Technologies

- [React](https://react.dev/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

## 🚀 Get Started

You need to be using:

- [Git](https://git-scm.com/downloads)
- [Nodejs v18 or higher](https://nodejs.org/es/download/)

### Environment Variables

Create an `.env` file in the root project and provide the following values:

```bash
EXPO_PUBLIC_API_URL="https://hn.algolia.com/api/v1"
```

### Start the Metro Server

First, you will need to start Metro, the JavaScript bundler that ships with React Native.
To start Metro, run the following command from the root of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Start your Application

Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project.
Run the following command to start your Android or iOS app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## 🎉 Congratulations!

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

## 🔧 Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
