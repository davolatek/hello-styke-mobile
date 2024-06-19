import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamsList } from "../../navigation/onboarding";
import { View, Text } from "../../../components/customs";
import { Layout } from "../../../components/layout.tsx";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { useEffect, useMemo, useRef, useState } from "react";
import { KeyboardAvoidingView, Pressable, StyleSheet } from "react-native";
import { Button } from "../../../components/button";
import { DEVICE_HEIGHT } from "../../constants";
import { SuccessModal } from "../../../components/modal/success-modal";
import { AppStackScreenProps } from "../../navigation/app.roots.types";
import { useRoute } from "@react-navigation/native";
import { useAppSelector, useAppThunkDispatch } from "../../redux/store";
import { useToast } from "native-base";
import { requestOtp, verifyOtp } from "../../redux/auth/thunkAction";

type OtpScreenProps = NativeStackScreenProps<
  AuthenticationStackParamsList,
  "otp_screen"
>;
export const OtpScreen = ({
  navigation,
}: AppStackScreenProps<"onboarding">) => {
  const route = useRoute<any>();
  const ref = useRef();
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState<number>(60);
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppThunkDispatch();
  const toast = useToast();
  const { user } = useAppSelector(({ userReducer }) => userReducer);

  const handleVerifyOtp = async () => {
    try {
      await dispatch(verifyOtp(code)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.show({
            description: "Profile completed successfully",
            placement: "top",
            variant: "solid",
          });
          setShowModal(true);
        } else {
          console.log(res?.payload?.data?.response);
          toast.show({
            description: res?.payload?.data?.response || "An error occured",
            placement: "top",
            variant: "solid",
          });
        }
      });
    } catch (error) {
      console.error("OTP Verification failed", error);
    }
  };
  const handleRequestOtp = async () => {
    try {
      await dispatch(requestOtp(user?.email)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.show({
            description: "OTP sent successfully",
            placement: "top",
            variant: "solid",
          });
          setCountdown(60);
        } else {
          console.log(res?.payload?.data?.response);
          toast.show({
            description: res?.payload?.data?.response || "An error occurred",
            placement: "top",
            variant: "solid",
          });
        }
      });
    } catch (error) {
      console.error("Request OTP failed", error);
    }
  };
  const memoized_time = useMemo(() => {
    return (
      <Pressable
        onPress={handleRequestOtp}
        disabled={countdown !== 0}
        style={{ opacity: countdown !== 0 ? 0.5 : 1 }}
      >
        <Text fontFamily="Poppins-Regular" color="blue.100" fontSize={18}>
          Resend code in 0:{countdown < 10 && 0}
          {countdown}
        </Text>
      </Pressable>
    );
  }, [countdown]);

  useEffect(() => {
    if (countdown !== 0) {
      setTimeout(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
    }
  }, [countdown]);
  return (
    <Layout
      goBack={true}
      title={
        route.params.type === "forgot password"
          ? "Forgot Password"
          : "Confirm Email"
      }
    >
      <KeyboardAvoidingView>
        <View height={DEVICE_HEIGHT}>
          <View
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            paddingTop={15}
          >
            <Text
              fontFamily="Poppins-Regular"
              color="black.100"
              fontSize={16}
              alignItems="center"
              textAlign="center"
            >
              {route.params.type === "forgot password"
                ? route.params.number
                  ? `Code has been sent to\n${route.params.number.slice(
                      0,
                      6
                    )}*****${route.params.number.slice(11)}`
                  : "Phone number is undefined"
                : "Enter verification code sent to your email"}
            </Text>
          </View>
          <View
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={70}
            style={{ gap: 40 }}
          >
            <SmoothPinCodeInput
              ref={ref}
              value={code}
              cellSpacing={25}
              cellStyle={styles.cell_box}
              textStyle={styles.textStyle}
              cellStyleFocused={styles.focused}
              onTextChange={(code: string) => setCode(code)}
              onFulfill={() => null}
            />
            {memoized_time}
          </View>

          <View style={{ width: "100%", top: "65%", position: "absolute" }}>
            {" "}
            <Button
              title={
                route.params.type === "forgot password" ? "Verify" : "Continue"
              }
              onPress={() =>
                route.params.type === "forgot password"
                  ? navigation.navigate("onboarding", {
                      screen: "create_new_password",
                    })
                  : handleVerifyOtp()
              }
            />
          </View>
        </View>
        {
          <SuccessModal
            onPress={() => {
              navigation.navigate("onboarding", {
                screen: "login",
              });
              setShowModal(false);
            }}
            buttonTitle="Login"
            title="Verified"
            text="Email verification was successful"
            visible={showModal}
          />
        }
      </KeyboardAvoidingView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  cell_box: {
    borderRadius: 10,
    height: 76,
    width: 69,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.20)",
    backgroundColor: "rgba(217, 217, 217, 0.20)",
  },
  textStyle: {
    fontFamily: "Poppins-Medium",
    color: "#000",
    fontSize: 30,
  },
  focused: {
    borderColor: "#003E9A",
    borderWidth: 2,
  },
});
