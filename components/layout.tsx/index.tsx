import { ReactNode } from "react";
import { Arrow } from "../../assets/images/svg/icons/arrow";
import { DEVICE_HEIGHT } from "../../src/constants";
import { Text, View } from "../customs";
import { useTheme } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

type layoutProps = {
  title: string;
  goBack?: true;
  children: ReactNode;
};
export const Layout = ({ title, goBack, children }: layoutProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View
      paddingLeft={5}
      paddingRight={5}
      safeArea
      bgColor={colors.white[100]}
      width="100%"
      paddingBottom={10}
      minHeight={DEVICE_HEIGHT}
    >
      <View flexDirection="row" marginTop={10} alignItems="center">
        {goBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>
        ) : null}
        <Text
          color="black.100"
          fontFamily="Poppins-Medium"
          marginLeft={20}
          paddingTop={2}
          style={styles.text}
        >
          {title}
        </Text>
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
