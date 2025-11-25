# GitHub Trending Repositories - React Native App

A modern React Native application built with Expo that allows users to browse and explore trending GitHub repositories. The app fetches repositories created after July 15, 2024, sorted by stars, and provides an intuitive interface to view repository details.

## Features

- 📱 **Trending Repositories**: Browse a list of trending GitHub repositories sorted by stars
- 🔍 **Repository Details**: View detailed information about each repository including owner, description, and star count
- ⚙️ **Settings Screen**: Manage app preferences including notifications and auto-refresh
- 🔄 **Pull to Refresh**: Refresh the repository list with a simple pull gesture
- ♾️ **Infinite Scroll**: Automatically load more repositories as you scroll
- 🎨 **Modern UI**: Clean and intuitive user interface with consistent theming
- 📱 **Cross-Platform**: Works on iOS, Android, and Web

## Tech Stack

- **React Native** (0.81.5) - Mobile framework
- **Expo** (~54.0.25) - Development platform and toolchain
- **Expo Router** (~6.0.15) - File-based routing system
- **TypeScript** (~5.9.2) - Type safety
- **FlashList** (@shopify/flash-list) - High-performance list component
- **React Navigation** - Navigation library
- **Expo Vector Icons** - Icon library

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, but recommended)
- For iOS development: [Xcode](https://developer.apple.com/xcode/) (macOS only)
- For Android development: [Android Studio](https://developer.android.com/studio)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd rn-etiqa-assesment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on your preferred platform**
   - Press `i` to open in iOS simulator
   - Press `a` to open in Android emulator
   - Press `w` to open in web browser
   - Scan the QR code with Expo Go app on your physical device

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start the app on Android emulator
- `npm run ios` - Start the app on iOS simulator
- `npm run web` - Start the app in web browser
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
rn-etiqa-assesment/
├── app/                    # Expo Router app directory
│   ├── _layout.tsx        # Root layout
│   ├── (trending)/        # Trending repositories feature
│   │   ├── _layout.tsx    # Trending layout
│   │   ├── index.tsx      # Trending list screen
│   │   └── [id].tsx       # Repository detail screen
│   └── settings.tsx       # Settings screen
├── src/
│   ├── assets/            # Images and static assets
│   ├── components/        # Reusable components
│   │   ├── RepositoryCard.tsx
│   │   └── SettingItemRow.tsx
│   ├── constant/          # Constants and theme
│   │   └── theme.ts
│   ├── data/              # Data and configuration
│   │   └── settingsData.ts
│   ├── hooks/             # Custom React hooks
│   │   └── useGitHubRepositories.ts
│   └── types/             # TypeScript type definitions
│       ├── GithubProps/
│       └── Settings.ts
├── app.json               # Expo configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Key Features

### Trending Repositories Screen

- Displays a list of trending GitHub repositories
- Fetches repositories created after July 15, 2024, sorted by stars
- Implements pull-to-refresh functionality
- Supports infinite scrolling with pagination
- Shows loading states and error handling
- Each repository card displays:
  - Repository name
  - Description
  - Owner avatar and username
  - Star count (formatted as k for thousands)

### Repository Detail Screen

- Shows comprehensive information about a selected repository
- Displays owner avatar, repository name, and ID
- Shows owner information and star count
- Displays full repository description
- Clean, scrollable layout

### Settings Screen

- Manage app preferences:
  - Notifications toggle
  - Auto-refresh toggle
- View app information:
  - App version
  - Links to GitHub, Help, Terms, and Privacy Policy

## API Integration

The app uses the GitHub Search API to fetch trending repositories:

```
GET https://api.github.com/search/repositories?q=created:>2024-07-15&sort=stars&order=desc
```

The API endpoint is configured in `src/hooks/useGitHubRepositories.ts` and includes:

- Pagination support
- Error handling with cooldown periods
- Loading states management
- Automatic retry logic

## Customization

### Theme

The app uses a centralized theme configuration located in `src/constant/theme.ts`. You can customize:

- Colors
- Fonts
- Sizes
- Spacing

### API Configuration

To modify the GitHub API query, edit the `GITHUB_API_BASE_URL` constant in `src/hooks/useGitHubRepositories.ts`.

## Development

This project uses:

- **File-based routing** with Expo Router
- **TypeScript** for type safety
- **ESLint** for code quality
- **React Native New Architecture** (enabled in app.json)

## Building for Production

To build the app for production:

1. **iOS**

   ```bash
   eas build --platform ios
   ```

2. **Android**
   ```bash
   eas build --platform android
   ```

Note: You'll need to set up [EAS Build](https://docs.expo.dev/build/introduction/) for production builds.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Acknowledgments

- Built with [Expo](https://expo.dev)
- Uses [GitHub API](https://docs.github.com/en/rest)
- Icons from [Expo Vector Icons](https://docs.expo.dev/guides/icons/)

---

Made with ❤️ for GitHub Repositories
