import { FC } from "react";
import { DEVICE_WIDTH } from "../../src/constants";
import { Text, View } from "../customs";
import { LinearGradient } from "expo-linear-gradient";
import { HStack, useTheme } from "native-base";
import { ImageBackground } from "react-native";
import { CardBg } from "../../src/utils/assets";
import moment from "moment";

type Props = {
  text: string;
  date: string;
};

export const SenderLayout: FC<Props> = ({ text, date }) => {
  const { colors } = useTheme();
  return (
    <HStack width={'100%'} justifyContent='flex-end'>
      <View
      overflow="hidden"
      mb={21}
      borderRadius={10}
      width={text.length < 100 ? 200 : DEVICE_WIDTH / 2 + 100}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.blue[200], colors.blue[300]]}
        style={{
          //   width: "100%",
          paddingVertical: 10,
          position: "relative",
        }}
      >
        <Text
          p={21}
          width="90%"
          fontFamily="Poppins-Light"
          fontSize={13}
          color="white.100"
        >
          {text}
        </Text>
        <Text
          position="absolute"
          right={0}
          m={3}
          bottom={0}
          fontFamily="Poppins-Light"
          fontSize={13}
          color="white.100"
        >
          {moment(date).format("HH:mm")}
        </Text>
      </LinearGradient>
    </View>
    </HStack>
  );
};
