import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../../../components/customs";
import { useAppSelector } from "../../../redux/store";
import { Notif, PersonDark } from "../../../../assets/images/svg/icons";
import { HStack, VStack } from "native-base";
import { PendingJobs } from "../../../../components/Cards/pending-jobs";
import { JobTab } from "../../../../components/bottom-tab/tab-list";
import { useState } from "react";
import { PopularServices } from "../../../../components/services";
import { OneTaskerJob } from "../../../../components/Cards/one-job";
import { DEVICE_WIDTH } from "../../../constants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StykerTaskerStackParamList } from "../../../navigation/styker/styker.tasker/styker.tasker.stack.navigation";

type TaskerHomeScreenProps = NativeStackScreenProps<
  StykerTaskerStackParamList,
  "tab"
>;
export const TaskerHome = ({ navigation }: TaskerHomeScreenProps) => {
  const { user } = useAppSelector(({ userReducer }) => userReducer);
  const [active, setActive] = useState(1);
  const [selected, setSelected] = useState(1);

  const handleOnActive = (id: number) => {
    setActive(id);
    setSelected(id);
  };
  const filteredServices = PopularServices.filter(
    (elem) =>
      elem.status.toLowerCase() === JobTab[selected - 1]?.name.toLowerCase()
  );
  const itemWidth =
    filteredServices?.length === 1 ? DEVICE_WIDTH - 40 : DEVICE_WIDTH * 0.75;
  return (
    <View>
      <ScrollView>
        <View
          height={180}
          width="100%"
          bgColor="blue.300"
          borderBottomLeftRadius={25}
          borderBottomRightRadius={25}
          paddingTop={70}
          paddingX={6}
        >
          <HStack justifyContent="space-between" alignItems="center">
            <HStack style={{ gap: 6 }}>
              {user?.imageUrl ? (
                <Image
                  source={{ uri: user?.imageUrl }}
                  width={50}
                  height={50}
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
              <VStack>
                <Text
                  fontSize={10}
                  color="white.100"
                  fontFamily="Poppins-Light"
                >
                  Welcome!
                </Text>
                <Text
                  fontSize={14}
                  marginTop={-1}
                  color="white.100"
                  fontFamily="Poppins-SemiBold"
                >
                  {user?.firstName} {user?.lastName}
                </Text>
              </VStack>
            </HStack>
            <View
              width={44}
              height={44}
              bgColor="grey.800"
              justifyContent="center"
              alignItems="center"
              borderRadius={50}
            >
              <Notif />
            </View>
          </HStack>
        </View>
        <View width={"100%"} paddingLeft={6} paddingTop={6}>
          <Text fontSize={16} color="black.100">
            Pending Jobs
          </Text>
          <View marginTop={5}>
            <FlatList
              horizontal
              data={PopularServices}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 20 }}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <OneTaskerJob
                  onPress={() => navigation.navigate("one_pending_job")}
                  width={itemWidth}
                  name={item.name}
                  service={item.service}
                  image={item.image as any}
                />
              )}
            />
          </View>
        </View>
        <View width="90%" marginX="auto" marginTop={6}>
          <Text fontSize={16} color="black.100">
            All Jobs
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View flexDirection="row" marginTop={5} style={styles.container}>
            {JobTab.map((elem) => (
              <TouchableOpacity
                key={elem.id}
                style={
                  active === elem.id ? styles.activeCategory : styles.category
                }
                onPress={() => handleOnActive(elem.id)}
              >
                <Text
                  color={active === elem.id ? "white.100" : "blue.100"}
                  marginTop={-1}
                  textAlign="center"
                  fontSize={12}
                  fontFamily="Poppins-Medium"
                >
                  {elem.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View marginTop={5}>
          <FlatList
            horizontal
            data={filteredServices}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 20, marginLeft: 20 }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <OneTaskerJob
                onPress={() => null}
                width={itemWidth}
                name={item.name}
                service={item.service}
                image={item.image as any}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  category: {
    borderColor: "#003E9A",
    borderWidth: 1,
    height: 30,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    paddingLeft: 6,
  },
  container: {
    columnGap: 10,
    marginLeft: 2,
    paddingHorizontal: 20,
  },
  activeCategory: {
    borderColor: "#003E9A",
    borderWidth: 1,
    height: 30,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003E9A",
    color: "#FFF",
  },
});
