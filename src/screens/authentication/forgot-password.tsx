import { Laptop } from "../../../assets/images/svg/img";
import { Text, View } from "../../../components/customs";
import { Layout } from "../../../components/layout.tsx";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, useTheme } from "native-base";
import { useState } from "react";
import { Button } from "../../../components/button";
import { comment, message } from "../../utils/assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamsList } from "../../navigation/onboarding";

const details = [
  {
    mode: "via SMS",
    code: "+234 9034087023",
    img: comment,
  },
  {
    mode: "via Email",
    code: "zackorjiboy@yahoo.com",
    img: message,
  },
];
type forgotpasswordprops = NativeStackScreenProps<AuthenticationStackParamsList>;
export const ForgotPassword = ({ navigation }: forgotpasswordprops) => {
  const { colors } = useTheme();
  const [active, setActive] = useState<number>(0);

  const handleActive = (id: number) => {
    setActive(id);
  };
  return (
    <Layout goBack={true} title="Forgot Password">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Laptop />
          <Text
            paddingTop={7}
            textAlign="center"
            color="black.100"
            fontFamily="Poppins-Regular"
            fontSize={16}
          >
            {` Select the details to receive your \n reset pin`}
          </Text>
          {details.map((elem, id) => (
            <TouchableOpacity key={id} onPress={() => handleActive(id)}>
              <View
                style={styles.border}
                flexDirection={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                bgColor={
                  active === id ? colors.white[100] : (colors as any).gray[200]
                }
                borderColor={
                  active === id ? colors.blue[100] : (colors as any).gray[100]
                }
              >
                <View style={styles.rounded} bgColor={colors.pink[100]}>
                  <Image
                    style={{ width: 34, height: 34 }}
                    alt=""
                    source={elem.img}
                  />
                </View>
                <View marginLeft={5}>
                  <Text
                    fontFamily="Poppins-Regular"
                    fontSize={12}
                    color={(colors as any).grey[300]}
                  >
                    {elem.mode}
                  </Text>
                  <Text fontFamily="Poppins-Medium" fontSize={13} color="black.100">
                    {elem.mode === "via SMS"
                      ? elem.code
                          .slice(0, 8)
                          .concat(" *** ** ")
                          .concat(elem.code.slice(13))
                      : elem.code
                          .slice(0, 4)
                          .concat("********")
                          .concat(elem.code.slice(11))}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View marginTop={-10} width="auto" paddingBottom={20}>
            {" "}
            <Button title="Continue" onPress={() => navigation.navigate('otp_screen', {
              number: '+2348064667542',
              type: 'forgot password'
            })} />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  rounded: {
    width: 70,
    height: 70,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    width: "auto",
    height: 127,
    borderRadius: 18,
    borderWidth: 2,
    borderStyle: "solid",
    marginTop: 30,
    padding: 20,
  },
});
