import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import GlobalStyles from "./globalStyles";

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
    <NavigationContainer onReady={onLayoutRootView}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <MainTabBarNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
