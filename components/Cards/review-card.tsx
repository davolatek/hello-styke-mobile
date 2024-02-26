import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../customs";
import {
  Bookmark,
  Bookmarked,
  LoveSolid,
  Medal,
  Menu,
} from "../../assets/images/svg/icons";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "../button";

type props = {
  image: ImageSourcePropType;
  name: string;
  bookmarked: boolean;
  likes: string;
  date: string;
  rating: string;
  id?: number;
  review: string;
};
export const ReviewCard = (props: props) => {
  const elem = props;
  return (
    <View>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <View
          bg="white.100"
          paddingY={5}
          flexDirection="row"
          alignItems="center"
        >
          <View width={16} height={16}>
            <Image
              source={elem.image}
              style={{ width: "100%", height: "100%" }}
              borderRadius={50}
            />
          </View>
          <View marginLeft={2}>
            <Text fontSize={14} color="black.100" fontFamily="Poppins-Medium">
              {elem.name}
            </Text>
            <Text
              fontSize={10}
              color="black.300"
              fontFamily="Poppins-Regular"
              marginTop={-2}
            >
              {elem.date}
            </Text>
          </View>
        </View>
        <View flexDirection="row" alignItems="center">
          <View style={styles.category}>
            <AntDesign name="star" size={12} color={"#003E9A"} />
            <Text
              color={"blue.100"}
              marginTop={-1}
              marginLeft={1}
              textAlign="center"
              fontSize={12}
              fontFamily="Poppins-Medium"
            >
              {elem.rating}
            </Text>
          </View>
          <View marginLeft={1.5}>
            <Menu />
          </View>
        </View>
      </View>
      <View>
        <Text fontSize={12} fontFamily="Poppins-Regular" color="black.300">
          {elem.review}
        </Text>
      </View>
      <View flexDirection="row" alignItems="center" marginTop={2}>
        {elem.bookmarked ? <LoveSolid /> : <LoveSolid />}{" "}
        <Text
          fontSize={12}
          fontFamily="Poppins-Light"
          marginBottom={1}
          marginLeft={2}
        >
          {elem.likes}
        </Text>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "rgba(0, 62, 154, 0.10)",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  category: {
    borderColor: "#003E9A",
    borderWidth: 1,
    height: 35,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 70,
  },
});
