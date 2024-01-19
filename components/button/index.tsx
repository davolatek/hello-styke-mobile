import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text, View } from "../customs";
import { StyleSheet, ActivityIndicator } from "react-native";

interface button extends Partial<TouchableOpacityProps> {
  title: string;
  onPress: () => void;
  loading?: "idle" | "pending" | "successful" | "failed";
}
export const Button = ({ title, onPress, loading, ...otherProps }: button) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...otherProps}>
      <View bgColor="blue.100" style={styles.btn}>
        {loading === "pending" ? (
          <ActivityIndicator />
        ) : (
          <Text fontFamily="Poppins-Medium" fontSize="16" color="white.100">
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 10,
  },
});
