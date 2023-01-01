import { ReactNode } from "react";
import { Arrow } from "../../assets/images/svg/icons/arrow";
import { DEVICE_HEIGHT } from "../../src/constants";
import { Text, View, ViewProps } from "../customs";
import { useTheme } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

type layoutProps = {
  title: string;
  goBack?: true;
  icon?: ReactNode;
  children: ReactNode;
};
export const PageLayout = ({ title, goBack, children, icon }: layoutProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View
      paddingLeft={5}
      paddingRight={5}
      safeArea
      bgColor={colors.white[100]}
      width="100%"
      height={DEVICE_HEIGHT}
    >
      <View
        flexDirection="row"
        marginTop={10}
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
