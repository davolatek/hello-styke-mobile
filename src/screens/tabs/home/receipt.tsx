import { Platform, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { StyleSheet } from "react-native";
import { HStack, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import {
  Copy,
  MenuIcon,
  Paypals,
  QrImage,
} from "../../../../assets/images/svg/icons";
import { Button } from "../../../../components/button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../navigation/Home-navigation";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../../constants";
import { useState } from "react";
import { MenuDropdown } from "../../../../components/modal/menu-dropdown";
import {
  AppStackNavigationProp,
  AppStackScreenProps,
} from "../../../navigation/app.roots.types";

export const Receipt = ({
  navigation,
}: AppStackNavigationProp<"home_stack">) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  return (
    <PageLayout
      title="E-Receipt"
      icon={
        <View position="relative">
          <TouchableOpacity
            onPress={() => {
              setOpenDropdown((prev) => !prev);
            }}
          >
            <MenuIcon />
          </TouchableOpacity>
        </View>
      }
      goBack={true}
      color="white.300"
    >
      {openDropdown && <MenuDropdown />}

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View marginLeft={0}>
          <QrImage />
        </View>
        <HStack
          paddingX={7}
          paddingY={5}
          marginTop={6}
          flexDirection="row"
          flex={1}
          shadow={1}
          justifyContent="space-between"
          alignItems="center"
          bgColor="white.100"
          borderRadius={8}
        >
          <View style={{ gap: 10 }}>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Services
            </Text>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Category
            </Text>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Workers
            </Text>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Date & Time
            </Text>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Working Hours
            </Text>
          </View>
          <View alignContent="flex-end" textAlign="justify" style={{ gap: 10 }}>
            <Text textAlign="right" fontFamily="Poppins-SemiBold" fontSize={14}>
              House Cleaning
            </Text>
            <Text textAlign="right" fontFamily="Poppins-SemiBold" fontSize={14}>
              Cleaning
            </Text>
            <Text textAlign="right" fontFamily="Poppins-SemiBold" fontSize={14}>
              Niana Fend
            </Text>
            <Text textAlign="right" fontFamily="Poppins-SemiBold" fontSize={14}>
              Jan 15, 2024 | 11:00 AM
            </Text>
            <Text textAlign="right" fontFamily="Poppins-SemiBold" fontSize={14}>
              2 Hours
            </Text>
          </View>
        </HStack>
        <HStack
          bgColor="white.100"
          marginTop={6}
          justifyContent="space-between"
          alignItems="center"
          height={59}
          paddingX={7}
          borderRadius={8}
        >
          <Text fontFamily="Poppins-Regular" fontSize={13}>
            House Cleaning Details
          </Text>
          <FontAwesome name="angle-down" size={20} color="black" />
        </HStack>

        <HStack
          paddingX={7}
          paddingY={5}
          marginTop={6}
          flexDirection="row"
          flex={1}
          shadow={1}
          justifyContent="space-between"
          alignItems="center"
          bgColor="white.100"
          borderRadius={8}
        >
          <View style={{ gap: 10 }}>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              House Cleaning
            </Text>
            <Text fontFamily="Poppins-Regular" color="blue.100" fontSize={14}>
              Promo
            </Text>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Payment Method
            </Text>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Transaction ID
            </Text>
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Status
            </Text>
          </View>
          <View alignContent="flex-end" textAlign="justify" style={{ gap: 10 }}>
            <Text textAlign="right" fontFamily="Poppins-SemiBold" fontSize={14}>
              ₦ 12,000
            </Text>
            <Text
              textAlign="right"
              color="blue.100"
              fontFamily="Poppins-SemiBold"
              fontSize={14}
            >
              ₦ 2,000
            </Text>
            <Text textAlign="right" fontFamily="Poppins-SemiBold" fontSize={14}>
              Credit Card
            </Text>
            <HStack alignItems="center">
              <Text
                marginRight={1}
                textAlign="right"
                fontFamily="Poppins-SemiBold"
                fontSize={14}
              >
                SF36179731489
              </Text>
              <Copy />
            </HStack>

            <Text
              bgColor="pink.100"
              textAlign="right"
              fontFamily="Poppins-SemiBold"
              fontSize={14}
              color="blue.100"
            >
              Paid
            </Text>
          </View>
        </HStack>
      </ScrollView>
      <View
        flexDirection="row"
        borderColor="white.200"
        borderTopRadius={20}
        borderWidth={1}
        paddingX={6}
        paddingBottom={8}
        paddingTop={4}
        height={150}
        backgroundColor="white.100"
      >
        <Button
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("Home", {
              screen: "home_screen",
            });
            console.log("hoop");
          }}
          title="Go Home"
        ></Button>
      </View>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    height: Platform.OS === "ios" ? DEVICE_HEIGHT - 280 : DEVICE_HEIGHT - 240,
  },
  left: {
    gap: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
