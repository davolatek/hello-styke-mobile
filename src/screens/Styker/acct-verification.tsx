import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { PageLayout } from "../../../components/layout.tsx/page-layout";
import { Text, View } from "../../../components/customs";
import { HStack } from "native-base";
import {
  File,
  InstaIcon,
  TwitterIcon,
  WebIcon,
  WhatsappIcon,
} from "../../../assets/images/svg/icons";
import { Input } from "../../../components/input";
import { DEVICE_HEIGHT } from "../../constants";
import { Button } from "../../../components/button";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { PickImage } from "../../../components/customs/pick-image";

type ImageType = {
  uri: string;
  fileName: string | undefined | null;
  fileSize: number | undefined;
  height: number;
  width: number;
  mimeType?: string;
};

export const AccountVerification = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handlePickImage = (images: ImageType[]) => {
    console.log("Picked Images:", images);
  };
  console.log(selectedFiles, "selectedFiles");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <PageLayout title="Account Verification" goBack={true}>
        <ScrollView
          style={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View width="90%" marginX="auto">
            <Text>Social Media Links</Text>
            <View marginTop={8}>
              <HStack
                alignItems="flex-start"
                style={{ gap: 4 }}
                marginBottom={-4}
              >
                <WhatsappIcon />
                <Text
                  fontSize={14}
                  color="black.100"
                  fontFamily="Poppins-Medium"
                  marginTop={-2}
                >
                  WhatsApp
                </Text>
                <Text
                  marginLeft={-2}
                  marginTop={-2}
                  fontSize={13}
                  fontFamily="Poppins-Light"
                >
                  {" "}
                  (optional)
                </Text>
              </HStack>
              <Input placeholder="WhatsApp link" />
            </View>
            <View marginTop={7}>
              <HStack
                alignItems="flex-start"
                style={{ gap: 4 }}
                marginBottom={-4}
              >
                <TwitterIcon />
                <Text
                  fontSize={14}
                  color="black.100"
                  fontFamily="Poppins-Medium"
                  marginTop={-2}
                >
                  Twitter
                </Text>
                <Text
                  marginLeft={-2}
                  marginTop={-2}
                  fontSize={13}
                  fontFamily="Poppins-Light"
                >
                  {" "}
                  (optional)
                </Text>
              </HStack>
              <Input placeholder="Twitter link" />
            </View>
            <View marginTop={7}>
              <HStack
                alignItems="flex-start"
                style={{ gap: 4 }}
                marginBottom={-4}
              >
                <InstaIcon />
                <Text
                  fontSize={14}
                  color="black.100"
                  fontFamily="Poppins-Medium"
                  marginTop={-2}
                >
                  Instagram
                </Text>
                <Text
                  marginLeft={-2}
                  marginTop={-2}
                  fontSize={13}
                  fontFamily="Poppins-Light"
                >
                  {" "}
                  (optional)
                </Text>
              </HStack>
              <Input placeholder="Instagram link" />
            </View>
            <View marginTop={7}>
              <HStack
                alignItems="flex-start"
                style={{ gap: 4 }}
                marginBottom={-4}
              >
                <WebIcon />
                <Text
                  fontSize={14}
                  color="black.100"
                  fontFamily="Poppins-Medium"
                  marginTop={-2}
                >
                  Website
                </Text>
                <Text
                  marginLeft={-2}
                  marginTop={-2}
                  fontSize={13}
                  fontFamily="Poppins-Light"
                >
                  {" "}
                  (optional)
                </Text>
              </HStack>
              <Input placeholder="Website link" />
            </View>
            <View marginTop={7}>
              <HStack
                alignItems="flex-start"
                style={{ gap: 4 }}
                marginBottom={-4}
              >
                <Text
                  fontSize={14}
                  color="black.100"
                  fontFamily="Poppins-Medium"
                  marginTop={-2}
                >
                  Business Name
                </Text>
                <Text
                  marginLeft={-2}
                  marginTop={-2}
                  fontSize={13}
                  fontFamily="Poppins-Light"
                >
                  {" "}
                  (optional)
                </Text>
              </HStack>
              <Input placeholder="Mama’s Cleaning Hub" />
            </View>
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
                <PickImage
                  accessor={<Text>Select Images</Text>}
                  onPickImage={(e) => {
                    console.log(e, 'error');
                  }}
                />
              </View>
              {selectedFiles.map((elem) => (
                <Text fontSize={14} paddingTop={4}></Text>
              ))}
            </View>
            <View paddingBottom={100}>
              <Button title="Save" onPress={() => null} />
            </View>
          </View>
        </ScrollView>
      </PageLayout>
    </KeyboardAvoidingView>
  );
};
