import { ScrollView } from "native-base";
import { Text, View } from "../customs";
import { TabList } from "./tab-list";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { PopularServices } from "../services";
import { Bookmark, Bookmarked, Medal } from "../../assets/images/svg/icons";
import { ServiceCard } from "../Cards";

export const BottomHomeTab = () => {
  const [active, setActive] = useState(1);
  const [selected, setSelected] = useState(1);

  const handleOnActive = (id: number) => {
    setActive(id);
    setSelected(id);
  };
  const filteredServices = () => {
    if (selected === 1) {
      return PopularServices;
    } else {
      return PopularServices?.filter(
        (service) =>
          service.category === TabList[selected - 1].name.toLowerCase()
      );
    }
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View flexDirection="row" marginTop={5} style={styles.container}>
          {TabList.map((elem) => (
            <TouchableOpacity
              key={elem.id}
              style={
                active === elem.id ? styles.activeCategory : styles.category
              }
              onPress={() => handleOnActive(elem.id)}
            >
              <Text
                color={active === elem.id ? "white.100" : "blue.100"}
                marginTop={-1}
                textAlign="center"
                fontSize={12}
                fontFamily="Poppins-Medium"
              >
                {elem.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View flexDirection="column" style={styles.cards}>
        <FlatList
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ServiceCard
              name={item.name}
              image={item.image as any}
              service={item.service}
              bookmarked={item.bookmarked}
              pay={item.pay}
              category={item.category}
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
  },
  scrollContainer: {
    flexDirection: "column",
  },
  container: {
    columnGap: 10,
    marginLeft: -20,
    paddingHorizontal: 20,
  },
  activeCategory: {
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
    backgroundColor: 'red'
  },
});
