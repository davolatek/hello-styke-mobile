import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "../../../../components/customs";
import { HomeStackParamList } from "../../../navigation/Home-navigation";
import { Services } from "../../../../components/services";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { ReactNode, useState } from "react";
import { Service } from "../../../../components/Cards/service";

type AllServicesScreenProps = NativeStackScreenProps<HomeStackParamList, 'all_services'>;
export const AllServicesScreen = ({ navigation }: AllServicesScreenProps) => {
  const [columns, setColumns] = useState(3);

  return (
    <PageLayout
      title="All Services"
      goBack={true}
      icon={
        <MaterialCommunityIcons
          name="dots-horizontal-circle-outline"
          size={26}
          color="black"
        />
      }
    >
      <FlatList
        data={Services}
        numColumns={columns}
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Service
            onPress={() =>
              navigation.navigate("one_service", {
                name: item.name,
              })
            }
            name={item.name}
            image={item.image}
            id={item.id}
          />
        )}
      />
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
    columnGap: 10,
    paddingTop: 20,
  },
});
