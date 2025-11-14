import { Linking, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/fersonull');
  };

  return (
    <View className="flex-1 px-4 py-6 bg-white">
      <View className="">
        <Text className="text-slate-900 text-sm font-medium tracking-tight">
          React Native Template
        </Text>
      </View>

      <View className="flex-1 mt-4">
        <View className="mb-6">
          <Text className="text-slate-900 text-4xl font-bold tracking-tight mb-2 leading-tight">
            Build mobile apps with modern tools
          </Text>
          <Text className="text-slate-600 text-lg leading-relaxed">
            A production-ready React Native template with Expo Router, NativeWind, and TypeScript.
          </Text>
        </View>

        <View className="gap-2">
          <View className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <View className="flex-row items-center mb-2">
              <View className="w-8 h-8 bg-blue-100 rounded-md items-center justify-center mr-3">
                <Text className="text-blue-600 text-sm font-semibold">🧭</Text>
              </View>
              <Text className="text-slate-900 font-semibold">Expo Router</Text>
            </View>
            <Text className="text-slate-600 text-sm">
              File-based routing with type-safe navigation
            </Text>
          </View>

          <View className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <View className="flex-row items-center mb-2">
              <View className="w-8 h-8 bg-cyan-100 rounded-md items-center justify-center mr-3">
                <Text className="text-cyan-600 text-sm font-semibold">🎨</Text>
              </View>
              <Text className="text-slate-900 font-semibold">NativeWind</Text>
            </View>
            <Text className="text-slate-600 text-sm">
              TailwindCSS utility classes for React Native
            </Text>
          </View>

          <View className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <View className="flex-row items-center mb-2">
              <View className="w-8 h-8 bg-violet-100 rounded-md items-center justify-center mr-3">
                <Text className="text-violet-600 text-sm font-semibold">📘</Text>
              </View>
              <Text className="text-slate-900 font-semibold">TypeScript</Text>
            </View>
            <Text className="text-slate-600 text-sm">
              Full type safety and developer experience
            </Text>
          </View>
        </View>
      </View>

      <View className="gap-2">
        <TouchableOpacity
          onPress={handleGitHubPress}
          className="bg-slate-900 rounded-lg px-6 py-4 active:bg-slate-800"
        >
          <View className="flex-row items-center justify-center">
            <Text className="text-white font-semibold mr-2">
              View on GitHub
            </Text>
            <Text className="text-white">→</Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row justify-center gap-1 items-center">
          <Text className="text-slate-500 text-sm text-center">
            Created by
          </Text>
          <Text className="inline">
            <TouchableOpacity onPress={handleGitHubPress} className="inline-block">
              <Text className="text-slate-900 font-medium">fersonull</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}