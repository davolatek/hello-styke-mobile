import { Image } from "react-native";
import { Text, View } from "./customs";
import { calendar, note } from "../src/utils/assets";
import { Button } from "./button";

type props = {
  active: string;
};
export const EmptyState = ({ active }: props) => {
  return (
    <View>
      <View width="100%" height={320}>
        <Image source={calendar} style={{ width: "100%", height: "100%" }} />
      </View>
      <Text
        marginTop={5}
        fontSize={18}
        color="black.100"
        fontFamily="Poppins-SemiBold"
      >
        You have no {active} booking
      </Text>
      <Text textAlign="center" fontFamily="Poppins-Light" fontSize={15}>
        Make a new booking by clicking the button below
      </Text>
      <View>
        <Button
          title="Make New Booking"
          onPress={() => null}
          color="pink.200"
          textColor="blue.100"
        />
      </View>
    </View>
  );
};

export const EmptyService = () => {
  return (
    <View
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {" "}
      <Image source={note} alt="" height={167} />
      <Text fontSize={20} fontFamily="Poppins-SemiBold" marginTop={4}>
        You have no service booking
      </Text>
      <Text fontFamily="Poppins-Light" fontSize={17} textAlign="center">
        You don’t have a service booking on this date
      </Text>
    </View>
  );
};
