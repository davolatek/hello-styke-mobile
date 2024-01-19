import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { AppRootStackParamsList } from "./app.roots.types";
import { BookingScreen } from "../screens/tabs/bookings";

export type BookingStackParamList = {
    booking: undefined
};
export type BookingStackScreenProps<T extends keyof BookingStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<BookingStackParamList, T>,
    NativeStackScreenProps<AppRootStackParamsList>
  >;

const Stack = createNativeStackNavigator<BookingStackParamList>();
export const BookingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="booking" component={BookingScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
