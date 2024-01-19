import { VStack } from "native-base";
import { Success } from "../../assets/images/svg/img/success";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../src/constants";
import { View, Text } from "../customs";
import { StyleSheet, Modal } from "react-native";
import { Button } from "../button";

type props = {
  visible: boolean;
  title?: string;
  text?: string;
  buttonTitle:string
  onPress: () => void
};
export const SuccessModal = ({ visible, text, title, buttonTitle, onPress }: props) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <VStack
          justifyContent="center"
          alignItems="center"
          style={styles.modal}
        >
          <Success />
          <Text
            fontFamily="Poppins-SemiBold"
            color="blue.100"
            paddingTop={6}
            fontSize={22}
          >
            {title}
          </Text>
          <Text
            textAlign="center"
            width="80%"
            marginLeft="auto"
            marginRight="auto"
            fontFamily="Poppins-Regular"
            color="black.100"
            fontSize={16}
          >
           {text}
          </Text>
          <View width='90%' marginLeft='auto' marginRight='auto'>
            <Button title={buttonTitle} onPress={onPress} />
          </View>
        </VStack>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: "rgba(0, 0, 0, 0.80)",
  },
  modal: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFF",
    height: "auto",
    paddingTop: 40,
    paddingBottom: 40,
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 30,
  },
});
