import { Text, View } from "../../../components/customs";
import { AuthLayout } from "../../../components/auth-layout";
import { Input } from "../../../components/input";
import {
  Envelope,
  Lock,
  Eye,
  Facebook,
  Google,
} from "../../../assets/images/svg/icons";
import { useState } from "react";
import { Checkbox, HStack, ScrollView, useTheme, useToast } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "../../../components/button";
import { useFormik } from "formik";
import { AuthenticationStackParamsList } from "../../navigation/onboarding";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppThunkDispatch, useAppSelector } from "../../redux/store";
import { signUp } from "../../redux/auth/thunkAction";
import { signUpValidationSchema } from "../../utils/schema/auth";


type SignUpScreenProps = NativeStackScreenProps<
  AuthenticationStackParamsList,
  "sign_up"
>;
export const SignUp = ({ navigation }: SignUpScreenProps) => {
  const { colors } = useTheme();
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ authReducer }) => authReducer);
  const [showPassword, setShowPassword] = useState<"text" | "password" | "">(
    "password"
  );
  const [focusElement, setFocusElement] = useState<
    "Email" | "Password" | "Confirm_password" | ""
  >("");
  // const [isChecked, setIsChecked] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };
  const toast = useToast();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    setFieldError,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      const payload = {
        email: values.email,
        password: values.password,
      };
      await dispatch(signUp(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.show({
            description: "Account created successfully",
            placement: "top",
            variant: "solid",
          });
          navigation.navigate("login");
        } else {
          console.log(res?.payload?.data?.response);
          toast.show({
            description: res?.payload?.data?.response || "An error occured",
            placement: "top",
            variant: "solid",
          });
        }
      });
    },
  });
  return (
    <ScrollView>
      <AuthLayout title={`Create your \n Account`} goBack={false}>
        <View marginTop="55px">
          <Input
          onBlur={handleBlur('email')}
            placeholder="Email"
            onInputFocus={() => setFocusElement("Email")}
            onChangeText={handleChange("email")}
            err={!!errors.email && touched.email}
            errMsg={errors.email}
            InputLeftElement={
              <View paddingLeft={5}>
                <Envelope
                  color={
                    focusElement === "Email"
                      ? colors.blue[100]
                      : colors.black[200]
                  }
                />
              </View>
            }
          />
          <Input
          onBlur={handleBlur('password')}
            placeholder="Password"
            onChangeText={handleChange("password")}
            err={!!errors.password && touched.password}
            errMsg={errors.password}
            type={showPassword === "password" ? "password" : "text"}
            onInputFocus={() => setFocusElement("Password")}
            InputLeftElement={
              <View paddingLeft={5}>
                <Lock
                  color={
                    focusElement === "Password"
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
                      focusElement === "Password"
                        ? colors.blue[100]
                        : colors.black[200]
                    }
                  />
                ) : (
                  <Entypo
                    name="eye"
                    size={20}
                    color={
                      focusElement === "Password"
                        ? colors.blue[100]
                        : colors.black[200]
                    }
                  />
                )}
              </TouchableOpacity>
            }
          />
          <Input
          onBlur={handleBlur('password_confirmation')}
            placeholder="Confirm Password"
            onChangeText={handleChange("password_confirmation")}
            err={
              !!errors.password_confirmation && touched.password_confirmation
            }
            errMsg={errors.password_confirmation}
            type={showPassword === "password" ? "password" : "text"}
            onInputFocus={() => setFocusElement("Confirm_password")}
            InputLeftElement={
              <View paddingLeft={5}>
                <Lock
                  color={
                    focusElement === "Password"
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
                      focusElement === "Password"
                        ? colors.blue[100]
                        : colors.black[200]
                    }
                  />
                ) : (
                  <Entypo
                    name="eye"
                    size={20}
                    color={
                      focusElement === "Password"
                        ? colors.blue[100]
                        : colors.black[200]
                    }
                  />
                )}
              </TouchableOpacity>
            }
          />
        </View>
        <HStack
          marginTop={5}
          space={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></HStack>
        <Button title="Sign up" loading={loading} onPress={handleSubmit} />
        <View marginTop="65px" flexDirection="row" alignItems="center">
          <View
            borderBottomWidth={0.7}
            width="28%"
            marginRight="auto"
            borderBottomColor={colors.black[200]}
          />
          <Text
            fontFamily="Poppins-Regular"
            fontSize={15}
            color={colors.black[100]}
            lineHeight={30}
          >
            or continue with
          </Text>
          <View
            borderBottomWidth={0.7}
            width="28%"
            marginLeft="auto"
            borderBottomColor={colors.black[200]}
          />
        </View>
        <View
          style={{ gap: 17, marginTop: 34 }}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Facebook />
          <Google />
        </View>
        <View flexDirection="row" alignItems="center" justifyContent="center">
          <Text
            color={colors.black[100]}
            lineHeight={40}
            fontSize={14}
            marginTop={33}
            textAlign="center"
            fontFamily="Poppins-Regular"
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text
              color={colors.blue[100]}
              lineHeight={40}
              fontSize={14}
              marginTop={33}
              marginLeft={0.5}
              textAlign="center"
              fontFamily="Poppins-Regular"
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </AuthLayout>
    </ScrollView>
  );
};
