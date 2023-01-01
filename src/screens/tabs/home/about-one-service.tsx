import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "../../../../components/customs";
import { HomeStackParamList } from "../../../navigation/Home-navigation";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "native-base";
import { DEVICE_HEIGHT } from "../../../constants";
import { cleaner } from "../../../utils/assets";
import { ArrowWhite } from "../../../../assets/images/svg/icons/arrow-white";
import { Bookmark, Medal } from "../../../../assets/images/svg/icons";
import { Ionicons } from "@expo/vector-icons";

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
    <ScrollView>
      <View bgColor="white.100" height={DEVICE_HEIGHT}>
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
              Niana Fend
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
            <Text>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed qu.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
