import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MenuIcon, PlusIcon } from "../../../../assets/images/svg/icons";
import { Calendar } from "../../../../components/Cards";
import { HStack, MinusIcon, ScrollView, VStack } from "native-base";
import { Text, View } from "../../../../components/customs";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";
import { DEVICE_HEIGHT } from "../../../constants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../navigation/Home-navigation";

type BookingDetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  "booking"
>;
const BookingDetails = ({ route, navigation }: BookingDetailsProps) => {
  const [count, setCount] = useState<number>(1);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleOnActive = (id: number) => {
    setActive(id);
    setSelected(id);
  };
  return (
    <PageLayout
      goBack
      withPadding
      title="Booking details"
      icon={
        <TouchableOpacity>
          <MenuIcon />
        </TouchableOpacity>
      }
    >
      <ScrollView
        height={Platform.OS === 'ios' ? DEVICE_HEIGHT - 280 : DEVICE_HEIGHT - 240}
        showsVerticalScrollIndicator={false}
        marginBottom={4}
      >
        <View paddingX={5}>
          <Calendar onSelectDate={(date) => null} />
          <HStack
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            bgColor="white.100"
            borderRadius={11}
            my={21}
            shadow={1}
            p={21}
          >
            <VStack>
              <Text
                fontFamily="Poppins-Regular"
                fontSize={14}
                color="black.100"
              >
                Work Hours
              </Text>
              <Text
                mt={-2}
                fontFamily="Poppins-Light"
                fontSize={10}
                color="black.100"
              >
                Cost increase after 2 hours of work
              </Text>
            </VStack>
            <HStack space={4}>
              <TouchableWithoutFeedback onPress={() => handleDecrement()}>
                <HStack
                  justifyContent="center"
                  alignItems="center"
                  height={37}
                  width={37}
                  bgColor="pink.200"
                  borderRadius={50}
                >
                  <MinusIcon />
                </HStack>
              </TouchableWithoutFeedback>
              <Text fontFamily="Poppins-Regular" fontSize={14}>
                {count}
              </Text>
              <TouchableWithoutFeedback onPress={() => handleCount()}>
                <HStack
                  bgColor="pink.200"
                  justifyContent="center"
                  alignItems="center"
                  height={37}
                  width={37}
                  borderRadius={50}
                >
                  <PlusIcon />
                </HStack>
              </TouchableWithoutFeedback>
            </HStack>
          </HStack>

          <Text
            fontFamily="Poppins-SemiBold"
            color="black.100"
            py={11}
            fontSize={18}
          >
            Choose Start Time
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            <View flexDirection="row" marginTop={5} style={styles.container}>
              {[
                "09:00AM",
                "10:00AM",
                "11:00AM",
                "12:00PM",
                "01:00PM",
                "02:00PM",
              ].map((elem, id) => (
                <TouchableOpacity
                  key={id}
                  style={
                    active === id ? styles.activeCategory : styles.category
                  }
                  onPress={() => handleOnActive(id)}
                >
                  <Text
                    color={active === id ? "white.100" : "blue.100"}
                    marginTop={-1}
                    marginLeft={1}
                    textAlign="center"
                    fontSize={12}
                    fontFamily="Poppins-Medium"
                  >
                    {elem}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <Text
            fontFamily="Poppins-SemiBold"
            color="black.100"
            paddingTop={4}
            fontSize={18}
          >
            Promo Code
          </Text>
          <View
            flexDirection="row"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <View width="89%">
              <Input placeholder="Enter promo code" width="100%" />
            </View>
            <TouchableOpacity
              style={styles.input}
              onPress={() => handleCount()}
            >
              <HStack
                bgColor="pink.200"
                justifyContent="center"
                alignItems="center"
                height={37}
                width={37}
                borderRadius={50}
              >
                <PlusIcon />
              </HStack>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        flexDirection="row"
        borderColor="white.200"
        borderTopRadius={20}
        borderWidth={1}
        paddingX={6}
        paddingBottom={8}
        paddingTop={4}
        height={150}
        backgroundColor="white.100"
      >
        <Button
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("location")}
          title="Continue - ₦ 12,000"
        ></Button>
      </View>
    </PageLayout>
  );
};

export default BookingDetails;
const styles = StyleSheet.create({
  category: {
    borderColor: "#003E9A",
    borderWidth: 1,
    height: 30,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  scrollContainer: {
    flexDirection: "column",
  },
  container: {
    columnGap: 10,
  },
  activeCategory: {
    flexDirection: "row",
    borderColor: "#003E9A",
    borderWidth: 1,
    height: 30,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003E9A",
    color: "#FFF",
  },
  input: {
    width: "7%",
    marginTop: 25,
    marginLeft: 10,
  },
});
