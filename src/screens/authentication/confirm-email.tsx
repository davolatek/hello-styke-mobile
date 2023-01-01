import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "../../../components/customs";
import { AuthenticationStackParamsList } from "../../navigation/onboarding";
import { Layout } from "../../../components/layout.tsx";

type ConfirmEmailScreenProps = NativeStackScreenProps<AuthenticationStackParamsList>;
export const ConfirmEmailScreen = ({ navigation }: ConfirmEmailScreenProps) => {
  return (
    <Layout title="Confirm Email" goBack={true}>
      <View>
        <Text
          width="90%"
          marginLeft="auto"
          marginRight="auto"
          textAlign="center"
          fontFamily='Poppins-Regular'
          fontSize={17}
          paddingTop={16}
        >
          Enter verification code sent to your email
        </Text>
      </View>
      
    </Layout>
  );
};
