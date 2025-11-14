# React Native Template

A production-ready React Native template with Expo Router, NativeWind (TailwindCSS), and TypeScript.

## ✨ What's Included

- **Expo Router** - File-based routing
- **NativeWind** - TailwindCSS for React Native
- **TypeScript** - Type safety
- **ESLint & Babel** - Code quality

## 🚀 Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Initialize Template

1. **Clone or download this template**
   ```bash
   git clone https://github.com/fersonull/rn-template.git
   cd rn-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npx expo start
   ```

4. **Choose your platform**
   - Press `w` for web
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code for physical device

## 📝 Usage

Use TailwindCSS classes in your components:

```tsx
import { View, Text } from 'react-native';

export default function MyScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold text-slate-900">
        Hello World!
      </Text>
    </View>
  );
}
```

## 🔧 Troubleshooting

If you encounter issues:

1. **Clear cache and restart**
   ```bash
   npx expo start --clear
   ```

2. **Reinstall dependencies**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📁 Project Structure

```
app/              # Screens (Expo Router)
├── _layout.tsx   # Root layout
├── index.tsx     # Home screen
└── globals.css   # Global styles

assets/           # Images and icons
```

---

Created by [fersonull](https://github.com/fersonull)