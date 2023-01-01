import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "../../../../components/customs";
import { ProfileStackParamList } from "../../../navigation/profile";
import { FlatList, ScrollView, useTheme } from "native-base";
import { lady } from "../../../utils/assets";
import { Image, TouchableOpacity } from "react-native";
import { PickImage } from "../../../../components/customs/pick-image";
import { MenuIcon, Pencil } from "../../../../assets/images/svg/icons";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { Settings } from "../../../../components/settings";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { AppStackScreenProps } from "../../../navigation/app.roots.types";
type ProfileScreenProps = NativeStackScreenProps<
  ProfileStackParamList,
  "profile_screen"
>;
export const ProfileScreen = ({
  navigation,
}: AppStackScreenProps<"home_stack">) => {
  const { colors } = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PageLayout
        goBack={true}
        title="Profile"
        icon={
          <TouchableOpacity>
            <MenuIcon />
          </TouchableOpacity>
        }
      >
        <View position="relative" flexDirection="row" justifyContent="center">
          <View width={100} height={100}>
            <Image
              source={lady}
              style={{ width: 116, height: 116 }}
              borderRadius={100}
            />
          </View>

          <PickImage
            accessor={
              <View position="absolute" top={97} zIndex={100} right="50%">
                <Pencil />
              </View>
            }
          />
        </View>
        <View
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop={8}
        >
          <Text
            fontFamily="Poppins-SemiBold"
            fontSize={19}
            color={colors.black[100]}
          >
            Francis Zack
          </Text>
          <Text
            fontFamily="Poppins-Medium"
            fontSize={13}
            color={colors.black[300]}
            mt={-1}
          >
            franciszack@yahoo.com
          </Text>
        </View>

        <View paddingX={5} mt={10}>
          <FlatList
            data={Settings}
            contentContainerStyle={styles.container}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("home_stack", {
                    screen: item.page as any,
                  });
                }}
              >
                <View
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <View
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    style={{ gap: 12 }}
                  >
                    <View>{item.icon}</View>
                    <Text
                      fontSize={15}
                      fontFamily="Poppins-Regular"
                      color="black.100"
                    >
                      {item.name}
                    </Text>
                  </View>
                  <FontAwesome name="angle-right" size={18} color="black" />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </PageLayout>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
