import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "../../../components/customs";
import { AppStackScreenProps } from "../../navigation/app.roots.types";
import { HomeStackParamList } from "../../navigation/Home-navigation";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants";
import { Arrow } from "../../../assets/images/svg/icons/arrow";
import { HStack, VStack } from "native-base";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import {
  admin,
  clean,
  container,
  desk,
  repair,
  trolley,
} from "../../utils/assets";
import { OneService } from "../../../components/services";
import { Radio } from "../../../components/button/radio";
import { useState } from "react";
import { Button } from "../../../components/button";

type JobFormScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "job_form"
>;
export const JobForm = ({ route, navigation }: JobFormScreenProps) => {
  const name = route.params.name;
  const [job, setJob] = useState<number | null>(null);
  const handleJob = (id: number) => {
    setJob(id);
  };
  return (
    <View
      width={DEVICE_WIDTH}
      height={DEVICE_HEIGHT}
      bg="white.100"
      paddingBottom={8}
    >
      <ScrollView>
        <View width="100%" height={216} backgroundColor="blue.100">
          <View width="88%" marginLeft="6%">
            <TouchableOpacity
              style={{ paddingTop: 75 }}
              onPress={() => navigation.goBack()}
            >
              <Arrow color="white" />
            </TouchableOpacity>
            <HStack style={{ gap: 10 }}>
              <Text
                fontFamily="Poppins-SemiBold"
                width={name === "Administrative Support" ? "60%" : "50%"}
                color="white.100"
                fontSize={22}
                marginTop={10}
              >
                {route?.params?.name}
              </Text>
              {/* <View height={194} width={194}>
                <Image
                  source={route.params.image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View> */}
              {name === "Cleaning" && (
                <View width={194} height={194}>
                  {name === "Cleaning" && (
                    <Image source={clean} style={styles.image} />
                  )}
                </View>
              )}
              {name === "Administrative Support" && (
                <View width={144} height={144}>
                  {name === "Administrative Support" && (
                    <Image source={admin} style={styles.image} />
                  )}
                </View>
              )}
              {name === "Concierge" && (
                <View width={185} height={185}>
                  {name === "Concierge" && (
                    <Image source={desk} style={styles.image} />
                  )}
                </View>
              )}
              {name === "Shopping" && (
                <View width={185} height={185}>
                  {name === "Shopping" && (
                    <Image source={trolley} style={styles.image} />
                  )}
                </View>
              )}
              {name === "Repair & Installation" && (
                <View width={144} height={144}>
                  {name === "Repair & Installation" && (
                    <Image source={repair} style={styles.image} />
                  )}
                </View>
              )}
              {name === "Moving & Transit" && (
                <View width={197} height={197}>
                  {name === "Moving & Transit" && (
                    <Image source={container} style={styles.image} />
                  )}
                </View>
              )}
            </HStack>
          </View>
        </View>
        <VStack
          zIndex={1000}
          position="absolute"
          top={216}
          width={"100%"}
          height={DEVICE_HEIGHT - 216}
          bg="white.100"
          paddingTop={4}
        >
          <View position="relative" style={{ gap: 14 }}>
            {OneService.filter((elem) => elem.type === name.toLowerCase()).map(
              (elem, id) => (
                <HStack
                  width="90%"
                  marginX="auto"
                  style={styles.shadow}
                  borderRadius={8}
                  padding={5}
                  bg="white.100"
                  alignItems="center"
                  key={elem.id}
                >
                  <Radio
                    id={id}
                    active={job === id}
                    handleActive={() => handleJob(id)}
                  />
                  <Text
                    fontSize={14}
                    fontFamily="Poppins-Medium"
                    color="black.100"
                  >
                    {elem.name}
                  </Text>
                </HStack>
              )
            )}
          </View>
        </VStack>
      </ScrollView>
      <View width="90%" marginX="auto" marginTop={-10} position="relative">
        <Button
          title="Next"
          onPress={() => navigation.navigate("location_page")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 4,
    right: "6%",
  },
  shadow: {
    gap: 10,
    shadowColor: "rgba(0, 62, 154, 0.10)",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
