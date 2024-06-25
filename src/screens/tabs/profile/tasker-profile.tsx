import { HStack, VStack } from "native-base";
import {
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  PersonDark,
} from "../../../../assets/images/svg/icons";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useAppSelector } from "../../../redux/store";
import Svg, { Circle } from "react-native-svg";
import { FontAwesome } from "@expo/vector-icons";
import { TaskerSettings } from "../../../../components/settings";
import { AppStackScreenProps } from "../../../navigation/app.roots.types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StykerTaskerStackParamList } from "../../../navigation/styker/styker.tasker/styker.tasker.stack.navigation";

export const TaskerProfile = ({
  navigation,
}: AppStackScreenProps<"styker">) => {
  const { user } = useAppSelector(({ userReducer }) => userReducer);
  const radius = (48 - 5) / 2;
  const circumference = radius * 2 * Math.PI;
  const progressOffset = circumference - (70 / 100) * circumference;
  return (
    <View style={{ flex: 1 }}>
      <PageLayout title="Your Profile" goBack={true}>
        <ScrollView
          style={{ marginBottom: 170 }}
          showsVerticalScrollIndicator={false}
        >
          <View width={"90%"} marginX="auto">
            <View
              width="100%"
              height={114}
              justifyContent="center"
              borderRadius={9}
              bg="blue.300"
            >
              <View position="absolute" top={-55} left={-20}>
                <Ellipse5 />
              </View>
              <HStack width="90%" marginX="auto" justifyContent="space-between">
                <HStack style={{ gap: 8 }}>
                  <View>
                    {user?.imageUrl ? (
                      <Image
                        source={{ uri: user?.imageUrl }}
                        width={59.105}
                        height={59.105}
                        borderRadius={100}
                      />
                    ) : (
                      <View
                        width={50}
                        height={50}
                        borderWidth={1}
                        borderRadius={50}
                        borderColor="black"
                      >
                        <PersonDark />
                      </View>
                    )}
                  </View>
                  <VStack>
                    <Text
                      fontSize={16}
                      fontFamily="Poppins-SemiBold"
                      color="white.100"
                    >
                      {user?.firstName} {user?.lastName}
                    </Text>
                    <Text
                      fontSize={13}
                      fontFamily="Poppins-Light"
                      color="white.100"
                      marginTop={-1}
                    >
                      View Profile
                    </Text>
                  </VStack>
                </HStack>
                <View
                  width={44}
                  height={44}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Svg height={48} width={48}>
                    <Circle
                      stroke="white"
                      fill="none"
                      cx={48 / 2}
                      cy={48 / 2}
                      r={radius}
                      strokeWidth={5}
                    />
                    <Circle
                      stroke={"#FFC107"}
                      fill="none"
                      cx={48 / 2}
                      cy={48 / 2}
                      r={radius}
                      strokeWidth={5}
                      strokeDasharray={`${circumference} ${circumference}`}
                      strokeDashoffset={progressOffset}
                      strokeLinecap="round"
                    />
                  </Svg>
                  <Text
                    position="absolute"
                    fontSize={11}
                    color={"white.100"}
                    fontFamily="Poppins-SemiBold"
                    textAlign="center"
                  >
                    {`${70}%`}
                  </Text>
                </View>
              </HStack>
            </View>
            <View paddingX={5} mt={10}>
              <FlatList
                data={TaskerSettings}
                contentContainerStyle={styles.container}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("styker", {
                        screen: "tasker",
                        params: {
                          screen: item?.page as any,
                        },
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
          </View>
        </ScrollView>
      </PageLayout>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 25,
  },
});
