import { HStack } from "native-base";
import {
  ArrowLocation,
  CloseOutlined,
  NotificationOutlined,
  Search,
} from "../../../assets/images/svg/icons";
import { Text, View } from "../../../components/customs";
import { Input } from "../../../components/input";
import { PageLayout } from "../../../components/layout.tsx/page-layout";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "../../../components/button";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants";
import { InfoContent } from "../../../components/info";
import { useState } from "react";
import { AppStackScreenProps } from "../../navigation/app.roots.types";
import { RootTabNavigationProp } from "../../navigation/bottom-tab.navigations";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StykerTaskerStackParamList } from "../../navigation/styker/styker.tasker/styker.tasker.stack.navigation";


type JobFormScreenProps = NativeStackScreenProps<
  StykerTaskerStackParamList,
  "job_form"
>;
export const EnterLocationScreen = ({
  navigation,
}: JobFormScreenProps) => {
  const [visible, setVisible] = useState(false);
  // const navigation = useNavigation<RootTabNavigationProp<'profile'>>();
  return (
    <>
      <PageLayout title="Enter Your Location" goBack>
        <View width="88%" marginX="auto">
          <Input
            InputLeftElement={
              <View marginLeft={3}>
                <Search color="#003E9A" />
              </View>
            }
            InputRightElement={
              <TouchableOpacity>
                <View marginRight={3}>
                  <CloseOutlined />
                </View>
              </TouchableOpacity>
            }
          />
          <TouchableOpacity>
            <HStack alignItems="center" marginTop={4} style={{ gap: 6 }}>
              <ArrowLocation />
              <Text
                fontSize={14}
                fontFamily="Poppins-SemiBold"
                color="blue.100"
              >
                Use my current location
              </Text>
            </HStack>
          </TouchableOpacity>
          <View width="100%" position="absolute" top={DEVICE_HEIGHT - 300}>
            <Button title="Done" onPress={() => setVisible(true)} />
          </View>
        </View>
      </PageLayout>
      <Modal transparent={false} visible={visible}>
        <View style={styles.modalContainer}>
          <InfoContent
            buttonTitle="Allow Notification"
            link="Maybe Later"
            title="Enable Notification"
            onLinkPress={() => {
              setVisible(false);
            }}
            text="Allow notification to receive real-time updates"
            icon={
              <>
                <NotificationOutlined />
              </>
            }
            onPress={() => {
              setVisible(false);
              navigation.navigate('tab', {
                screen: 'profile'
              });
            }}
          />
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    position: "relative",
    backgroundColor: "white",
    justifyContent: "center",
  },
});
