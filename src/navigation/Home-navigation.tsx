import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { CompositeScreenProps } from "@react-navigation/native";
import { AppRootStackParamsList } from "./app.roots.types";
import { AboutOneService, AllServicesScreen, HomeScreen, OneServiceScreen } from "../screens";

export type HomeStackParamList = {
  home_screen: undefined;
  all_services: undefined;
  one_service: {
    name?: string;
  };
  about_one_service: {
    id: number;
  };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    NativeStackScreenProps<AppRootStackParamsList>
  >;

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home_screen" component={HomeScreen} />
      <Stack.Screen name="all_services" component={AllServicesScreen} />
      <Stack.Screen name="one_service" component={OneServiceScreen} />
      <Stack.Screen name="about_one_service" component={AboutOneService} />
    </Stack.Navigator>
  );
};
