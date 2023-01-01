import React, { useState } from "react";
import { View, Text } from "../../../components/customs";
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "../../../components/button";
import { Data } from "./data";
import { AuthenticationStackParamsList } from "../../navigation/onboarding";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants";
import { useMediaQuery } from "native-base";

type WelcomeScreenProps = NativeStackScreenProps<
  AuthenticationStackParamsList,
  "welcome"
>;

export const Welcome = ({ navigation }: WelcomeScreenProps) => {
  const [index, setIndex] = useState(0);
  const [isSmallScreen] = useMediaQuery({
    minHeight: 200,
    maxHeight: 400,
  });
  const handleNext = () => {
    if (index < Data.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      navigation.navigate("login");
    }
  };

  return (
    <View
      safeArea
      position="relative"
      bgColor="white.100"
      height={DEVICE_HEIGHT}
      width={DEVICE_WIDTH}
    >
      <Swiper
        style={styles.wrapper}
        loop={false}
        index={index}
        onIndexChanged={(currentIndex) => setIndex(currentIndex)}
      >
        {Data.map((elem, id) => (
          <View key={id} style={styles.view}>
            <>
              <elem.image />
              <View style={styles.texts}>
                <Text
                  style={styles.title}
                  color="black.100"
                  fontFamily="Poppins-SemiBold"
                >
                  {elem.title}
                </Text>
                <Text
                  style={styles.subtext}
                  color="black.100"
                  fontFamily="Poppins-Light"
                >
                  {elem.subtext}
                </Text>
              </View>
            </>
          </View>
        ))}
      </Swiper>
      <View
        style={{
          width: "90%",
          paddingBottom: 10,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Button
          title={index === Data.length - 1 ? "Get started" : "Next"}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    
  },
  view: {
    paddingTop: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  texts: {
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    lineHeight: 50,
    fontSize: 28,
  },
  subtext: {
    lineHeight: 27,
    textAlign: "center",
    marginTop: 10,
    fontSize: 19,
  },
});
