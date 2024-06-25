import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationStack } from "./onboarding";
import { MyTabs } from "./bottom-tab.navigations";
import { AppRootStackParamsList } from "./app.roots.types";
import { getItem, saveItem } from "../../local-storage";
import { useLayoutEffect, useState } from "react";
import * as SplasScreen from "expo-splash-screen";
import { HomeStack } from "./Home-navigation";
import { StykerNavigator } from "./styker/styker.root.navigation";
import { HomeWelcomeScreen } from "../screens";
import { Wallet } from "../screens/Styker/wallet";

// SplasScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<AppRootStackParamsList>();
export const RootNavigator = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  //   useLayoutEffect(() => {
  //     (async () => {
  //       const looge = await getItem("isLoggedIn");
  //     //   await saveItem('isLoggedIn', '')
  //       setTimeout(async() => {
  //         await SplasScreen.hideAsync()
  //       }, 1000);
  //       SetIsLoggedIn(looge as any);
  //     })();
  //   }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* {!Boolean(isLoggedIn) && ( */}
      <Stack.Screen name="onboarding" component={AuthenticationStack} />
      {/* )} */}
      {/* Styker */}
      <Stack.Screen name="tabs" component={MyTabs} />
      <Stack.Screen name="home_stack" component={HomeStack} />
      <Stack.Screen name="styker" component={StykerNavigator} />
      <Stack.Screen
        name="home_welcome_screen"
        component={HomeWelcomeScreen as any}
      />
      <Stack.Screen name="wallet" component={Wallet as any} />
    </Stack.Navigator>
  );
};
