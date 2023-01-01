import { ScrollView } from "native-base";
import { DEVICE_HEIGHT } from "../../src/constants";
import { Text, View } from "../customs";

type props = {
  name: string;
};
export const ListEmptyComponent = ({ name }: props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      height="100%"
      contentContainerStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text fontFamily="Poppins-Light" textAlign="center"fontSize={15} marginTop="50%">
        {name}
      </Text>
    </ScrollView>
  );
};
