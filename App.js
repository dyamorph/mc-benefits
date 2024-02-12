import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from "react-native-safe-area-context";

import MainTabBarNavigator from "./navigation/MainTabBarNavigator";

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "SF-Bold": require("./assets/fonts/sfuidisplay_bold.ttf"),
    "Inter-Semibold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "SF-SemiBold": require("./assets/fonts/sfuidisplay_semibold.otf"),
    "SF-Normal": require("./assets/fonts/sfuidisplay_normal.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer onReady={onLayoutRootView}>
        <SafeAreaView style={{ flex: 1 }} edges={["right", "left", "top"]}>
          <MainTabBarNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
