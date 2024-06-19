import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type RadioProps = {
  id: number;
  active: boolean;
  handleActive: (id: number) => void;
};

export const Radio: React.FC<RadioProps> = ({ id, active, handleActive }) => {
  return (
    <TouchableOpacity onPress={() => handleActive(id)}>
      <View style={styles.inactive}>
        {active && <View style={styles.active} />}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  inactive: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#003E9A",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    height: 16,
    width: 16,
    borderRadius: 12,
    backgroundColor: "#003E9A",
    alignItems: "center",
    justifyContent: "center",
  },
});
