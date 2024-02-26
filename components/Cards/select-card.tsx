import { ComponentProps, ReactNode } from "react";
import { Text, View } from "../customs";
import { StyleSheet, TouchableOpacity } from "react-native";
import { HStack } from "native-base";
import React, { useMemo, useState } from "react";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";

type props = {
  image: ReactNode;
  title: string;
  selected: boolean;
  onSelect: () => void;
};
export const SelectCard = ({ image, title, selected, onSelect }: props) => {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  return (
    <TouchableOpacity onPress={() => onSelect()}>
      <HStack shadow={2} style={styles.container} bgColor="white.100">
        <View flexDirection="row" style={styles.left}>
          <View>{image}</View>
          <Text fontFamily="Poppins-Medium" fontSize={14} paddingLeft={3}>
            {title}
          </Text>
        </View>
        <View
          width={7}
          height={7}
          borderWidth={2}
          borderColor="blue.100"
          borderRadius="full"
          flexDirection="row"
          justifyContent='center'
          alignItems='center'
        >
          {selected && 
            <View
              width={5}
              height={5}
              bgColor="blue.100"
              borderRadius="full"
            ></View>
          }
        </View>
      </HStack>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    marginHorizontal: "auto",
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    gap: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
