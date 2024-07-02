import { HStack, VStack } from "native-base";
import { DEVICE_WIDTH } from "../../src/constants";
import { Text, View } from "../customs";
import { PopularServices } from "../services";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Location2 } from "../../assets/images/svg/icons";

type props = {
  image: ImageSourcePropType;
  name: string;
  service: string;
  width: number;
  onPress: () => void;
};
export const OneTaskerJob = ({
  image,
  name,
  service,
  width,
  onPress,
}: props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        height={200}
        marginX="auto"
        width={width}
        bgColor="white.100"
        padding={5}
      >
        <HStack>
          <View width={50} height={50} borderRadius={50}>
            <Image
              source={image}
              borderRadius={50}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <VStack marginLeft={4}>
            <Text fontSize={14}>{service}</Text>
            <Text fontSize={12} fontFamily="Poppins-Regular" color="grey.400">
              {name}
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems="center" marginTop={2}>
          <Location2 />
          <Text
            width="80%"
            marginLeft={3}
            fontSize={12}
            color="grey.400"
            fontFamily="Poppins-Regular"
          >
            5, Orimolade Street, Ikeja, Lagos State
          </Text>
        </HStack>
        <HStack marginTop={4} style={{ gap: 4 }}>
          <HStack
            borderRadius={6}
            bgColor="grey.900"
            paddingX={2}
            paddingBottom={2}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={8.5}>Time:</Text>
            <Text fontSize={8.5}>11:00 AM</Text>
          </HStack>
          <HStack
            borderRadius={6}
            bgColor="grey.900"
            paddingX={2}
            paddingBottom={2}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={8.5}>Work Hour:</Text>
            <Text fontSize={8.5}>2 Hours</Text>
          </HStack>

          <HStack
            borderRadius={6}
            bgColor="grey.900"
            paddingX={2}
            paddingBottom={2}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={8.5}>15, Dec 2024</Text>
          </HStack>
        </HStack>
      </View>
    </TouchableOpacity>
  );
};
