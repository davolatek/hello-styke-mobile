import {
  Bookmark,
  Even,
  Notification,
  PersonDark,
  Search,
} from "../../../../assets/images/svg/icons";
import { Text, View } from "../../../../components/customs";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "native-base";
import { Services } from "../../../../components/services";
import { box } from "../../../utils/assets";
import { BottomHomeTab } from "../../../../components/bottom-tab";
import { useState } from "react";
import { useAppSelector } from "../../../redux/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../navigation/Home-navigation";
import { AppStackNavigationProp } from "../../../navigation/app.roots.types";

export const HomeScreen = ({
  navigation,
}: AppStackNavigationProp<"home_stack">) => {
  const { user } = useAppSelector(({ userReducer }) => userReducer);
  console.log(user, "userss");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        bg="white.100"
        height="full"
        paddingBottom={10}
        paddingTop={20}
        paddingX={6}
      >
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <View flexDirection="row">
            <View
              width={65}
              justifyContent="center"
              alignItems="center"
              height={65}
              bg="white.100"
              style={styles.image}
            >
              <PersonDark />
            </View>
            <View marginLeft={3}>
              <Text color="black.100" fontFamily="Poppins-Light" fontSize={12}>
                Welcome!
              </Text>
              <Text
                color="black.100"
                fontFamily="Poppins-SemiBold"
                fontSize={15}
              >
                {user?.firstName} {user?.lastName}
              </Text>
            </View>
          </View>
          <View flexDirection="row" paddingTop={33}>
            <View marginRight={5}>
              <Notification width={17} height={20} />
            </View>
            <Bookmark />
          </View>
        </View>
        <View
          marginTop={10}
          height={60}
          alignItems="center"
          justifyContent="center"
          style={styles.searchbox2}
        >
          <Input
            width="full"
            height="full"
            fontFamily="Poppins-Medium"
            fontSize={12}
            borderColor="white.100"
            placeholder="Search for task"
            paddingLeft={2}
            InputLeftElement={
              <View paddingLeft={3}>
                <Search />
              </View>
            }
            InputRightElement={
              <View marginRight={3}>
                <Even />
              </View>
            }
          />
        </View>
        <View marginTop={5}>
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Text fontFamily="Poppins-Medium" color="black.100" fontSize={16}>
              Services
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("home_stack", {
                  screen: "all_services",
                })
              }
            >
              <Text color="blue.100" fontFamily="Poppins-Regular" fontSize={12}>
                See More
              </Text>
            </TouchableOpacity>
          </View>
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            marginTop={12}
            style={styles.container}
          >
            {Services.map((elem) => (
              <TouchableOpacity
                key={elem.id}
                style={styles.card}
                onPress={() =>
                  navigation.navigate('home_stack', {
                    screen: "one_service",
                    params: {
                      name: elem.name
                    }
                  })
                  
                }
              >
                <View>{elem.image}</View>
                <Text
                  height={44}
                  fontFamily="Poppins-Regular"
                  fontSize={12}
                  textAlign="center"
                >
                  {elem.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            marginTop={5}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Text fontFamily="Poppins-Medium" color="black.100" fontSize={16}>
              Special Offers
            </Text>
            <TouchableOpacity>
              <Text color="blue.100" fontFamily="Poppins-Regular" fontSize={12}>
                See More
              </Text>
            </TouchableOpacity>
          </View>
          <View height={165}>
            <Image
              source={box}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                marginTop: 13,
                borderRadius: 20,
              }}
            />
          </View>
          <View
            marginTop={5}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Text fontFamily="Poppins-Medium" color="black.100" fontSize={16}>
              Most Popular Services
            </Text>
            <TouchableOpacity>
              <Text color="blue.100" fontFamily="Poppins-Regular" fontSize={12}>
                See More
              </Text>
            </TouchableOpacity>
          </View>
          <BottomHomeTab />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    shadowColor: "rgba(99, 99, 99, 0.2)",
    borderRadius: 40,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  searchbox2: {
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "rgba(0, 62, 154, 0.30)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderStyle: "solid",
    shadowRadius: 7.8 / 2,
    shadowOpacity: 0.5,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
  card: {
    width: "30%", // Adjust the width to take up approximately 30% of the container width
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Adjust the margin as needed
  },
});
