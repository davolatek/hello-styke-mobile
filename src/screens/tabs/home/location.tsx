import MapView from "react-native-maps";
import { DEVICE_HEIGHT } from "../../../constants";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { LocationIcon, MenuIcon } from "../../../../assets/images/svg/icons";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../navigation/Home-navigation";
import { Platform } from "react-native";

type locationScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "location"
>;
export const Location = ({ route, navigation }: locationScreenProps) => {
  return (
    <View height={DEVICE_HEIGHT} position="relative">
      <PageLayout
        withPadding={true}
        title="Location"
        goBack
        icon={<MenuIcon />}
      >
        <MapView
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </PageLayout>
      <View
        position="absolute"
        bottom={Platform.OS === 'ios'? 0 : -50}
        borderTopRadius={20}
        zIndex={100}
        bgColor="white.100"
        height={330}
        px={21}
        width="100%"
        py={31}
        alignItems={"center"}
        justifyContent="center"
      >
        <Text fontFamily="Poppins-SemiBold" fontSize={22} color="black.100">
          Location Details
        </Text>
        <View
          width="100%"
          borderTopColor="black.100"
          borderTopWidth={0.3}
          my={11}
        />
        <View width="100%">
          <Text fontFamily="Poppins-Medium" fontSize={17} color="black.100">
            Address
          </Text>
          <Input
            width="100%"
            InputRightElement={
              <View paddingRight={3}>
                <LocationIcon />
              </View>
            }
          />
          <Button
            onPress={() => navigation.navigate("payment")}
            title="Continue"
          />
        </View>
      </View>
    </View>
  );
};
