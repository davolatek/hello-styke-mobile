import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../../components/customs";
import { ArrowBackIcon, HStack, VStack } from "native-base";
import { Arrow } from "../../../assets/images/svg/icons/arrow";
import {
  Call,
  Comment,
  Location2,
  Share,
  ShareIcon,
} from "../../../assets/images/svg/icons";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants";
import { comment, driver, drycleaner } from "../../utils/assets";
import { Button } from "../../../components/button";
import { useState } from "react";
import { ConfirmationIcon } from "../../../assets/images/svg/icons/confirmation-icon";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StykerTaskerStackParamList } from "../../navigation/styker/styker.tasker/styker.tasker.stack.navigation";


type OnePendingJobScreenProps = NativeStackScreenProps<StykerTaskerStackParamList, 'one_pending_job'>
export const OnePendingJob = ({navigation}: OnePendingJobScreenProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View marginTop={94} width="85%" marginX="auto">
          <HStack justifyContent="space-between">
         <TouchableOpacity onPress={() => navigation.goBack()}>
         <View
              width={50}
              height={50}
              bgColor="white.100"
              justifyContent="center"
              alignItems="center"
              borderRadius={50}
            >
              <Arrow />
            </View>
         </TouchableOpacity>
            <View
              width={50}
              height={50}
              bgColor="white.100"
              justifyContent="center"
              alignItems="center"
              borderRadius={50}
            >
              <ShareIcon />
            </View>
          </HStack>
        </View>
        <View
          width={"100%"}
          height={DEVICE_HEIGHT - 200}
          bgColor="white.100"
          marginTop={100}
          borderTopLeftRadius={30}
          borderTopRightRadius={30}
          position="relative"
          alignItems="center"
        >
          <View width="96%" marginX="auto">
            <VStack position="relative" alignItems="center" width="100%">
              <View
                position="absolute"
                width={92}
                height={92}
                borderWidth={3}
                borderRadius={50}
                borderColor="white.100"
                top={-50}
                left="50%"
                marginLeft={-50}
                style={styles.shadow}
                zIndex={1000}
              >
                <Image
                  source={drycleaner}
                  style={{ width: "100%", height: "100%" }}
                  borderRadius={50}
                  resizeMode="contain"
                />
              </View>
              <VStack alignItems="center" paddingTop={16}>
                <Text fontSize={16} color="black.100">
                  House Cleaning
                </Text>
                <Text
                  color="grey.400"
                  fontSize={13}
                  fontFamily="Poppins-Regular"
                >
                  Cameron Williamson
                </Text>
                <HStack alignItems="center" marginTop={2}>
                  <Location2 />
                  <Text
                    fontSize={12}
                    fontFamily="Poppins-Regular"
                    color="grey.400"
                    marginLeft={2}
                  >
                    5, Orimolade Street, Ikeja, Lagos State
                  </Text>
                </HStack>
              </VStack>
              <HStack marginTop={6} style={{ gap: 6 }}>
                <TouchableOpacity>
                  <View
                    width={50}
                    height={50}
                    borderRadius={50}
                    bgColor="pink.200"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      style={{ width: 27, height: 27, marginTop: 8 }}
                      source={comment}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    width={50}
                    height={50}
                    borderRadius={50}
                    bgColor="blue.300"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Call color="white" />
                  </View>
                </TouchableOpacity>
              </HStack>
            </VStack>
            <View width="90%" marginX="auto" marginTop={10}>
              <View justifyContent="center" alignItems="center">
                <Text fontSize={15} color="blue.300">
                  About
                </Text>
                <View
                  marginTop={3}
                  borderBottomColor="blue.300"
                  borderBottomWidth={2}
                  width="45%"
                />
              </View>
              <HStack marginTop={7} style={{ gap: 6 }}>
                <View
                  width="58%"
                  height={70}
                  bgColor="pink.400"
                  justifyContent="center"
                  paddingX={8}
                  borderRadius={10}
                >
                  <Text fontSize={9} color="pink.500">
                    Time & Date
                  </Text>
                  <Text color="blue.300" fontSize={10}>
                    11:00 AM | 15th Dec, 2024
                  </Text>
                </View>
                <View
                  width="40%"
                  height={70}
                  bgColor="pink.400"
                  justifyContent="center"
                  paddingX={8}
                  borderRadius={10}
                >
                  <Text fontSize={9} color="pink.500">
                    Salary (hourly)
                  </Text>
                  <Text color="blue.300" fontSize={10}>
                    ₦ 40,000
                  </Text>
                </View>
              </HStack>
              <View marginTop={6}>
                <Text fontSize={15} color="blue.300">
                  Job Description
                </Text>
                <Text
                  fontSize={11}
                  textAlign="justify"
                  fontFamily="Poppins-Regular"
                  color="grey.400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum...
                </Text>
              </View>
            </View>
          </View>
          <View width="90%" marginX="auto" marginTop={-4}>
            <Button title="Confirm job" onPress={() => setVisible(true)} />
          </View>
        </View>
        <Modal animationType="slide" transparent={false} visible={visible}>
          <View style={styles.modalContainer}>
            <ConfirmationIcon />
            <Text
              fontSize={24}
              marginTop={5}
              color="black.100"
              fontFamily="Poppins-SemiBold"
            >
              Congratulations!
            </Text>
            <Text fontSize={16} fontFamily="Poppins-Light" color="black.100">
              Job confirmation is done
            </Text>
            <View width="80%" marginX="auto">
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Text
                  color="blue.300"
                  fontSize={15}
                  textAlign="center"
                  marginTop={10}
                >
                  Go Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    gap: 10,
    shadowColor: "rgba(0, 62, 154, 0.25)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 2,
  },
  modalContainer: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    position: "relative",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
