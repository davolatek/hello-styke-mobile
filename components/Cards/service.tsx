import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../customs";
import { useNavigation } from "@react-navigation/native";

type servicesProps = {
  image: ReactNode;
  name: string;
  id: number;
  onPress: () => void
};
export const Service = (props: servicesProps) => {
const {image, id, name, onPress} = props
  const navigation = useNavigation()

  return (
    <TouchableOpacity key={id} style={styles.card} onPress={onPress}>
      <View>{image}</View>
      <Text
        height={59}
        fontFamily="Poppins-Regular"
        fontSize={12}
        textAlign="center"
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 130,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
