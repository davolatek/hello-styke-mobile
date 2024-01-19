import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  ForgotPassword,
  SignUp,
  Welcome,
  OtpScreen,
  CreateNewPassword,
  Login,
} from "../screens";

import { CompositeScreenProps } from "@react-navigation/native";
import { AppRootStackParamsList } from "./app.roots.types";

export type AuthenticationStackParamsList = {
  sign_up: undefined;
  welcome: undefined;
  login: undefined;
  forgot_password: {
    number: string;
  };
  otp_screen: {
    number?: string;
    email?: string;
    type: "forgot password" | "confirm email";
  };
  create_new_password: undefined;
};

export type AuthenticationStackScreenProps<
  T extends keyof AuthenticationStackParamsList
> = CompositeScreenProps<
  NativeStackScreenProps<AuthenticationStackParamsList, T>,
  NativeStackScreenProps<AppRootStackParamsList>
>;

const Stack = createNativeStackNavigator<AuthenticationStackParamsList>();
export const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login as any} />
      <Stack.Screen name="sign_up" component={SignUp} />
      <Stack.Screen name="forgot_password" component={ForgotPassword} />
      <Stack.Screen name="otp_screen" component={OtpScreen} />
      <Stack.Screen name="create_new_password" component={CreateNewPassword} />
    </Stack.Navigator>
  );
};
