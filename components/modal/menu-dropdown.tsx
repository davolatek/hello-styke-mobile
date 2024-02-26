import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../customs";
import { DropdownInfo } from "../dropdown-info";
import { HStack, VStack } from "native-base";

export const MenuDropdown = () => {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      width={280}
      height={160}
      right={7}
      zIndex={100}
      position='absolute'
      bgColor="white.100"
      top={2}
    >
      <FlatList
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <HStack
            borderBottomWidth={1}
            py={11}
            justifyContent="flex-start"
            alignItems="center"
          >
            <View>{item.image}</View>
            <Text fontSize={12} fontFamily='Poppins-Medium' marginLeft={2}>{item.label}</Text>
          </HStack>
        )}
        data={DropdownInfo}
        keyExtractor={(item) => item.value.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // top: '50%',
    // left: '90%',
    // position: "absolute",
    borderRadius: 8,
    zIndex: 1000,
    width: 250,
    height: 250,
  },
});
