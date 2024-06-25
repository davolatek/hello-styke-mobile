import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { CompositeScreenProps } from "@react-navigation/native";
import { AppRootStackParamsList } from "./app.roots.types";
import {
  AboutOneService,
  AllServicesScreen,
  CallScreen,
  Chat,
  EditProfileScreen,
  HomeScreen,
  HomeWelcomeScreen,
  Invite,
  Location,
  Notifications,
  OneServiceScreen,
  Payment,
  PaymentMethod,
  ReviewSummary,
  Security,
} from "../screens";
import BookingDetails from "../screens/tabs/home/booking-details";
import { Receipt } from "../screens/tabs/home/receipt";
import {
  EnterLocationScreen,
  Forms,
  JobForm,
  LocationPage,
  TaskerScreen,
} from "../screens/Styker";
import { ImageSourcePropType } from "react-native";

export type HomeStackParamList = {
  home_screen: undefined;
  all_services: undefined;
  one_service: {
    name?: string;
  };
  location: undefined;
  booking: undefined;
  chat: undefined;
  call_screen: undefined;
  payment: undefined;
  about_one_service: {
    id: number;
    name: string;
  };
  review: undefined;
  receipt: undefined;
  edit_profile: undefined;
  notification: undefined;
  payment_options: undefined;
  security: undefined;
  invite: undefined;
  help_center: undefined;
  home_welcome_screen: undefined;
  tasker_screen: undefined;
  forms: undefined;
  job_form: {
    name: string;
    image: ImageSourcePropType;
  };
  location_page: undefined;
  enter_location: undefined;
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
      <Stack.Screen name="call_screen" component={CallScreen} />
      <Stack.Screen name="booking" component={BookingDetails} />
      <Stack.Screen name="location" component={Location} />
      <Stack.Screen name="payment" component={PaymentMethod} />
      <Stack.Screen name="payment_options" component={Payment} />
      <Stack.Screen name="review" component={ReviewSummary} />
      <Stack.Screen name="receipt" component={Receipt as any} />
      <Stack.Screen name="edit_profile" component={EditProfileScreen} />
      <Stack.Screen name="notification" component={Notifications} />
      <Stack.Screen name="security" component={Security} />
      <Stack.Screen name="invite" component={Invite} />
     
      <Stack.Screen name="tasker_screen" component={TaskerScreen as any} />
      <Stack.Screen name="forms" component={Forms as any} />
      <Stack.Screen name="job_form" component={JobForm as any} />
      <Stack.Screen name="location_page" component={LocationPage as any} />
      <Stack.Screen
        name="enter_location"
        component={EnterLocationScreen as any}
      />
    </Stack.Navigator>
  );
};
