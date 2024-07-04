import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView, StatusBar, View } from "react-native";
import type { StatusBarStyle } from "react-native";
import { DataProvider } from "@/store/DataContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "hind-regular": require("../assets/fonts/Hind-Regular.ttf"),
    "hind-light": require("../assets/fonts/Hind-Light.ttf"),
    "hind-medium": require("../assets/fonts/Hind-Medium.ttf"),
    "hind-semibold": require("../assets/fonts/Hind-SemiBold.ttf"),
    "hind-bold": require("../assets/fonts/Hind-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar animated={true} backgroundColor="#f4f6fc" hidden={false} />
      <DataProvider>
        <View style={{ flex: 1, marginTop: StatusBar?.currentHeight || 60 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </View>
      </DataProvider>
    </ThemeProvider>
  );
}
