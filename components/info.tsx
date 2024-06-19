import { TouchableOpacity } from "react-native";
import { LocationOutlined } from "../assets/images/svg/icons";
import { Button } from "./button";
import { Text, View } from "./customs";
import { ReactNode } from "react";

type props = {
  icon: ReactNode;
  title?: string;
  text?: string;
  buttonTitle?: string;
  link?: string;
  onPress: () => void;
  onLinkPress?: () => void;
};
export const InfoContent = ({
  title = "What is Your Location",
  buttonTitle = "Allow Location Access",
  text = "To Find Nearby Job Availability",
  link = "Enter Location Manually",
  icon,
  onPress,
  onLinkPress,
}: props) => {
  return (
    <View width="86%" marginX="7%" justifyContent="center" alignItems="center">
      {icon}
      <Text
        color="black.100"
        fontFamily="Poppins-SemiBold"
        fontSize={24}
        marginTop={6}
      >
        {title}
      </Text>
      <Text
        textAlign="center"
        color="black.100"
        fontSize={16}
        fontFamily="Poppins-Light"
      >
        {text}
      </Text>
      <Button title={buttonTitle} onPress={onPress} />
      <TouchableOpacity onPress={onLinkPress}>
        <Text
          color="blue.100"
          fontSize={14}
          fontFamily="Poppins-Medium"
          marginTop={6}
        >
          {link}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
