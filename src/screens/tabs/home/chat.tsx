import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { MenuIcon, Phone } from "../../../../assets/images/svg/icons";
import { HStack, VStack, useTheme } from "native-base";
import { useState, useCallback, useEffect, useRef } from "react";
import {
  GiftedChat,
  MessageProps,
  IMessage,
  InputToolbarProps,
} from "react-native-gifted-chat";
import { DEVICE_HEIGHT } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SenderLayout, ReceiverLayout } from "../../../../components/Cards";

import { Text, View } from "../../../../components/customs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../navigation/Home-navigation";

const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
    fontSize: 14,
    height: 57,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 20,
    width: "85%",
    backgroundColor: "#F2F3F4",
    fontFamily: "Poppins-Light",
  },
});
type chatScreenProps = NativeStackScreenProps<HomeStackParamList, 'chat'>
export const Chat = () => {
  const { colors } = useTheme();
  const [messages, setMessages] = useState<Array<any>>([]);
  const [textInputValue, setTextInputValue] = useState<string>("");

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quibusdam ullam non praesentium, optio, molestias possimus minima a quisquam ipsum alias voluptates amet. Obcaecati, ad. Quisquam exercitationem quam alias voluptas.        ",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback(
    (message: string) => {
      const newMessage = {
        _id: Math.random().toString(),
        text: textInputValue.trim(),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "skype",
        },
      };

      setMessages((previousMessages: any) =>
        GiftedChat.append(previousMessages, [newMessage])
      );

      setTextInputValue("");
    },
    [messages, textInputValue, setMessages]
  );

  return (
    <PageLayout
      title="Niana Fend"
      goBack
      icon={
        <HStack justifyContent="center" alignItems="center" space={3}>
          <TouchableOpacity>
            <Phone />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuIcon />
          </TouchableOpacity>
        </HStack>
      }
    >
      <View
        justifyContent="center"
        bgColor={colors.pink[100]}
        alignItems="center"
        width={24}
        paddingLeft={5}
        paddingRight={5}
        height={10}
        margin="auto"
        marginTop={4}
        borderRadius={4}
      >
        <Text
          textAlign="center"
          fontFamily="Poppins-Medium"
          fontSize={13}
          color={colors.blue[100]}
          paddingBottom={1}
        >
          Today
        </Text>
      </View>
      <View
        padding={6}
        safeAreaBottom
        height={DEVICE_HEIGHT - (Platform.OS === "android" ? 145 : 100)}
      >
        <GiftedChat
          messages={messages}
          renderMessage={(message: MessageProps<IMessage>) => {
            return (
              <>
                {message.currentMessage?.user._id === 2 ? (
                  <SenderLayout
                    date={
                      new Date(
                        message.currentMessage?.createdAt || new Date()
                      ) as any
                    }
                    text={message.currentMessage?.text as string}
                  />
                ) : (
                  <ReceiverLayout
                    date={
                      new Date(
                        message.currentMessage?.createdAt || new Date()
                      ) as any
                    }
                    text={message.currentMessage?.text as string}
                  />
                )}
              </>
            );
          }}
          renderInputToolbar={(props: InputToolbarProps<IMessage>) => (
            <HStack
              width="full"
              justifyContent="space-between"
              alignItems="center"
              position="relative"
              height={59}
              borderColor={colors.amber[100]}
              borderRadius={10}
              borderWidth={0.8}
              bgColor="white.100"
            >
              <TextInput
                style={styles.input}
                value={textInputValue}
                onChangeText={setTextInputValue}
                placeholder="Type your message"
                multiline
              />
              <TouchableOpacity
                onPress={() => {
                  onSend(textInputValue);
                }}
                style={{ position: "absolute", right: 1 }}
              >
                <HStack
                  width={57}
                  height={57}
                  borderRadius={5}
                  justifyContent="center"
                  alignItems="center"
                  bgColor="blue.200"
                >
                  <Ionicons
                    color={colors.white[100]}
                    size={30}
                    name="paper-plane-sharp"
                  />
                </HStack>
              </TouchableOpacity>
            </HStack>
          )}
          user={{
            _id: 1,
          }}
        />
        <View height={16} />
      </View>
    </PageLayout>
  );
};
