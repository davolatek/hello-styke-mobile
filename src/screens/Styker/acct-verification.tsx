import { KeyboardAvoidingView, ScrollView } from "react-native";
import { PageLayout } from "../../../components/layout.tsx/page-layout";
import { Text, View } from "../../../components/customs";

export const AccountVerification = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <PageLayout title="Account Verification" goBack={true}>
          <View width='90%' marginX='auto'>
            <Text>Social Media Links</Text>
          </View>
        </PageLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
