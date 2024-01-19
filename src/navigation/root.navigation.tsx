import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationStack } from "./onboarding";
import { MyTabs } from "./bottom-tab.navigations";
import { AppRootStackParamsList } from "./app.roots.types";
import { getItem, saveItem } from "../../local-storage";
import { useLayoutEffect, useState } from "react";
import * as SplasScreen from 'expo-splash-screen'


SplasScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<AppRootStackParamsList>();
export const RootNavigator = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  useLayoutEffect(() => {
    (async () => {
      const looge = await getItem("isLoggedIn");
    //   await saveItem('isLoggedIn', '')
      setTimeout(async() => {
        await SplasScreen.hideAsync()
      }, 1000);
      SetIsLoggedIn(looge as any);
    })();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!Boolean(isLoggedIn) && (
        <Stack.Screen name="onboarding" component={AuthenticationStack} />
      )}
      <Stack.Screen name="tabs" component={MyTabs} />
    </Stack.Navigator>
  );
};
