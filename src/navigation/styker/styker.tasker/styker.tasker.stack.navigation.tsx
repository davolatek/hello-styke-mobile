import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { AppRootStackParamsList } from "../../app.roots.types";

import {
  AccountVerification,
  EnterLocationScreen,
  Forms,
  GuarantorForm,
  JobForm,
  LocationPage,
  OnePendingJob,
  PersonalInfo,
  TaskerBankDetails,
  TaskerScreen,
} from "../../../screens/Styker";
import { ImageSourcePropType } from "react-native";
import { TaskerTab, TaskerTabParamList } from "./styker.tasker.navigation";

export type StykerTaskerStackParamList = {
  tasker_screen: undefined;
  forms: undefined;
  job_form: {
    name: string;
    image: ImageSourcePropType;
  };
  location_page: undefined;
  enter_location: undefined;
  tab: NavigatorScreenParams<TaskerTabParamList>;
  personal_info: undefined;
  bank_details: undefined;
  guarantor_form: undefined;
  acct_verification: undefined;
  one_pending_job: undefined;
};

export type HomeStackScreenProps<T extends keyof StykerTaskerStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<StykerTaskerStackParamList, T>,
    NativeStackScreenProps<AppRootStackParamsList>
  >;

const Stack = createNativeStackNavigator<StykerTaskerStackParamList>();
export const StykerTaskerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tasker_screen" component={TaskerScreen as any} />
      <Stack.Screen name="forms" component={Forms as any} />
      <Stack.Screen name="job_form" component={JobForm as any} />
      <Stack.Screen name="location_page" component={LocationPage as any} />
      <Stack.Screen
        name="enter_location"
        component={EnterLocationScreen as any}
      />
      <Stack.Screen name="tab" component={TaskerTab as any} />
      <Stack.Screen name="personal_info" component={PersonalInfo} />
      <Stack.Screen name="bank_details" component={TaskerBankDetails} />
      <Stack.Screen name="guarantor_form" component={GuarantorForm} />
      <Stack.Screen name="acct_verification" component={AccountVerification} />
      <Stack.Screen name="one_pending_job" component={OnePendingJob} />
    </Stack.Navigator>
  );
};
