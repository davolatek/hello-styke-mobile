import { Image, ScrollView, useTheme } from "native-base";
import { Text, View } from "../../../../components/customs";
import { DEVICE_HEIGHT } from "../../../constants";
import { ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { lady, roundCircle } from "../../../utils/assets";
import { Camera, Closse, Volume } from "../../../../assets/images/svg/icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../navigation/Home-navigation";

type callScreenProps = NativeStackScreenProps<HomeStackParamList, 'call_screen'>
export const CallScreen = ({navigation}: callScreenProps) => {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <View
        safeArea
        bgColor={colors.white[100]}
        width="100%"
        height={DEVICE_HEIGHT}
        paddingX={5}
        paddingTop={20}
      >
        <View>
          <ImageBackground
            source={roundCircle}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 329,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              borderRadius={"100%"}
              alt=""
              source={lady}
              style={{ width: 197, height: 197, marginTop: 23 }}
            />
          </ImageBackground>

          <View
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingTop={32}
          >
            <Text
              fontSize={27}
              fontFamily="Poppins-Medium"
              color={colors.black[100]}
            >
              Bessie Cooper
            </Text>
            <Text
              marginTop={4}
              fontSize={16}
              fontFamily="Poppins-Regular"
              color={colors.grey[400]}
            >
              02:38 minutes
            </Text>

            <View flexDirection='row' marginTop={20} style={{gap: 20}}>
              <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                <Closse />
              </TouchableOpacity>
              <TouchableOpacity style={styles.close2}>
                <Camera />
              </TouchableOpacity>
              <TouchableOpacity style={styles.close3}>
                <Volume />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  close: {
    backgroundColor: "#FFA0B2",
    width: 77,
    height: 77,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  close2: {
    backgroundColor: "#3D86F4",
    width: 77,
    height: 77,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  close3: {
    backgroundColor: "#FFDB71",
    width: 77,
    height: 77,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
