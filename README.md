# React Native Template

A production-ready React Native template with modern tools and best practices.

## 🚀 Features

- **[Expo Router](https://expo.github.io/router/)** - File-based routing with type-safe navigation
- **[NativeWind](https://www.nativewind.dev/)** - TailwindCSS utility classes for React Native
- **[TypeScript](https://www.typescriptlang.org/)** - Full type safety and enhanced developer experience
- **Hot Reload** - Fast development with instant updates
- **ESLint + Babel** - Code quality and modern JavaScript features
- **Cross-platform** - iOS, Android, and Web support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

For mobile development:
- **iOS**: [Xcode](https://developer.apple.com/xcode/) (macOS only)
- **Android**: [Android Studio](https://developer.android.com/studio)

## 🛠️ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/fersonull/rn-template.git
cd rn-template
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npx expo start
```

### 4. Run on your preferred platform

- **Web**: Press `w` in the terminal or visit `http://localhost:8081`
- **iOS Simulator**: Press `i` (requires Xcode on macOS)
- **Android Emulator**: Press `a` (requires Android Studio)
- **Physical Device**: Scan the QR code with Expo Go app

## 📁 Project Structure

```
├── app/                    # App directory (Expo Router)
│   ├── _layout.tsx        # Root layout component
│   ├── index.tsx          # Home screen
│   └── globals.css        # Global CSS styles
├── assets/                # Static assets (images, icons)
├── babel.config.js        # Babel configuration
├── metro.config.js        # Metro bundler configuration
├── tailwind.config.js     # TailwindCSS configuration
├── nativewind-env.d.ts    # NativeWind TypeScript definitions
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Styling with NativeWind

This template uses NativeWind, which allows you to use TailwindCSS utility classes in React Native:

```tsx
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-100">
      <Text className="text-2xl font-bold text-slate-900">
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

### Available Utilities

- **Layout**: `flex`, `grid`, `container`
- **Spacing**: `p-4`, `m-2`, `space-x-2`
- **Colors**: `bg-blue-500`, `text-red-600`
- **Typography**: `text-lg`, `font-bold`, `tracking-wide`
- **Borders**: `border`, `rounded-lg`, `shadow-md`

## 🧭 Navigation with Expo Router

Expo Router provides file-based routing. Create files in the `app/` directory:

```
app/
├── index.tsx              # / (home screen)
├── about.tsx              # /about
├── profile/
│   ├── index.tsx          # /profile
│   └── settings.tsx       # /profile/settings
└── _layout.tsx            # Root layout
```

### Navigation Example

```tsx
import { Link, router } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';

// Using Link component
<Link href="/about" asChild>
  <TouchableOpacity className="bg-blue-500 p-4 rounded">
    <Text className="text-white">Go to About</Text>
  </TouchableOpacity>
</Link>

// Using router programmatically
router.push('/profile');
router.back();
```

## 🔧 Configuration

### TailwindCSS Configuration

Customize your design system in `tailwind.config.js`:

```js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
      fontFamily: {
        custom: ['YourCustomFont'],
      },
    },
  },
  plugins: [],
};
```

### TypeScript Configuration

The template includes TypeScript support with strict settings. Customize `tsconfig.json` as needed:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/*"],
      "@/components/*": ["./components/*"]
    }
  }
}
```

## 📱 Building for Production

### Web

```bash
npx expo export -p web
npx serve dist
```

### Mobile (EAS Build)

1. Install EAS CLI:
```bash
npm install -g @expo/eas-cli
```

2. Configure and build:
```bash
eas build:configure
eas build --platform all
```

## 🧪 Development Tips

### Hot Reload

Changes to your code will automatically reload the app. For CSS changes, you might need to restart the dev server:

```bash
npx expo start --clear
```

### Debugging

- Use **Flipper** for advanced debugging
- **React Developer Tools** for component inspection
- **Chrome DevTools** for web development

### Code Quality

Run linting and type checking:

```bash
npx eslint . --ext .ts,.tsx
npx tsc --noEmit
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo Team](https://expo.dev/) for the amazing development platform
- [NativeWind](https://www.nativewind.dev/) for bringing TailwindCSS to React Native
- [React Native Community](https://reactnative.dev/) for the powerful framework

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/fersonull/react-native-template/issues)
- **Discussions**: [GitHub Discussions](https://github.com/fersonull/react-native-template/discussions)
- **Creator**: [@fersonull](https://github.com/fersonull)

---

**Happy coding! 🚀**