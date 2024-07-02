import { HStack, VStack } from "native-base";
import { Ellipse5, PersonDark } from "../../../../assets/images/svg/icons";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import {
  FlatList,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useAppSelector } from "../../../redux/store";
import Svg, { Circle } from "react-native-svg";
import { FontAwesome } from "@expo/vector-icons";
import { TaskerSettings } from "../../../../components/settings";
import { AppStackScreenProps } from "../../../navigation/app.roots.types";
import { useState } from "react";
import { MenuDropdown } from "../../../../components/modal/menu-dropdown";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../../constants";
import { Button } from "../../../../components/button";

export const TaskerProfile = ({
  navigation,
}: AppStackScreenProps<"styker">) => {
  const { user } = useAppSelector(({ userReducer }) => userReducer);
  const radius = (48 - 5) / 2;
  const circumference = radius * 2 * Math.PI;
  const progressOffset = circumference - (70 / 100) * circumference;
  const [openModal, setOpenModal] = useState(false);

  return (
   
      <PageLayout title="Your Profile" goBack={true}>
        <ScrollView
          style={{ marginBottom: Platform.OS === 'ios' ? 170 : 260 }}
          showsVerticalScrollIndicator={false}
        >
          <View width={"90%"} marginX="auto">
            <View
              width="100%"
              height={114}
              justifyContent="center"
              borderRadius={9}
              bg="blue.300"
            >
              <View position="absolute" top={-55} left={-20}>
                <Ellipse5 />
              </View>
              <HStack width="90%" marginX="auto" justifyContent="space-between">
                <HStack style={{ gap: 8 }}>
                  <View>
                    {user?.imageUrl ? (
                      <Image
                        source={{ uri: user?.imageUrl }}
                        width={59.105}
                        height={59.105}
                        borderRadius={100}
                      />
                    ) : (
                      <View
                        width={50}
                        height={50}
                        borderWidth={1}
                        borderRadius={50}
                        borderColor="black"
                      >
                        <PersonDark />
                      </View>
                    )}
                  </View>
                  <VStack>
                    <Text
                      fontSize={16}
                      fontFamily="Poppins-SemiBold"
                      color="white.100"
                    >
                      {user?.firstName} {user?.lastName}
                    </Text>
                    <Text
                      fontSize={13}
                      fontFamily="Poppins-Light"
                      color="white.100"
                      marginTop={-1}
                    >
                      View Profile
                    </Text>
                  </VStack>
                </HStack>
                <View
                  width={44}
                  height={44}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Svg height={48} width={48}>
                    <Circle
                      stroke="white"
                      fill="none"
                      cx={48 / 2}
                      cy={48 / 2}
                      r={radius}
                      strokeWidth={5}
                    />
                    <Circle
                      stroke={"#FFC107"}
                      fill="none"
                      cx={48 / 2}
                      cy={48 / 2}
                      r={radius}
                      strokeWidth={5}
                      strokeDasharray={`${circumference} ${circumference}`}
                      strokeDashoffset={progressOffset}
                      strokeLinecap="round"
                    />
                  </Svg>
                  <Text
                    position="absolute"
                    fontSize={11}
                    color={"white.100"}
                    fontFamily="Poppins-SemiBold"
                    textAlign="center"
                  >
                    {`${70}%`}
                  </Text>
                </View>
              </HStack>
            </View>
            <View paddingX={5} mt={10}>
              <FlatList
                data={TaskerSettings}
                contentContainerStyle={styles.container}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      item.name === "Wallet"
                        ? navigation.navigate("wallet")
                        : item.name === "Invite Friends"
                        ? navigation.navigate("styker", {
                            screen: "invite",
                          })
                        : item.name === "Logout"
                        ? setOpenModal(true)
                        : navigation.navigate("styker", {
                            screen: "tasker",
                            params: {
                              screen: item?.page as any,
                            },
                          });
                    }}
                  >
                    <View
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <View
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        style={{ gap: 12 }}
                      >
                        <View>{item.icon}</View>
                        <Text
                          fontSize={15}
                          fontFamily="Poppins-Regular"
                          color="black.100"
                        >
                          {item.name}
                        </Text>
                      </View>
                      <FontAwesome name="angle-right" size={18} color="black" />
                    </View>
                  </TouchableOpacity>
                )}
              />
              <Modal animationType='slide' transparent={true} visible={openModal}>
                <View style={styles.modalContainer}>
                  <View style={styles.modal}>
                    <Text
                      color="red.300"
                      fontFamily="Poppins-Medium"
                      textAlign="center"
                    >
                      Logout
                    </Text>
                    <View
                      marginTop={3}
                      borderBottomColor="grey.100"
                      borderBottomWidth={1}
                    />
                    <VStack>
                      <Text textAlign="center" paddingTop={5} fontSize={15}>
                        Are you sure you want to logout?
                      </Text>
                      <HStack
                        width="100%"
                        style={{ gap: 10 }}
                        justifyContent="center"
                      >
                        <View width="48%">
                          <Button
                            textColor="blue.300"
                            color="blue.400"
                            title="Cancel"
                            onPress={() => setOpenModal(false)}
                          />
                        </View>
                        <View width="48%">
                          <Button title="Yes, Logout" onPress={() => null} />
                        </View>
                      </HStack>
                    </VStack>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </ScrollView>
      </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 25,
  },
  modalContainer: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: "rgba(0, 0, 0, 0.80)",
  },
  modal: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFF",
    height: 300,
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 40,
    marginTop: "auto",
    borderRadius: 30,
  },
});
