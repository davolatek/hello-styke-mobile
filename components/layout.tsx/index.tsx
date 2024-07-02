import { ReactNode } from "react";
import { Arrow } from "../../assets/images/svg/icons/arrow";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../src/constants";
import { Text, View } from "../customs";
import { useTheme } from "native-base";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
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
      width={DEVICE_WIDTH}
      paddingBottom={10}
      minHeight={DEVICE_HEIGHT}
    >
      <View
        flexDirection="row"
        justifyContent="space-between"
        marginTop={10}
        alignItems="center"
        width="100%"
      >
        {goBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>
        ) : null}
        <Text
          width="80%"
          color="black.100"
          fontFamily="Poppins-Medium"
          marginLeft={20}
          paddingTop={6}
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
