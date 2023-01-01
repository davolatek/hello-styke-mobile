import { FlatList } from "native-base";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { TouchableOpacity, StyleSheet } from "react-native";
import {
  Settings,
  notificationList,
  security,
} from "../../../../components/settings";
import { FontAwesome } from "@expo/vector-icons";
import { Switch } from "react-native-switch";

export const Security = () => {
  return (
    <PageLayout goBack={true} title="Settings">
      <View paddingX={5} mt={10}>
        <FlatList
          data={security}
          contentContainerStyle={styles.container}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
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
                  <Text
                    fontSize={15}
                    fontFamily="Poppins-Regular"
                    color="black.100"
                  >
                    {item.name}
                  </Text>
                </View>
                {item.id !== 3 ? (
                  <View>
                    <Switch
                      value={true}
                      onValueChange={(val) => console.log(val)}
                      disabled={false}
                      activeText={"On"}
                      inActiveText={"Off"}
                      circleSize={24}
                      barHeight={26}
                      circleBorderActiveColor="#003E9A"
                      backgroundActive={"#003E9A"}
                      backgroundInactive={"gray"}
                      circleActiveColor={"white"}
                      circleInActiveColor={"white"}
                      changeValueImmediately={true}
                      innerCircleStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      outerCircleStyle={{}}
                      renderActiveText={false}
                      renderInActiveText={false}
                      switchLeftPx={2}
                      switchRightPx={2}
                      switchWidthMultiplier={2}
                      switchBorderRadius={30}
                    />
                  </View>
                ) : (
                  <FontAwesome name="angle-right" size={18} color="black" />
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
