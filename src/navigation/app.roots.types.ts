import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
    NavigatorScreenParams,
} from '@react-navigation/native';
import { AuthenticationStackParamsList } from './onboarding';
import { ProfileStackParamList } from './profile';
import { RootTabParamList } from './bottom-tab.navigations';


export type AppStackScreenProps<T extends keyof AppRootStackParamsList> =
    NativeStackScreenProps<AppRootStackParamsList, T>;


export type AppRootStackParamsList = {
    onboarding: NavigatorScreenParams<AuthenticationStackParamsList>;
    tabs: NavigatorScreenParams<RootTabParamList>;
}
