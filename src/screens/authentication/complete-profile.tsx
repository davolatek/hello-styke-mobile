import { View } from "../../../components/customs";
import { Layout } from "../../../components/layout.tsx";
import { Nigeria, Pencil, Person } from "../../../assets/images/svg/icons";
import { Input } from "../../../components/input";
import { KeyboardAvoidingView, ScrollView } from "native-base";
import { Button } from "../../../components/button";
import { AppStackScreenProps } from "../../navigation/app.roots.types";
import { AuthenticationStackParamsList } from "../../navigation/onboarding";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PickImage } from "../../../components/customs/pick-image";
import { useFormik } from "formik";
import { Image, Platform } from "react-native";
import { ProfilevalidationSchema } from "../../utils/schema/profile-validation";
import { useAppThunkDispatch, useAppSelector } from "../../redux/store";
import { uploadPicture, completeprofile } from "../../redux/auth/thunkAction";
import { useToast } from "native-base";
import { useEffect } from "react";
import { setUser } from "../../redux/user";

type CompleteProfileScreenProps =
  NativeStackScreenProps<AuthenticationStackParamsList>;
export const CompleteProfileScreen = ({ navigation }: CompleteProfileScreenProps) => {
  const toast = useToast();
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ authReducer }) => authReducer);

  const { user } = useAppSelector(({ userReducer }) => userReducer);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormik({
    initialValues: {
      img: "",
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: ProfilevalidationSchema,
    onSubmit: async (values) => {
      const payload = {
        ...values,
        userId: user.id,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
      };
      const formData = new FormData();
      formData.append("mimeType", "image/*");
      formData.append("multipartFile", values.img);
      formData.append("userId", user.id);
       await dispatch(uploadPicture(formData)).then((res) => {
        console.log(res)
       })
      console.log(payload);
      await dispatch(completeprofile(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.show({
            description: "Profile updated successfully",
            variant: "solid",
            placement: "top",
          });
          navigation.navigate("otp_screen", {
            email: values.email,
            type: "confirm email",
          });
        } else {
          console.log(res?.payload?.data);
          toast.show({
            description: res?.payload?.data?.response || "An error occured",
            placement: "top",
            variant: "solid",
          });
        }
      });
    },
  });
  // navigation.navigate("onboarding", {
  //   screen: "otp_screen",
  //   params: {
  //     email: "uuu",
  //     type: "confirm email",
  //   },
  // })

  useEffect(() => {
    if (Object.values(user || {}).length) {
      for (let ele in user) {
        setFieldValue(ele, (user as any)[ele]);
      }
    }
  }, [user]);
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout title="My Profile" goBack={true}>
          <View
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <View position="relative">
              {values.img ? (
                <Image
                  source={{ uri: values.img }}
                  width={136.105}
                  height={136.105}
                  borderRadius={100}
                />
              ) : (
                <Person />
              )}
              <PickImage
                accessor={
                  <View position="absolute" top={-20} zIndex={100} right={3}>
                    <Pencil />
                  </View>
                }
                onPickImage={(e) => {
                  console.log(e);
                  setFieldValue("img", e.uri);
                }}
              />
            </View>
            <View width="97%" marginLeft="auto" marginRight="auto">
              <Input
                placeholder="First Name"
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                err={!!errors.firstName && touched.firstName}
                errMsg={errors.firstName}
                width="100%"
                value={values.firstName}
              />
              <Input
                placeholder="Last Name"
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                err={!!errors.lastName && touched.lastName}
                errMsg={errors.lastName}
                width="100%"
                value={values.lastName}
              />
              <Input
                err={!!errors.dob && touched.dob}
                errMsg={errors.dob}
                onBlur={handleBlur("dob")}
                placeholder="Date of Birth"
                width="100%"
                onSelectDate={(value) => {
                  console.log(value);
                  setFieldValue("dob", value.toLocaleDateString());
                }}
                value={values.dob ?? "Select Date"}
                input_type="date"
              />
              <Input
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                err={!!errors.email && touched.email}
                errMsg={errors.email}
                width="100%"
                value={values.email}
              />
              <Input
                InputLeftElement={
                  <View paddingLeft={4}>
                    <Nigeria />
                  </View>
                }
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                err={!!errors.phoneNumber && touched.phoneNumber}
                errMsg={errors.phoneNumber}
                keyboardType="number-pad"
                placeholder="Phone Number"
                value={values.phoneNumber}
              />
              <Input
                placeholder="Address"
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                err={!!errors.address && touched.address}
                errMsg={errors.address}
                width="100%"
                value={values.address}
              />
              <View paddingBottom={30}>
                <Button
                  loading={loading}
                  title="Continue"
                  onPress={() => handleSubmit()}
                />
              </View>
            </View>
          </View>
        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
