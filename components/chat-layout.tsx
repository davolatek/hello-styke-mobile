import { Text, View } from "./customs";
import { driver, message } from "../src/utils/assets";
import { Image } from "native-base";
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ReactNode } from "react";

type props = {
  image: ImageSourcePropType;
  name: string;
  message: ReactNode;
  icon: ReactNode;
  onPress?: () => void;
};
export const ChatLayout = ({ image, name, message, icon, onPress }: props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
      }}
      onPress={onPress}
    >
      <View>
        <Image alt="" source={image} style={styles.profile} />
      </View>
      <View ml={4}>
        <Text fontFamily="Poppins-Medium" color="black.100" fontSize={14.5}>
          {name}
        </Text>
        <View>{message}</View>
      </View>
      <View position="absolute" left="91%">
        {icon}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  profile: {
    width: 62,
    height: 62,
    borderRadius: 50,
    objectFit: "cover",
  },
});
