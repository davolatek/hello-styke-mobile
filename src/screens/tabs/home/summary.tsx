import { ScrollView } from "react-native";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { StyleSheet } from "react-native";
import { HStack, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Paypals } from "../../../../assets/images/svg/icons";
import { Button } from "../../../../components/button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../navigation/Home-navigation";
import { DEVICE_HEIGHT } from "../../../constants";
import { useState } from "react";
import { SuccessModal } from "../../../../components/modal/success-modal";

type reviewSummarySCreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "review"
>;
export const ReviewSummary = ({ navigation }: reviewSummarySCreenProps) => {
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  return (
    <PageLayout title="Review Summary" goBack={true} color="white.300">
      <ScrollView style={styles.container}>
        <Text fontFamily="Poppins-Medium">Select your payment method</Text>
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
          <View style={{ gap: 4 }}>
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
          <View alignContent="flex-end" textAlign="justify" style={{ gap: 4 }}>
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
        <VStack
          paddingX={7}
          paddingY={5}
          bgColor="white.100"
          borderRadius={8}
          marginTop={6}
          shadow={1}
        >
          <HStack
            flexDirection="row"
            flex={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <View style={{ gap: 4 }}>
              <Text fontFamily="Poppins-Regular" fontSize={14}>
                House Cleaning
              </Text>
              <Text fontFamily="Poppins-Regular" color="blue.100" fontSize={14}>
                Promo
              </Text>
            </View>
            <View
              alignContent="flex-end"
              textAlign="justify"
              style={{ gap: 4 }}
            >
              <Text
                textAlign="right"
                fontFamily="Poppins-SemiBold"
                fontSize={14}
              >
                ₦ 12,000
              </Text>
              <Text
                textAlign="right"
                fontFamily="Poppins-SemiBold"
                fontSize={14}
              >
                - ₦ 2,000
              </Text>
            </View>
          </HStack>
          <View borderTopColor="grey.400" marginY={4} borderTopWidth={1} />
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontFamily="Poppins-Regular" fontSize={14}>
              Total
            </Text>
            <Text fontFamily="Poppins-SemiBold" fontSize={14}>
              {" "}
              ₦ 10,000
            </Text>
          </HStack>
        </VStack>
        <HStack
          paddingX={7}
          paddingY={5}
          bgColor="white.100"
          borderRadius={8}
          marginTop={6}
          height={88}
          shadow={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <View flexDirection="row" style={styles.left}>
            <View>
              <Paypals />
            </View>
            <Text fontFamily="Poppins-Medium" fontSize={14} paddingLeft={3}>
              Paypal
            </Text>
          </View>
          <Text fontFamily="Poppins-Regular" color="blue.100" fontSize={14}>
            Change
          </Text>
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
          onPress={() => setOpenSuccessModal(true)}
          title="Confirm Payment"
        ></Button>
      </View>
      {openSuccessModal && (
        <SuccessModal
          setOpenSuccessModal={setOpenSuccessModal}
          buttonTitle="View e-receipt"
          onPress={() => {
            setOpenSuccessModal(false);
            setTimeout(() => {
              navigation.navigate("receipt");
            }, 200);
          }}
          visible={true}
          title="Booking Successful"
          text="Service has been booked successfully."
          button={true}
          buttonTitle2="Message Worker"
        />
      )}
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 3,
    height: DEVICE_HEIGHT - 280,
  },
  left: {
    gap: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
