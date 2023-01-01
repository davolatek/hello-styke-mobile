import { TouchableOpacity } from "react-native";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { Comment, MenuIcon, Search } from "../../../../assets/images/svg/icons";
import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { FlatList, Image, ScrollView } from "native-base";
import { useTheme } from "native-base";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { jobBookings } from "../../../../components/services";
import { comment, rectangle } from "../../../utils/assets";
import { DEVICE_HEIGHT } from "../../../constants";
import { Button } from "../../../../components/button";
import { Fontisto } from "@expo/vector-icons";
import { Card } from "../../../../components/booking/card";
import { EmptyState } from "../../../../components/empty-state";
import { Button as button, Actionsheet, useDisclose } from "native-base";

export const BookingScreen = () => {
  const { colors } = useTheme();
  const [active, setActive] = useState("Upcoming");
  const data = ["Upcoming", "Completed", "Cancelled"];
  const { isOpen, onOpen, onClose } = useDisclose();

  const handleActive = (id: string) => {
    setActive(id);
  };

  const activeIndex = data.findIndex((item) => item === active);

  return (
    <PageLayout
      goBack
      withPadding
      title="My Bookings"
      icon={
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <EvilIcons name="search" size={34} color="black" />
          <TouchableOpacity>
            <MenuIcon />
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.tabs}
          keyExtractor={(item) => item}
          data={data}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity onPress={() => handleActive(item)}>
                <Text
                  textAlign="center"
                  fontSize={14}
                  fontFamily="Poppins-Medium"
                  color={active === item ? "blue.100" : "grey.300"}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            </>
          )}
        />
        <View style={styles.border} backgroundColor="grey.600">
          <View
            style={[
              styles.activeBorder,
              {
                left: `${(100 / data.length) * activeIndex}%`,
                width: `${100 / data.length}%`,
              },
            ]}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 30, marginBottom: 100 }}
        >
          <FlatList
            _contentContainerStyle={styles.job}
            data={jobBookings.filter((elem) => elem.type === active)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                service={item.service}
                id={item.id}
                image={item.image}
                type={item.type as any}
              />
            )}
            ListEmptyComponent={<EmptyState active={active} />}
          />
          <View height={150}></View>
        </ScrollView>
      </View>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "3%",
    paddingLeft: "3%",
    textAlign: "center",
  },
  container: {
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    marginTop: 10,
  },
  border: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 3,
    top: 37,
  },
  activeBorder: {
    position: "absolute",
    bottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#003E9A",
  },
  job: {
    width: "98%",
    marginHorizontal: "1%",
    gap: 6,
  },
  card: {
    shadowColor: "rgba(0, 62, 154, 0.10)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    borderRadius: 20,
    paddingTop: 10,
    height: "auto",
    gap: 10,
    paddingBottom: 20,
  },
  img: {
    width: 95,
    height: 95,
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginHorizontal: "5%",
    position: "relative",
  },
  transform: {
    transform: "",
  },
});
