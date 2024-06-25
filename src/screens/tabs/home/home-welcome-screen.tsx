import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../../../components/customs";
import { useAppSelector } from "../../../redux/store";
import { bg } from "../../../utils/assets";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../../constants";
import { HStack, VStack } from "native-base";
import {
  CustomerSupport,
  DistressSales,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  PersonDark,
  Styker,
  TravelBuddy,
} from "../../../../assets/images/svg/icons";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../../../../components/button";
import { AppStackScreenProps } from "../../../navigation/app.roots.types";
import { useState } from "react";

export const HomeWelcomeScreen = ({
  navigation,
}: AppStackScreenProps<'home_welcome_screen'>) => {
  const { user } = useAppSelector(({ userReducer }) => userReducer);
  console.log(user);
  const [show, setShow] = useState(false);
  return (
    <View width={DEVICE_WIDTH} height={DEVICE_HEIGHT}>
      <ImageBackground source={bg} style={styles.bg}>
        <View paddingTop={20} width="95%" paddingX="7%">
          <HStack justifyContent="space-between">
            <View>
              <Text fontSize={20} fontFamily="Poppins-SemiBold">
                Good
              </Text>
              <Text fontSize={20} fontFamily="Poppins-SemiBold">
                Morning .
              </Text>
            </View>
            {user?.imageUrl ? (
              <Image
                source={{ uri: user?.imageUrl }}
                width={80.105}
                height={80.105}
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
          </HStack>
          <HStack
            width="100%"
            justifyContent="flex-start"
            marginTop={20}
            style={{ gap: 10 }}
          >
            <VStack width="50%" style={{ gap: 10 }}>
              <TouchableOpacity onPress={() => setShow(true)}>
                <View>
                  <LinearGradient
                    colors={["#407BFF", "#264A99"]}
                    style={styles.background}
                  >
                    <Styker />
                    <View position="absolute" top={-25}>
                      <Ellipse1 />
                    </View>
                    <Text
                      fontSize={19}
                      fontFamily="Poppins-Bold"
                      color="white.100"
                    >
                      STYKER
                    </Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>
                  <LinearGradient
                    colors={["#FFC107", "#997404"]}
                    style={styles.background2}
                  >
                    <DistressSales />
                    <View position="absolute" top={0}>
                      <Ellipse2 />
                    </View>
                    <Text
                      fontSize={19}
                      fontFamily="Poppins-Bold"
                      color="white.100"
                      textAlign="center"
                      marginTop={8}
                    >
                      DISTRESS SALES
                    </Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </VStack>
            <VStack width="50%" style={{ gap: 10 }}>
              <TouchableOpacity>
                <View>
                  <LinearGradient
                    colors={["#4CAF50", "#204921"]}
                    style={styles.background2}
                  >
                    <TravelBuddy />
                    <View position="absolute" top={0}>
                      <Ellipse2 />
                    </View>

                    <Text
                      fontSize={19}
                      fontFamily="Poppins-Bold"
                      color="white.100"
                      paddingX={10}
                      textAlign="center"
                      marginTop={6}
                    >
                      TRAVEL BUDDY
                    </Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>
                  <LinearGradient
                    colors={["#003E9A", "#001534"]}
                    style={styles.background}
                  >
                    <View zIndex={1000}>
                      <CustomerSupport />
                    </View>
                    <Text
                      fontSize={19}
                      fontFamily="Poppins-Bold"
                      color="white.100"
                      textAlign="center"
                    >
                      CUSTOMER SUPPORT
                    </Text>
                    <View position="absolute" top={0}>
                      <Ellipse3 />
                    </View>

                    <View position="absolute" top={90} right={-20}>
                      <Ellipse4 />
                    </View>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </VStack>
          </HStack>
        </View>
        <Modal transparent={true} visible={show}>
          <View style={styles.modalContainer}>
            <View
              height={"auto"}
              paddingY={50}
              width="80%"
              marginY="auto"
              marginX="10%"
              backgroundColor="grey.700"
              borderRadius={30}
              justifyContent="center"
              alignItems="center"
            >
              <View width={175}>
                <LinearGradient
                  colors={["#407BFF", "#264A99"]}
                  style={styles.background}
                >
                  <Styker />
                  <View position="absolute" top={-25}>
                    <Ellipse1 />
                  </View>
                  <Text
                    fontSize={19}
                    fontFamily="Poppins-Bold"
                    color="white.100"
                  >
                    STYKER
                  </Text>
                </LinearGradient>
              </View>
              <VStack width="80%" marginX="auto">
                <View width="100%">
                  <Button
                    title="Client Dashboard"
                    onPress={() => {
                      setShow(false);
                      // navigation.navigate("tabs", {
                      //   screen: "Home",
                      // });
                      navigation.navigate('styker', {
                        screen: 'client', params: {
                          screen: 'Home'
                        }
                      })
                    }}
                  />
                </View>
                <View width="100%" marginTop={-30}>
                  <Button
                    color="pink.200"
                    textColor="blue.300"
                    title="Become a Styker"
                    onPress={() => {
                      setShow(false);
                      navigation.navigate('styker', {
                        screen: 'tasker', params: {
                          screen: 'tasker_screen'
                        }
                      })
                    }}
                  />
                </View>
              </VStack>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
  },
  background: {
    height: 230,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  background2: {
    height: 320,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  modalContainer: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: "rgba(0, 0, 0, 0.80)",
  },
});
