import { FlatList } from "react-native";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { PaymentOptions } from "../../../../components/payment-options";
import { SelectCard } from "../../../../components/Cards/select-card";
import { DEVICE_HEIGHT } from "../../../constants";
import { useState } from "react";
import { Button } from "../../../../components/button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../navigation/Home-navigation";

type paymentMthodScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "payment"
>;
export const PaymentMethod = ({ navigation }: paymentMthodScreenProps) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <PageLayout color="white.300" title="Payment Method" goBack={true}>
      <View paddingX={5} paddingTop={5} height={DEVICE_HEIGHT-250}>
        <Text fontFamily="Poppins-Medium">Select your payment method</Text>
        <FlatList
          style={{ marginTop: 40 }}
          contentContainerStyle={{ gap: 24 }}
          renderItem={({ item }) => (
            <SelectCard
              selected={item.label === selected}
              onSelect={() => setSelected(item.label)}
              title={item.label}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          data={PaymentOptions}
        />
      </View>
      <View
        flexDirection="row"
        borderColor="white.200"
        borderTopRadius={20}
        borderWidth={1}
        paddingX={6}
        paddingBottom={8}
        paddingTop={4}
        height={150}
        backgroundColor="white.100"
      >
        <Button
          style={{ width: "100%" }}
          onPress={() => navigation.navigate('review')}
          title="Continue"
        ></Button>
      </View>
    </PageLayout>
  );
};
