import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "../../../components/customs";
import { Layout } from "../../../components/layout.tsx";
import { AuthenticationStackParamsList } from "../../navigation/onboarding.js";
import { Mobile } from "../../../assets/images/svg/img";
import { Input } from "../../../components/input";
import { Lock, Eye } from "../../../assets/images/svg/icons";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { DEVICE_HEIGHT } from "../../constants";
import { Button } from "../../../components/button";
import { SuccessModal } from "../../../components/modal/success-modal";

type CreateNewPasswordProps =
  NativeStackScreenProps<AuthenticationStackParamsList>;
export const CreateNewPassword = ({navigation}: CreateNewPasswordProps) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState<"text" | "password" | "">(
    "password"
  );
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };
  const [focusElement, setFocusElement] = useState<
    "New Password" | "Confirm Password" | ""
  >("");
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <Layout title="Create New Password" goBack={true}>
      <View height={DEVICE_HEIGHT}>
        <Mobile />
        <Text
          paddingTop={8}
          fontFamily="Poppins-Regular"
          color={colors.black[100]}
          textAlign="center"
          fontSize={16}
        >
          Enter your new password
        </Text>
        <View>
          <Input
            placeholder="New Password"
            type={showPassword === "password" ? "password" : "text"}
            onInputFocus={() => setFocusElement("New Password")}
            InputLeftElement={
              <View paddingLeft={5}>
                <Lock
                  color={
                    focusElement === "New Password"
                      ? colors.blue[100]
                      : colors.black[200]
                  }
                />
              </View>
            }
            InputRightElement={
              <TouchableOpacity
                style={{ paddingRight: 13 }}
                onPress={() => togglePasswordVisibility()}
              >
                {showPassword === "password" ? (
                  <Eye
                    color={
                      focusElement === "New Password"
                        ? colors.blue[100]
                        : colors.black[200]
                    }
                  />
                ) : (
                  <Entypo
                    name="eye"
                    size={20}
                    color={
                      focusElement === "New Password"
                        ? colors.blue[100]
                        : colors.black[200]
                    }
                  />
                )}
              </TouchableOpacity>
            }
          />
          <Input
            placeholder="Confirm Password"
            type={showPassword === "password" ? "password" : "text"}
            onInputFocus={() => setFocusElement("Confirm Password")}
            InputLeftElement={
              <View paddingLeft={5}>
                <Lock
                  color={
                    focusElement === "Confirm Password"
                      ? colors.blue[100]
                      : colors.black[200]
                  }
                />
              </View>
            }
            InputRightElement={
              <TouchableOpacity
                style={{ paddingRight: 13 }}
                onPress={() => togglePasswordVisibility()}
              >
                {showPassword === "password" ? (
                  <Eye
                    color={
                      focusElement === "Confirm Password"
                        ? colors.blue[100]
                        : colors.black[200]
                    }
                  />
                ) : (
                  <Entypo
                    name="eye"
                    size={20}
                    color={
                      focusElement === "Confirm Password"
                        ? colors.blue[100]
                        : colors.black[200]
                    }
                  />
                )}
              </TouchableOpacity>
            }
          />
        </View>
        <View style={{ position: "absolute", top: "67%", width: "100%" }}>
          <Button title="Continue" onPress={() => setShowModal(true)} />
        </View>
      </View>
      {
        <SuccessModal
        onPress={() => navigation.navigate('login')}
          buttonTitle="Login"
          title="Successful"
          text="Your account password has been reset"
          visible={showModal}
        />
      }
    </Layout>
  );
};
