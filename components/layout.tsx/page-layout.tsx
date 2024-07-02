import { ReactNode } from "react";
import { Arrow } from "../../assets/images/svg/icons/arrow";
import { DEVICE_HEIGHT } from "../../src/constants";
import { Text, View, ViewProps } from "../customs";
import { useTheme } from "native-base";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

type layoutProps = {
  title: string;
  goBack?: true;
  icon?: ReactNode;
  children: ReactNode;
  withPadding?: boolean;
  color?: string;
};
export const PageLayout = ({
  title,
  goBack,
  children,
  icon,
  withPadding = true,
  color = "white.100",
}: layoutProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View
      paddingX={withPadding ? 0 : 5}
      safeArea
      bgColor={color}
      width="100%"
      height={Platform.OS === "ios" ? DEVICE_HEIGHT : DEVICE_HEIGHT + 100}
    >
      <View
        flexDirection="row"
        marginTop={10}
        paddingX={withPadding ? 5 : 0}
        alignItems="center"
        justifyContent="space-between"
      >
        {goBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>
        ) : null}
        <Text
          color="black.100"
          fontFamily="Poppins-Medium"
          paddingTop={2}
          style={styles.text}
        >
          {title}
        </Text>
        <View>{icon}</View>
      </View>
      <View> {children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});
