import { FC } from "react";
import { DEVICE_WIDTH } from "../../src/constants";
import { Text, View } from "../customs";
import { LinearGradient } from "expo-linear-gradient";
import { HStack, VStack, useTheme } from "native-base";
import { ImageBackground } from "react-native";
import { CardBg } from "../../src/utils/assets";
import moment from "moment";

type Props = {
  text: string;
  date: string;
};

export const ReceiverLayout: FC<Props> = ({ text, date }) => {
  const { colors } = useTheme();
  return (
    <HStack width={'100%'} justifyContent='flex-start'>
      <View
        borderRadius={10}
        width={text.length < 100 ? 200 : DEVICE_WIDTH / 2 + 100}
        paddingY={11}
        mb={21}
        bgColor="pink.200"
        position="relative"
      >
        <Text
          p={21}
          width="90%"
          fontFamily="Poppins-Light"
          fontSize={13}
          color="black.100"
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
          color="black.100"
        >
          {moment(date).format("HH:mm")}
        </Text>
      </View>
    </HStack>
  );
};
