import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "../../../../components/customs";
import { HomeStackParamList } from "../../../navigation/Home-navigation";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "native-base";
import { DEVICE_HEIGHT } from "../../../constants";
import {
  cleaner,
  cleaner1,
  cleaner2,
  cleaner3,
  cleaner4,
  cleaner5,
  cleaner6,
} from "../../../utils/assets";
import { ArrowWhite } from "../../../../assets/images/svg/icons/arrow-white";
import { Bookmark, Medal } from "../../../../assets/images/svg/icons";
import { Ionicons } from "@expo/vector-icons";
import { RatingsTab } from "../../../../components/bottom-tab/ratings-tab";
import { useEffect } from "react";
import { Button } from "../../../../components/button";

type AboutOneServiceProps = NativeStackScreenProps<
  HomeStackParamList,
  "about_one_service"
>;
export const AboutOneService = ({
  route,
  navigation,
}: AboutOneServiceProps) => {
  const { colors } = useTheme();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View bgColor="white.100">
          <ImageBackground
            source={cleaner}
            resizeMode="cover"
            style={{ width: "100%", height: 324 }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View paddingX={25} paddingTop={60}>
                <ArrowWhite color="white" />
              </View>
            </TouchableOpacity>
          </ImageBackground>
          <View paddingX={6} paddingTop={4}>
            <View
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontFamily="Poppins-SemiBold" fontSize={18}>
                House Cleaning
              </Text>
              <Bookmark />
            </View>
            <View
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Text
                fontFamily="Poppins-Medium"
                fontSize={15}
                color={colors.blue[100]}
              >
                {route.params.name}
              </Text>
              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                marginLeft={5}
              >
                <View marginBottom={4}>
                  {" "}
                  <Medal />
                </View>
                <Text
                  marginLeft={1}
                  color="grey.500"
                  fontFamily="Poppins-Light"
                  fontSize={12}
                >
                  4.1 | 3,000 reviews
                </Text>
              </View>
            </View>
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <View
                background="rgba(64, 123, 255, 0.10)"
                paddingX={2}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width={75}
                paddingBottom={2}
                borderRadius={3}
              >
                <Text
                  fontFamily="Poppins-Medium"
                  fontSize={9}
                  color={colors.blue[100]}
                >
                  Cleaner
                </Text>
              </View>
              <Ionicons
                name="location-sharp"
                size={20}
                color="#003E9A"
                style={{ marginLeft: 17 }}
              />
              <Text
                fontFamily="Poppins-Light"
                fontSize={12}
                color="grey.500"
                marginLeft={2}
              >
                Road 23, Bariga Estate, Lagos.
              </Text>
            </View>
            <View flexDirection="row" alignItems="center" marginTop={4}>
              <Text
                fontFamily="Poppins-SemiBold"
                fontSize={22}
                color={colors.blue[100]}
              >
                ₦40,000
              </Text>
              <Text
                fontFamily="Poppins-Light"
                fontSize={12}
                color="grey.500"
                marginLeft={2}
              >
                (Floor Price)
              </Text>
            </View>
            <View
              borderBottomColor="grey.100"
              borderBottomWidth={0.5}
              marginTop={5}
            />
            <View>
              <Text
                fontFamily="Poppins-SemiBold"
                fontSize={17}
                color={colors.black[100]}
                paddingTop={6}
              >
                About me
              </Text>
              <Text
                color={colors.black[300]}
                fontFamily="Poppins-Regular"
                fontSize={13}
              >
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed qu.{" "}
                <Text
                  fontFamily="Poppins-Medium"
                  fontSize={13}
                  color={colors.blue[100]}
                >
                  Read more...
                </Text>
              </Text>
            </View>
            <View
              flexDirection="row"
              justifyContent="space-between"
              marginTop={6}
            >
              <Text
                fontFamily="Poppins-Medium"
                fontSize={18}
                color={colors.black[100]}
              >
                Photos & Videos
              </Text>
              <TouchableOpacity>
                <Text
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                  color={colors.blue[100]}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View flexDirection={"row"} marginTop={4} style={{ flexGrow: 1 }}>
              <View style={{ width: "47%", height: 350 }}>
                <ImageBackground
                  borderRadius={14}
                  source={cleaner}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View
                style={{
                  width: "47%",
                  marginLeft: "6%",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {[cleaner, cleaner].map((ele, index) => (
                  <View key={index}>
                    <ImageBackground
                      borderRadius={14}
                      source={ele}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: index === 0 ? 190 : 140,
                        marginTop: index === 1 ? 20 : 0,
                      }}
                    />
                  </View>
                ))}
              </View>
            </View>
            <View flexDirection={"row"} marginTop={5}>
              <View
                style={{
                  width: "47%",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {[cleaner, cleaner].map((ele, index) => (
                  <View key={index}>
                    <ImageBackground
                      borderRadius={14}
                      source={ele}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: index === 0 ? 190 : 140,
                        marginTop: index === 1 ? 20 : 0,
                      }}
                    />
                  </View>
                ))}
              </View>
              <View style={{ width: "47%", marginLeft: "6%", height: 350 }}>
                <ImageBackground
                  borderRadius={14}
                  source={cleaner}
                  resizeMode="cover"
                  style={{ width: "auto", height: "100%" }}
                />
              </View>
            </View>
            <View
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <View marginBottom={4}>
                  {" "}
                  <Medal />
                </View>
                <Text
                  marginLeft={1}
                  color="grey.500"
                  fontFamily="Poppins-Light"
                  fontSize={12}
                >
                  4.1 | 3,000 reviews
                </Text>
              </View>
              <TouchableOpacity>
                <Text
                  fontFamily="Poppins-Regular"
                  fontSize={14}
                  color={colors.blue[100]}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <RatingsTab />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        flexDirection="row"
        borderColor={colors.white[200]}
        borderTopRadius={20}
        borderWidth={1}
        paddingX={6}
        paddingBottom={8}
        paddingTop={4}
        height={100}
        backgroundColor="white.100"
      >
        <Button
          style={{ width: "49%" }}
          onPress={() => navigation.navigate('chat')}
          title="Message"
        ></Button>
        <Button
          style={{ width: "49%", marginLeft: "3%" }}
          onPress={() => navigation.navigate('booking')}
          title="Book Now"
        ></Button>
      </View>
    </>
  );
};
