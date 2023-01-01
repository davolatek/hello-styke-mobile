import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text, View } from "../customs";
import { StyleSheet, ActivityIndicator } from "react-native";

interface button extends Partial<TouchableOpacityProps> {
  title: string;
  onPress: () => void;
  loading?: "idle" | "pending" | "successful" | "failed";
  color?: string;
  textColor?: string;
  fontSize?: number;
  height?: number
}
export const Button = ({
  title,
  textColor = "white.100",
  onPress,
  loading,
  color = "blue.100",
  fontSize = 16,
  height = 60,
  ...otherProps
}: button) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...otherProps}>
      <View bgColor={color} style={styles.btn} height={height}>
        {loading === "pending" ? (
          <ActivityIndicator />
        ) : (
          <Text fontFamily="Poppins-Medium" fontSize={fontSize} color={textColor}>
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
    borderRadius: 10,
  },
});
