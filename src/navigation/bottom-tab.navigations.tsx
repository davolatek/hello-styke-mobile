import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { AppRootStackParamsList } from "./app.roots.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStack, ProfileStackParamList } from "./profile";
import {
  BookingIcon,
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  ProfileIcon,
} from "../../assets/images/svg/icons";
import { useTheme } from "native-base";
import { BookingStack } from "./booking";
import { CalendarScreen, HomeScreen } from "../screens";
import { InboxStack } from "./inbox";
import { HomeStack } from "./Home-navigation";

export type RootTabParamList = {
  Home: undefined;
  profile: NavigatorScreenParams<ProfileStackParamList>;
  bookings: undefined;
  calendar: undefined;
  inbox: undefined;
};

const tabBarIconMap: Record<
  string,
  ({ color, focused }: { color: string; focused: boolean }) => JSX.Element
> = {
  Home: ({ color, focused }) => {
    return <HomeIcon focused={focused} color={color} />;
  },
  bookings: ({ color, focused }) => (
    <BookingIcon color={color} focused={focused} />
  ),
  calendar: ({ color, focused }) => (
    <CalendarIcon color={color} focused={focused} />
  ),
  inbox: ({ color, focused }) => <InboxIcon color={color} focused={focused} />,
  profile: ({ color, focused }) => (
    <ProfileIcon color={color} focused={focused} />
  ),
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabNavigationProp<T extends keyof RootTabParamList> =
  CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, T>,
    NativeStackNavigationProp<AppRootStackParamsList>
  >;

export const MyTabs = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
      <Tab.Screen name="Home" component={HomeScreen as any} />
      <Tab.Screen name="bookings" component={BookingStack} />
      <Tab.Screen name="calendar" component={CalendarScreen} />
      <Tab.Screen name="inbox" component={InboxStack} />
      <Tab.Screen name="profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};
