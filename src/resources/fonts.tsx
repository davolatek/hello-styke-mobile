import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";

// SplashScreen.preventAutoHideAsync();

export const useLoadedFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  // const preloadFonts = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // useEffect(() => {
  //   (async () => await preloadFonts())();
  // }, [fontsLoaded]);

  return { fontsLoaded };
};
