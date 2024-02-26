import { ScrollView } from "native-base";
import { Text, View } from "../customs";
import { TabList } from "./tab-list";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { reviews } from "../services";
import { Bookmark, Bookmarked, Medal } from "../../assets/images/svg/icons";
import { ServiceCard } from "../Cards";
import { AntDesign } from "@expo/vector-icons";
import { ReviewCard } from "../Cards/review-card";
import { ListEmptyComponent } from "../Cards/list-empty.component";

export const RatingsTab = () => {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleOnActive = (id: number) => {
    setActive(id);
    setSelected(id);
  };
  const filteredServices = () => {
    if (selected === 0) {
      return reviews;
    } else {
      return reviews?.filter(
        (service) =>
          service.rating ===
          ["All", "5.0", "4.0", "3.0", "2.0", "1.0"][selected].toString()
      );
    }
  };

  return (
    <View marginBottom={10}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View flexDirection="row" marginTop={5} style={styles.container}>
          {["All", "5.0", "4.0", "3.0", "2.0", "1.0"].map((elem, id) => (
            <TouchableOpacity
              key={id}
              style={active === id ? styles.activeCategory : styles.category}
              onPress={() => handleOnActive(id)}
            >
              <AntDesign
                name="star"
                size={12}
                color={active === id ? "#fff" : "#003E9A"}
              />
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
      <View flexDirection="column" style={styles.cards}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <View height={100}>
              <ListEmptyComponent name="No review available" />
            </View>
          }
          renderItem={({ item }) => (
            <ReviewCard
              likes={item.likes}
              date={item.date}
              id={item.id}
              name={item.name}
              image={item.image}
              bookmarked={item.bookmarked}
              review={item.review}
              rating={item.rating}
            />
          )}
          data={filteredServices()}
        />
      </View>
    </View>
  );
};
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
    paddingBottom: 20,
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
  cards: {
    marginTop: 40,
    rowGap: 10,
  },
  card: {
    shadowColor: "rgba(0, 62, 154, 0.10)",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    marginTop: 40,
    backgroundColor: "red",
  },
});
