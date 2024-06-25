import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthenticationStack,
  AuthenticationStackParamsList,
} from "../onboarding";
import { MyTabs } from "../bottom-tab.navigations";
import { AppRootStackParamsList } from "../app.roots.types";
import { getItem, saveItem } from "../../../local-storage";
import { useLayoutEffect, useState } from "react";
import * as SplasScreen from "expo-splash-screen";
import { HomeStack } from "../Home-navigation";
import { NavigatorScreenParams } from "@react-navigation/native";
import { ClientTab, ClientTabParamList } from "./styker.client.navigation";
import {
  TaskerTab,
  TaskerTabParamList,
} from "./styker.tasker/styker.tasker.navigation";
import {
  StykerTaskerStack,
  StykerTaskerStackParamList,
} from "./styker.tasker/styker.tasker.stack.navigation";

export type StykerParamList = {
  client: NavigatorScreenParams<ClientTabParamList>;
  tasker: NavigatorScreenParams<StykerTaskerStackParamList>;
};

const Stack = createNativeStackNavigator<StykerParamList>();
export const StykerNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* {!Boolean(isLoggedIn) && ( */}
      <Stack.Screen name="client" component={ClientTab} />
      <Stack.Screen name="tasker" component={StykerTaskerStack} />
    </Stack.Navigator>
  );
};
