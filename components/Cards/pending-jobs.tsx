import { FlatList, Image } from "react-native";
import { Text, View } from "../customs";
import { PopularServices } from "../services";
import { DEVICE_WIDTH } from "../../src/constants";
import { OneTaskerJob } from "./one-job";
import { useNavigation } from "@react-navigation/native";
import { StykerTaskerStackParamList } from "../../src/navigation/styker/styker.tasker/styker.tasker.stack.navigation";

export const PendingJobs = () => {
  const itemWidth =
    PopularServices?.length === 1 ? DEVICE_WIDTH - 80 : DEVICE_WIDTH * 0.75;
  const navigation = useNavigation<StykerTaskerStackParamList>();
  return (
    <View marginTop={5}>
      <FlatList
        horizontal
        data={PopularServices}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
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
  );
};
