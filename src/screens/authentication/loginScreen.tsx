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
import {
  Checkbox,
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  useTheme,
  useToast,
} from "native-base";
import { TouchableOpacity, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "../../../components/button";
import { AppStackScreenProps } from "../../navigation/app.roots.types";
import { useFormik } from "formik";
import { signInValidationSchema } from "../../utils/schema/auth";
import { getUser } from "../../redux/user/thunk-action";
import { saveItem } from "../../../local-storage";
import {
  useAppSelector,
  useAppThunkDispatch,
} from "../../redux/store";
import { signIn } from "../../redux/auth/thunkAction";
import { AuthUser } from "../../redux/auth/types";
import { DEVICE_HEIGHT } from "../../constants";

export const Login = ({ navigation }: AppStackScreenProps<"onboarding">) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState<"text" | "password" | "">(
    "password"
  );
  const [focusElement, setFocusElement] = useState<"Email" | "Password" | "">(
    ""
  );
  //   const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppThunkDispatch();
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };
  const { loading } = useAppSelector(({ authReducer }) => authReducer);

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
    },
    validationSchema: signInValidationSchema,
    onSubmit: async (values) => {
      const payload = {
        email: values.email,
        password: values.password,
      };
      await dispatch(signIn(payload))
        .then(async (res) => {
          const userAuth: AuthUser = res.payload;

          if (res.meta.requestStatus === "fulfilled") {
            await saveItem("accessToken", userAuth.token);
            await dispatch(getUser(userAuth.userId)).then(async (res) => {
              if (res.meta.requestStatus === "fulfilled") {
                toast.show({
                  description: "Login successful",
                  placement: "top",
                  variant: "solid",
                });

                await saveItem("isLoggedIn", "true");

                // logout
                // await saveItem('isLoggedIn', '')
                if (userAuth.completed) {
                  navigation.navigate("tabs", {
                    screen: "Home",
                  });
                } else {
                  navigation.navigate("onboarding", {
                    screen: "complete_profile",
                  });
                }
              } else {
                console.log(res.payload, "pooioo");
              }
            });
          } else {
            toast.show({
              description: res?.payload || "An error occured",
              placement: "top",
              variant: "solid",
            });
          }
        })
        .catch((e) => {
          console.log(e, "catttt");
        });
    },
  });
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView showsVerticalScrollIndicator={false} >
        <AuthLayout title={`Login to your \n Account`} goBack={true}>
          <View marginTop="55px">
            <Input
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              err={!!errors.email && touched.email}
              errMsg={errors.email}
              placeholder="Email"
              onInputFocus={() => setFocusElement("Email")}
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
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
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
          </View>
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack marginTop={5} space={6}>
              <Checkbox
                fontFamily="Poppins-Medium"
                value="test"
                colorScheme="blue"
                accessibilityLabel="This is a dummy checkbox"
              >
                <Text
                  color="black.100"
                  fontSize={14.5}
                  fontFamily="Poppins-Medium"
                  lineHeight={35}
                >
                  {" "}
                  Remember me
                </Text>
              </Checkbox>
            </HStack>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("onboarding", {
                  screen: "forgot_password",
                  params: { number: "23455667" },
                })
              }
            >
              <Text
                color="blue.100"
                fontSize={14.5}
                fontFamily="Poppins-Medium"
                marginTop={5}
                lineHeight={35}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <Button loading={loading} title="Sign in" onPress={handleSubmit} />
          <View marginTop="65px" flexDirection="row" alignItems="center">
            <View
              borderBottomWidth={0.7}
              width="24%"
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
              width="24%"
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
          <View flexDirection="row" justifyContent="center">
            <Text
              color={colors.black[100]}
              lineHeight={40}
              fontSize={14}
              marginTop={33}
              textAlign="center"
              fontFamily="Poppins-Regular"
            >
              Don’t have an account?{" "}
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("onboarding", {
                  screen: "sign_up",
                })
                // navigation.navigate("home_stack", {
                //   screen: "location"
                // })
              }
            >
              <Text
                color={colors.blue[100]}
                lineHeight={40}
                fontSize={14}
                marginTop={33}
                textAlign="center"
                fontFamily="Poppins-Regular"
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </AuthLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
