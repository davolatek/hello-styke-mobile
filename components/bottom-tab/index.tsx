import { ScrollView } from "native-base";
import { Text, View } from "../customs";
import { TabList } from "./tab-list";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export const BottomHomeTab = () => {
  const [active, setActive] = useState(1);

  const handleOnActive = (id: number) => {
    setActive(id);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <View flexDirection="row" marginTop={5} style={styles.container}>
        {TabList.map((elem) => (
          <TouchableOpacity
            key={elem.id}
            style={active === elem.id ? styles.activeCategory : styles.category}
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
    paddingHorizontal: 20,
  },
  container: {
    columnGap: 10,
    marginLeft: -20
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
});
