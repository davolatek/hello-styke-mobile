import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { CompositeScreenProps } from "@react-navigation/native";
import { AppRootStackParamsList } from "./app.roots.types";
import {
  AboutOneService,
  AllServicesScreen,
  Chat,
  HomeScreen,
  Location,
  OneServiceScreen,
  PaymentMethod,
  ReviewSummary,
} from "../screens";
import BookingDetails from "../screens/tabs/home/booking-details";
import { Receipt } from "../screens/tabs/home/receipt";

export type HomeStackParamList = {
  home_screen: undefined;
  all_services: undefined;
  one_service: {
    name?: string;
  };
  location: undefined;
  booking: undefined;
  chat: undefined;
  payment: undefined;
  about_one_service: {
    id: number;
    name: string;
  };
  review: undefined;
  receipt: undefined
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
      <Stack.Screen name="all_services" component={AllServicesScreen} />
      <Stack.Screen name="one_service" component={OneServiceScreen} />
      <Stack.Screen name="about_one_service" component={AboutOneService} />
      <Stack.Screen name="chat" component={Chat} />
      <Stack.Screen name="booking" component={BookingDetails} />
      <Stack.Screen name="location" component={Location} />
      <Stack.Screen name="payment" component={PaymentMethod} />
      <Stack.Screen name="review" component={ReviewSummary} />
      <Stack.Screen name="receipt" component={Receipt as any}  />
    </Stack.Navigator>
  );
};
