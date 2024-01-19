import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./root.navigation";
import { useLoadedFonts } from "../resources/fonts";
import { ReactNode, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { lightTheme } from "../theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "../redux/store";

interface Props {
  children: ReactNode;
}
const NativeBaseThemeProvider = ({ children }: Props) => {
  return <NativeBaseProvider theme={lightTheme}>{children}</NativeBaseProvider>;
};

export const AppRootNavigator = () => {
  const { fontsLoaded } = useLoadedFonts();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 50000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <NativeBaseThemeProvider>
        <PersistGate persistor={persistor} loading={null}>
          <Provider store={store}>
            <RootNavigator />
          </Provider>
        </PersistGate>
      </NativeBaseThemeProvider>
    </NavigationContainer>
  );
};
