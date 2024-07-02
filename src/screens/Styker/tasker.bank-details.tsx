import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Text, View } from "../../../components/customs";
import { PageLayout } from "../../../components/layout.tsx/page-layout";
import { Input } from "../../../components/input";
import { Select } from "../../../components/input/select";
import { Button } from "../../../components/button";
import { DEVICE_HEIGHT } from "../../constants";

export const TaskerBankDetails = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageLayout title="Bank Details" goBack={true}>
          <View
            width="90%"
            marginX="auto"
            style={{ height: DEVICE_HEIGHT - 320 }}
          >
            <Text>Account Information</Text>

            <View marginTop={4}>
              <Text
                color="black.100"
                fontSize={14}
                fontFamily="Poppins-Regular"
                marginBottom={-4}
              >
                Account Number
              </Text>
              <Input placeholder="" keyboardType="number-pad" />
            </View>
            <View marginTop={4}>
              <Text
                color="black.100"
                fontSize={14}
                fontFamily="Poppins-Regular"
                marginBottom={-4}
              >
                Bank
              </Text>
              <Select
                options={[
                  { label: "FirstBank", value: "1" },
                  { label: "Union Bank", value: "2" },
                  { label: "GT Bank", value: "3" },
                ]}
                onChange={() => null}
                placeholder="Select Bank"
              />
            </View>
            <View marginTop={4}>
              <Text
                color="black.100"
                fontSize={14}
                fontFamily="Poppins-Regular"
                marginBottom={-4}
              >
                Account Name
              </Text>
              <Input editable={false} placeholder="" />
            </View>
          </View>
          <View width="90%" marginX="auto">
            <Button title="Submit" onPress={() => null} />
          </View>
        </PageLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
