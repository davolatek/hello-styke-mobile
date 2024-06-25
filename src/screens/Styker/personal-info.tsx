import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../../components/customs";
import { ScrollView } from "native-base";
import { Layout } from "../../../components/layout.tsx";
import { Input } from "../../../components/input";
import {
  File,
  Nigeria,
  Pencil,
  Person,
} from "../../../assets/images/svg/icons";
import { Button } from "../../../components/button";
import { PickImage } from "../../../components/customs/pick-image";
import { Select } from "../../../components/input/select";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

export const PersonalInfo = () => {
  const [fileSizeKB, setFileSizeKB] = useState(0);
  const [fileName, setFileName] = useState("");

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.assets) {
      const asset = result.assets[0];
      console.log(asset);
      setFileName(asset.name);
      if (asset.size) {
        const fileSizeBytes = asset.size;
        const fileSizeInKB = fileSizeBytes / 1024;
        setFileSizeKB(fileSizeInKB);
      }
      // setFieldValue("fileName", asset.name);
      // setFieldValue("fileUrl", "file");
      // setFieldValue("size", fileSizeKB.toString());
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout title="Personal Information" goBack={true}>
          <View
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <View position="relative">
              {/* <Image
                  source={{ uri: "" }}
                  width={136.105}
                  height={136.105}
                  borderRadius={100}
                /> */}
              <Person />
              <PickImage
                accessor={
                  <View position="absolute" top={-20} zIndex={100} right={3}>
                    <Pencil />
                  </View>
                }
                onPickImage={(e) => {
                  console.log(e);
                  //   setFieldValue("img", e.uri);
                }}
              />
            </View>
            <View width="97%" marginLeft="auto" marginRight="auto">
              <Input
                placeholder="First Name"
                //   onChangeText={handleChange("firstName")}
                //   onBlur={handleBlur("firstName")}
                //   err={!!errors.firstName && touched.firstName}
                //   errMsg={errors.firstName}
                width="100%"
                //   value={values.firstName}
              />
              <Input
                placeholder="Last Name"
                // onChangeText={handleChange("lastName")}
                // onBlur={handleBlur("lastName")}
                // err={!!errors.lastName && touched.lastName}
                // errMsg={errors.lastName}
                width="100%"
                // value={values.lastName}
              />
              <Input
                // err={!!errors.dob && touched.dob}
                // errMsg={errors.dob}
                // onBlur={handleBlur("dob")}
                // placeholder="Date of Birth"
                width="100%"
                // onSelectDate={(value) => {
                //   console.log(value);
                //   setFieldValue("dob", value.toLocaleDateString());
                // }}
                // value={values.dob ?? "Select Date"}
                input_type="date"
              />
              <Input
                placeholder="Email"
                // onChangeText={handleChange("email")}
                // onBlur={handleBlur("email")}
                // err={!!errors.email && touched.email}
                // errMsg={errors.email}
                width="100%"
                // value={values.email}
              />
              <Input
                InputLeftElement={
                  <View paddingLeft={4}>
                    <Nigeria />
                  </View>
                }
                // onChangeText={handleChange("phoneNumber")}
                // onBlur={handleBlur("phoneNumber")}
                // err={!!errors.phoneNumber && touched.phoneNumber}
                // errMsg={errors.phoneNumber}
                keyboardType="number-pad"
                placeholder="Phone Number"
                // value={values.phoneNumber}
              />
              <Select
                onChange={() => null}
                options={[
                  {
                    label: "Male",
                    value: "1",
                  },
                  {
                    label: "Female",
                    value: "2",
                  },
                ]}
                placeholder="Select gender"
              />
              <Input
                placeholder="Address"
                // onChangeText={handleChange("address")}
                // onBlur={handleBlur("address")}
                // err={!!errors.address && touched.address}
                // errMsg={errors.address}
                width="100%"
                // value={values.address}
              />
              <View marginTop={5}>
                <Text
                  fontSize={14}
                  fontFamily="Poppins-Regular"
                  color="black.100"
                >
                  Upload CV/Resume
                </Text>

                <View
                  marginTop={2}
                  width="100%"
                  height={150}
                  bg="white.400"
                  borderRadius={10}
                  justifyContent="center"
                  alignItems="center"
                >
                  <TouchableOpacity
                    onPress={() => pickDocument()}
                    style={{ alignItems: "center" }}
                  >
                    <File />
                    <Text
                      fontSize={14}
                      color="black.200"
                      fontFamily="Poppins-Regular"
                    >
                      Browse File
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text fontSize={14} paddingTop={4}>
                  {fileName}
                </Text>
              </View>
              <View paddingBottom={30}>
                <Button title="Update" onPress={() => null} />
              </View>
            </View>
          </View>
        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
