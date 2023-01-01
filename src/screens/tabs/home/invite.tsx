import { FlatList } from "native-base";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Settings, friendList, notificationList } from "../../../../components/settings";
import { FontAwesome } from "@expo/vector-icons";
import { Switch } from "react-native-switch";
import { Button } from "../../../../components/button";

export const Invite = () => {
  return (
    <PageLayout goBack={true} title="Invite Friends">
      <View paddingX={5} mt={10}>
        <FlatList
          data={friendList}
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
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems='flex-start'
                >
                  <Text
                    fontSize={15}
                    fontFamily='Poppins-Medium'
                    color="black.100"
                  >
                    {item.name}
                  </Text>
                  <Text color='black.300' fontSize={12} >{item.phone}</Text>
                </View>
                <View width="25%">
                  <Button
                  height={10}
                    style={{ backgroundColor: "blue.100" }}
                    title="Invite"
                    onPress={() => null}
                    textColor="white.100"
                    fontSize={12}
                  />
                </View>
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
