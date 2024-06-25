import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { AppRootStackParamsList } from "../../app.roots.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStack, ProfileStackParamList } from "../../profile";
import {
  BookingIcon,
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  ProfileIcon,
} from "../../../../assets/images/svg/icons";
import { useTheme } from "native-base";
import { BookingStack } from "../../booking";
import { CalendarScreen, HomeScreen, TaskerProfile } from "../../../screens";
import { InboxStack } from "../../inbox";
import { HomeStack } from "../../Home-navigation";
import { StykerParamList } from "../styker.root.navigation";
import { StykerTaskerStackParamList } from "./styker.tasker.stack.navigation";

export type TaskerTabParamList = {
  // Home: undefined;
  profile: undefined;
  // bookings: undefined;
  // calendar: undefined;
  // inbox: undefined;
};

const tabBarIconMap: Record<
  string,
  ({ color, focused }: { color: string; focused: boolean }) => JSX.Element
> = {
  // Home: ({ color, focused }) => {
  //   return <HomeIcon focused={focused} color={color} />;
  // },
  // bookings: ({ color, focused }) => (
  //   <BookingIcon color={color} focused={focused} />
  // ),
  // calendar: ({ color, focused }) => (
  //   <CalendarIcon color={color} focused={focused} />
  // ),
  // inbox: ({ color, focused }) => <InboxIcon color={color} focused={focused} />,
  profile: ({ color, focused }) => (
    <ProfileIcon color={color} focused={focused} />
  ),
};

const Tab = createBottomTabNavigator<TaskerTabParamList>();

export type RootTabNavigationProp<T extends keyof TaskerTabParamList> =
  CompositeNavigationProp<
    BottomTabNavigationProp<TaskerTabParamList, T>,
    NativeStackNavigationProp<AppRootStackParamsList>
  >;

export const TaskerTab = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: tabBarIconMap[route.name],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue[100],
        tabBarInactiveTintColor: (colors as any).grey[400],
        tabBarStyle: {
          height: 90,
          backgroundColor: colors.white[100],
          borderTopWidth: 0,
          paddingTop: 20,
        },
      })}
    >
      <Tab.Screen name="profile" component={TaskerProfile as any} />
    </Tab.Navigator>
  );
};
