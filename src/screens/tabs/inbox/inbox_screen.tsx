import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import {
  Call,
  Circle,
  Incoming,
  Menu,
  MenuIcon,
  Missed,
  Outgoing,
  Search,
} from "../../../../assets/images/svg/icons";
import { HStack } from "native-base";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { useState } from "react";
import { ChatMessages } from "../../../../components/services";
import { ChatLayout } from "../../../../components/chat-layout";
import { InboxStackParamList } from "../../../navigation/inbox";
import { AppStackScreenProps } from "../../../navigation/app.roots.types";

type InboxScreenProps = NativeStackScreenProps<
  InboxStackParamList,
  "inbox_screen"
>;
export const InboxScreen = ({
  navigation,
}: AppStackScreenProps<"home_stack">) => {
  const [active, setActive] = useState("Chats");
  const data = ["Chats", "Calls"];
  const handleActive = (id: string) => {
    setActive(id);
  };

  const activeIndex = data.findIndex((item) => item === active);
  return (
    <PageLayout
      title="Inbox"
      goBack
      icon={
        <HStack justifyContent="center" alignItems="center" space={3}>
          <TouchableOpacity>
            <Search />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuIcon />
          </TouchableOpacity>
        </HStack>
      }
    >
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.tabs}
          keyExtractor={(item) => item}
          data={data}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity onPress={() => handleActive(item)}>
                <Text
                  textAlign="center"
                  fontSize={14}
                  fontFamily="Poppins-Medium"
                  color={active === item ? "blue.100" : "grey.300"}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            </>
          )}
        />
        <View style={styles.border} backgroundColor="grey.600">
          <View
            style={[
              styles.activeBorder,
              {
                left: `${(100 / data.length) * activeIndex}%`,
                width: `${100 / data.length}%`,
              },
            ]}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 30, marginBottom: 100 }}
        >
          {active === "Chats" ? (
            <FlatList
              contentContainerStyle={styles.content}
              keyExtractor={(item) => item.id.toString()}
              data={ChatMessages}
              renderItem={({ item }) => (
                <ChatLayout
                  onPress={() =>
                    navigation.navigate("home_stack", {
                      screen: "chat",
                    })
                  }
                  icon={
                    <View>
                      <View position="relative" width="100%">
                        <Circle />
                        <Text
                          position="absolute"
                          left={Platform.OS === 'ios' ? "25%" : "33%"}
                          top={Platform.OS === 'android' ? "-5%" : "-10%"}
                          fontSize={11}
                          color="white.100"
                        >
                          2
                        </Text>
                      </View>
                      <Text
                        fontSize={12}
                        color="grey.500"
                        fontFamily="Poppins-Light"
                      >
                        12:03
                      </Text>
                    </View>
                  }
                  image={item.image}
                  name={item.name}
                  message={
                    <Text
                      fontSize={12}
                      color="grey.500"
                      fontFamily="Poppins-Regular"
                    >
                      {item.message}
                    </Text>
                  }
                />
              )}
            />
          ) : (
            <FlatList
              contentContainerStyle={styles.content}
              keyExtractor={(item) => item.id.toString()}
              data={ChatMessages}
              renderItem={({ item }) => (
                <ChatLayout
                  icon={
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("home_stack", {
                          screen: "call_screen",
                        })
                      }
                    >
                      <Call />
                    </TouchableOpacity>
                  }
                  image={item.image}
                  name={item.name}
                  message={
                    <View mt={1} flexDirection="row" alignItems="center">
                      <View mt={1}>
                        {item.type === "Outgoing" ? (
                          <Outgoing />
                        ) : item.type === "Incoming" ? (
                          <Incoming />
                        ) : (
                          <Missed />
                        )}
                      </View>
                      <Text
                        fontSize={12}
                        color="grey.500"
                        fontFamily="Poppins-Regular"
                        ml={1}
                      >
                        {item.type} | {item.date}
                      </Text>
                    </View>
                  }
                />
              )}
            />
          )}
        </ScrollView>
      </View>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "15%",
    paddingLeft: "15%",
    textAlign: "center",
  },
  container: {
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    marginTop: 10,
  },
  border: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 3,
    top: 37,
  },
  activeBorder: {
    position: "absolute",
    bottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#003E9A",
  },
  content: {
    width: "98%",
    marginHorizontal: "1%",
    gap: 24,
  },
});
