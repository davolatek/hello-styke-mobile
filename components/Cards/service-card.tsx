import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../customs";
import { Bookmark, Bookmarked, Medal } from "../../assets/images/svg/icons";
import { useNavigation } from "@react-navigation/native";

type props = {
  image: ImageSourcePropType;
  name: string;
  bookmarked: boolean;
  pay: string;
  review: string;
  service: string;
  rating: string;
  category: string;
  page?: string;
  id?: number
};
export const ServiceCard = (props: props) => {
  const elem = props;
  const navigation = useNavigation<any>()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("about_one_service", {
      id: elem.id
    })}>
      <View
        width="100%"
        bg="white.100"
        paddingY={5}
        paddingX={5}
        flexDirection="row"
        justifyContent="space-between"
        style={styles.card}
      >
        <View width={124} height={134}>
          <Image
            source={elem.image}
            style={{ width: "100%", height: "100%" }}
            borderRadius={15}
          />
        </View>
        <View width={"57%"}>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text color="grey.400" fontFamily="Poppins-Light" fontSize={14}>
              {elem.name}
            </Text>
            <View>{elem.bookmarked ? <Bookmarked /> : <Bookmark />}</View>
          </View>
          <Text color="black.100" fontSize={16} fontFamily="Poppins-Medium">
            {elem.service}
          </Text>
          <Text color="blue.100" fontSize={15} fontFamily="Poppins-Medium">
            ₦{elem.pay}
          </Text>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            marginTop={-2}
          >
            <View marginBottom={4}>
              {" "}
              <Medal />
            </View>
            <Text
              marginLeft={1}
              color="grey.400"
              fontFamily="Poppins-Light"
              fontSize={12}
            >
              {elem.rating} | {elem.review} reviews
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
});
