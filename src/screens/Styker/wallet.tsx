import { HStack, KeyboardAvoidingView, VStack } from "native-base";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { PageLayout } from "../../../components/layout.tsx/page-layout";
import { Text, View } from "../../../components/customs";
import { walletImg } from "../../utils/assets";
import { useAppSelector } from "../../redux/store";
import { userReducer } from "../../redux/user";
import {
  AtmCard,
  Cup,
  Eye,
  HistoryIcon,
  Inflow,
  Lock,
  Naira,
  Outflow,
  WithdrawIcon,
} from "../../../assets/images/svg/icons";
import { Transactions } from "../../../components/services";
import { DEVICE_HEIGHT } from "../../constants";
import { useState } from "react";

export const Wallet = () => {
  const { user } = useAppSelector(({ userReducer }) => userReducer);
  const [show, setShow] = useState(false);
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <PageLayout title="Wallet" goBack={true}>
          <View width="95%" marginX="auto" height={235}>
            <ImageBackground
              imageStyle={styles.cardImage}
              source={walletImg}
              style={{ width: "100%", height: "100%" }}
            >
              <View paddingX={8} paddingY={6}>
                <View>
                  <Text
                    fontSize={16}
                    color="white.100"
                    fontFamily="Poppins-Medium"
                  >
                    Hi {user?.firstName}
                  </Text>
                  <HStack style={{ gap: 4 }} alignItems="center">
                    <Text
                      fontSize={13}
                      fontFamily="Poppins-Light"
                      color="white.500"
                    >
                      Available Balance
                    </Text>
                    <TouchableOpacity onPress={() => setShow(!show)}>
                      <View marginTop={2}>
                        <Eye color="rgba(255, 255, 255, 0.7)" />
                      </View>
                    </TouchableOpacity>
                  </HStack>
                  <HStack style={{ gap: 2 }}>
                    <Naira />
                    {show ? (
                      <Text
                        fontSize={28}
                        color="white.100"
                        textAlign="center"
                      >
                        {" "}
                        ****
                      </Text>
                    ) : (
                      <Text fontSize={17} color="white.100" textAlign="center">
                        {" "}
                        5,000
                      </Text>
                    )}
                  </HStack>
                </View>
                <HStack style={{ gap: 15, marginTop: 4 }} justifyContent="center">
                  <VStack justifyContent="center" alignItems="center">
                    <View
                      width={59}
                      height={59}
                      alignItems="center"
                      justifyContent="center"
                      backgroundColor="white.100"
                      borderRadius={50}
                    >
                      <AtmCard />
                    </View>
                    <Text fontSize={10} color="white.100">
                      Send
                    </Text>
                  </VStack>
                  <VStack>
                    <View
                      width={59}
                      height={59}
                      alignItems="center"
                      justifyContent="center"
                      backgroundColor="white.100"
                      borderRadius={50}
                    >
                      <WithdrawIcon />
                    </View>
                    <Text fontSize={10} color="white.100">
                      Withdraw
                    </Text>
                  </VStack>
                  <VStack justifyContent="center" alignItems="center">
                    <View
                      width={59}
                      height={59}
                      alignItems="center"
                      justifyContent="center"
                      backgroundColor="white.100"
                      borderRadius={50}
                    >
                      <HistoryIcon />
                    </View>
                    <Text fontSize={10} color="white.100">
                      History
                    </Text>
                  </VStack>
                  <VStack justifyContent="center" alignItems="center">
                    <View
                      width={59}
                      height={59}
                      alignItems="center"
                      justifyContent="center"
                      backgroundColor="white.100"
                      borderRadius={50}
                    >
                      <Cup />
                    </View>
                    <Text fontSize={10} color="white.100">
                      Refer & Earn
                    </Text>
                  </VStack>
                </HStack>
              </View>
            </ImageBackground>
          </View>
          <View width="90%" marginX="auto" marginTop={4}>
            <Text fontSize={16}>Recent Transactions</Text>
            <FlatList
              data={Transactions}
              contentContainerStyle={styles.container}
              renderItem={({ item }) => (
                <View>
                  <HStack justifyContent="space-between" alignItems="center">
                    <HStack style={{ gap: 6 }}>
                      <View
                        width={49}
                        height={49}
                        bgColor="grey.800"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius={50}
                      >
                        {item.type === "inflow" ? <Inflow /> : <Outflow />}
                      </View>
                      <VStack>
                        <Text
                          color="grey.500"
                          fontFamily="Poppins-Regular"
                          fontSize={13}
                        >
                          {item.date}
                        </Text>
                        <Text fontSize={16} color="black.100">
                          {item.name}
                        </Text>
                      </VStack>
                    </HStack>
                    <Text
                      color={item.type === "inflow" ? "blue.300" : "red.100"}
                      fontSize={12}
                    >
                      ₦{item.amount}
                    </Text>
                  </HStack>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </PageLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 30,
  },
  container: {
    gap: 25,
    marginTop: 20,
  },
});
