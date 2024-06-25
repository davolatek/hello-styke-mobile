import { Image, ImageBackground, StyleSheet } from "react-native";
import { Text, View } from "../../../components/customs";
import { bg2, iPhone } from "../../utils/assets";
import { DEVICE_HEIGHT } from "../../constants";
import { HStack } from "native-base";
import { Button } from "../../../components/button";
import { AppStackScreenProps } from "../../navigation/app.roots.types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StykerTaskerStackParamList } from "../../navigation/styker/styker.tasker/styker.tasker.stack.navigation";

type TaskerScreenProps = NativeStackScreenProps<
  StykerTaskerStackParamList,
 'tasker_screen'
>;
export const TaskerScreen = ({
  navigation,
}:TaskerScreenProps ) => {
  return (
    <View paddingTop={40} height={DEVICE_HEIGHT}>
      <View width="70%" marginX="auto" height={"80%"}>
        <Image source={iPhone} style={styles.image} />
      </View>
      <View width="100%" height={400} position="absolute" top="69%">
        <ImageBackground source={bg2} style={styles.container}>
          <View width={"100%"} paddingX={"10%"}>
            <HStack
              style={{ gap: 3 }}
              paddingTop={100}
              justifyContent="center"
              alignItems="center"
            >
              <Text
                fontFamily="Poppins-SemiBold"
                fontSize={20}
                textAlign="center"
                color="blue.300"
              >
                Explore Jobs
              </Text>
              <Text
                fontSize={20}
                fontFamily="Poppins-SemiBold"
                color="black.100"
              >
                through
              </Text>
            </HStack>
            <Text
              fontSize={20}
              fontFamily="Poppins-SemiBold"
              color="black.100"
              textAlign="center"
            >
              Styke App
            </Text>
            <Text
              textAlign="center"
              fontSize={16}
              fontFamily="Poppins-Light"
              marginTop={3}
              lineHeight={24}
            >
              Get connect, building trust with your skill
            </Text>
            <Button
              title="Get Started"
              onPress={() =>
                navigation.navigate('forms')
              }
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
});
