import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { AppRootStackParamsList } from "./app.roots.types";
import { InboxScreen } from "../screens/tabs/inbox";

export type InboxStackParamList = {
  inbox_screen: undefined;
};

export type InboxStackScreenProps<T extends keyof InboxStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<InboxStackParamList, T>,
    NativeStackScreenProps<AppRootStackParamsList>
  >;
const Stack = createNativeStackNavigator<InboxStackParamList>();

export const InboxStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="inbox_screen" component={InboxScreen} />
    </Stack.Navigator>
  );
};
