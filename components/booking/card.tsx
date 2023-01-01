import { FontAwesome } from "@expo/vector-icons";
import {
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Text, View } from "../customs";
import { Button } from "../button";
import { comment, rectangle } from "../../src/utils/assets";
import { useState } from "react";
import { Image } from "native-base";
import { Actionsheet, useDisclose } from "native-base";

type props = {
  image: ImageSourcePropType;
  name: string;
  service: string;
  id: number;
  type: "Upcoming" | "Completed" | "Cancelled" | "";
};
export const Card = ({ name, service, type, id, image }: props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclose();
  const handleSelect = (id: number) => {
    setOpen(!open);
    setSelected(id);
  };

  return (
    <>
      <View>
        <View bgColor="white.100" style={styles.card}>
          <View style={styles.cardInfo}>
            <Image source={image} alt="" borderRadius={15} style={styles.img} />
            <View ml={5} flexDirection="column" style={{ rowGap: 4 }}>
              <Text fontSize={15} fontFamily="Poppins-Medium">
                {service}
              </Text>
              <Text fontFamily="Poppins-Light" fontSize={13}>
                {name}
              </Text>
              <View
                style={{
                  backgroundColor:
                    type === "Upcoming"
                      ? "#003E9A"
                      : type === "Completed"
                      ? "#4CAF50"
                      : "#AA2F08",
                }}
                marginTop={2}
                pb={2}
                w={24}
                borderRadius={10}
              >
                <Text fontSize={10} color="white.100" textAlign="center">
                  {type}
                </Text>
              </View>
            </View>
            <View position="absolute" left="84%">
              <View
                style={{ width: 54, height: 54 }}
                bgColor="pink.200"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
              >
                <Image
                  source={comment}
                  alt=""
                  marginTop={2}
                  width={8}
                  height={8}
                />
              </View>
            </View>
          </View>
          <View
            width="88%"
            marginX="6%"
            borderBottomColor="grey.600"
            borderBottomWidth={0.7}
            paddingBottom={2}
          />

          {open && selected === id && (
            <>
              <View flexDirection="column" style={{ gap: 25, paddingTop: 20 }}>
                <View
                  paddingX={5}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    marginTop={-4}
                    fontSize={12}
                    fontFamily="Poppins-Light"
                    color="grey.400"
                  >
                    Date & Time
                  </Text>
                  <Text
                    marginTop={-4}
                    fontFamily="Poppins-Medium"
                    fontSize={12}
                    color="black.100"
                  >
                    Dec 12, 2023 | 9:00 AM - 12:00 PM
                  </Text>
                </View>
                <View
                  paddingX={5}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    marginTop={-6}
                    fontSize={12}
                    fontFamily="Poppins-Light"
                    color="grey.400"
                  >
                    Location
                  </Text>
                  <Text
                    marginTop={-6}
                    fontFamily="Poppins-Medium"
                    fontSize={12}
                    color="black.100"
                  >
                    3 Badagri, Lagos State.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  height: 229,
                  marginHorizontal: "5%",
                  marginTop: 4,
                }}
              >
                <Image
                  source={rectangle}
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: 15,
                    height: "100%",
                  }}
                />
              </View>
              {type !== "Upcoming" ? (
                <Button
                  style={{ width: "90%", marginHorizontal: "5%" }}
                  title="View E-Receipt"
                  onPress={() => null}
                />
              ) : (
                <View
                  flexDirection="row"
                  width="100%"
                  justifyContent="center"
                  alignItems="center"
                  style={{ gap: 7 }}
                >
                  <Button
                    style={{ width: "42%" }}
                    title="Cancel Booking"
                    onPress={onOpen}
                    fontSize={12.5}
                    color="pink.200"
                    textColor="blue.100"
                  />{" "}
                  <Button
                    style={{ width: "42%" }}
                    title="View E-Receipt"
                    onPress={() => null}
                    fontSize={12.5}
                  />
                </View>
              )}
            </>
          )}
          <TouchableOpacity
            style={[
              styles.transform,
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            onPress={() => handleSelect(id)}
          >
            <FontAwesome name="angle-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Text color="#CF6F64" fontSize={18} fontFamily="Poppins-SemiBold">
              Cancel Booking
            </Text>
            <View
              width="88%"
              marginX="6%"
              borderBottomColor="grey.600"
              borderBottomWidth={0.7}
              paddingBottom={2}
            />
            <Text
              fontSize={16}
              paddingY={10}
              paddingX={10}
              paddingTop={10}
              textAlign="center"
              color="black.100"
            >
              Are you sure you want to cancel your service booking?
            </Text>
            <View
              flexDirection="row"
              width="100%"
              justifyContent="center"
              alignItems="center"
              style={{ gap: 4 }}
            >
              <Button
                style={{ width: "38%" }}
                title="Cancel"
                onPress={onClose}
                fontSize={14}
                color="pink.200"
                textColor="blue.100"
              />{" "}
              <Button
                style={{ width: "55%" }}
                title="Yes, Cancel Booking"
                onPress={() => null}
                fontSize={14}
              />
            </View>
          </Actionsheet.Content>
        </Actionsheet>
      </>
    </>
  );
};
const styles = StyleSheet.create({
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
