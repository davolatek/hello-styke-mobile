import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigatorScreenParams } from "@react-navigation/native";
import { ClientTab, ClientTabParamList } from "./styker.client.navigation";
import {
  StykerTaskerStack,
  StykerTaskerStackParamList,
} from "./styker.tasker/styker.tasker.stack.navigation";
import { Invite } from "../../screens";

export type StykerParamList = {
  client: NavigatorScreenParams<ClientTabParamList>;
  tasker: NavigatorScreenParams<StykerTaskerStackParamList>;
  invite: undefined;
};

const Stack = createNativeStackNavigator<StykerParamList>();
export const StykerNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="client" component={ClientTab} />
      <Stack.Screen name="tasker" component={StykerTaskerStack} />
      <Stack.Screen name="invite" component={Invite} />
    </Stack.Navigator>
  );
};
