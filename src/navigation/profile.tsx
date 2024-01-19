import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { AppRootStackParamsList } from "./app.roots.types";
import { ConfirmEmailScreen, ProfileScreen } from "../screens";

export type ProfileStackParamList = {
  profile_screen: undefined;
  confirm_email: undefined;
};
export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProfileStackParamList, T>,
    NativeStackScreenProps<AppRootStackParamsList>
  >;

const Stack = createNativeStackNavigator<ProfileStackParamList>();
export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile_screen" component={ProfileScreen as any} />
      <Stack.Screen name="confirm_email" component={ConfirmEmailScreen} />
    </Stack.Navigator>
  );
};
