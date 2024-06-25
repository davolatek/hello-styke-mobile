import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { PageLayout } from "../../../components/layout.tsx/page-layout";
import { Text, View } from "../../../components/customs";
import { useState } from "react";
import { HStack } from "native-base";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { File } from "../../../assets/images/svg/icons";
import * as DocumentPicker from "expo-document-picker";
import { DEVICE_HEIGHT } from "../../constants";

export const GuarantorForm = () => {
  const [active, setActive] = useState(1);
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
      }
    }
  };
  const handleActive = (id: number) => {
    setActive(id);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView
        style={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <PageLayout goBack title="Guarantors Form">
          <View width="90%" marginX="auto">
            {active === 1 && (
              <View>
                <Text fontSize={16}>First Guarantor</Text>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Occupation" />
                <Input placeholder="Address" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Email" />
                <View marginTop={5}>
                  <Text
                    fontSize={14}
                    fontFamily="Poppins-Regular"
                    color="black.100"
                  >
                    Government Issued Document
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
              </View>
            )}
            {active === 2 && (
              <View>
                <Text fontSize={16}>Second Guarantor</Text>
                <View>
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                  <Input placeholder="Occupation" />
                  <Input placeholder="Address" />
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Email" />
                  <View marginTop={5}>
                    <Text
                      fontSize={14}
                      fontFamily="Poppins-Regular"
                      color="black.100"
                    >
                      Government Issued Document
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
                </View>
              </View>
            )}
          </View>
        </PageLayout>
        <View
          width="100%"
          marginX="auto"
          bgColor="white.100"
          paddingX={5}
          paddingBottom={50}
        >
          <Button
            title={active === 1 ? "Next" : "Save"}
            onPress={() => handleActive(active < 2 ? active + 1 : active)}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
