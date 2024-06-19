import { TouchableOpacity } from "react-native";
import {
  LocationIcon,
  LocationOutlined,
} from "../../../assets/images/svg/icons";
import { Button } from "../../../components/button";
import { Text, View } from "../../../components/customs";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants";
import { InfoContent } from "../../../components/info";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamsList } from "../../navigation/onboarding";
import { HomeStackParamList } from "../../navigation/Home-navigation";

type LocationPageScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "location_page"
>;
export const LocationPage = ({ navigation }: LocationPageScreenProps) => {
  return (
    <View
      bg="white.100"
      safeArea
      height={DEVICE_HEIGHT}
      width={DEVICE_WIDTH}
      justifyContent="center"
    >
      <InfoContent
        onPress={() => navigation.navigate("enter_location")}
        icon={<LocationOutlined />}
      />
    </View>
  );
};
