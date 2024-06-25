import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { AuthenticationStackParamsList } from "./onboarding";
import { ProfileStackParamList } from "./profile";
import { RootTabParamList } from "./bottom-tab.navigations";
import { HomeStackParamList } from "./Home-navigation";
import { StykerParamList } from "./styker/styker.root.navigation";

export type AppStackScreenProps<T extends keyof AppRootStackParamsList> =
  NativeStackScreenProps<AppRootStackParamsList, T>;

export type AppStackNavigationProp<T extends keyof AppRootStackParamsList> =
  NativeStackScreenProps<AppRootStackParamsList, T>;
export type AppRootStackParamsList = {
  onboarding: NavigatorScreenParams<AuthenticationStackParamsList>;
  tabs: NavigatorScreenParams<RootTabParamList>;
  home_stack: NavigatorScreenParams<HomeStackParamList>;
  Home: NavigatorScreenParams<HomeStackParamList>;


  styker: NavigatorScreenParams<StykerParamList>;
  home_welcome_screen: undefined
  wallet: undefined
};
