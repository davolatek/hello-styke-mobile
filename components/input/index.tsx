import { ComponentProps, useState } from "react";
import { Text, View } from "../customs";
import { Input as RNInput } from "native-base";
import { useTheme } from "native-base";
import { Platform, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";

type inputProps = {
  placeholder?: string;
  err?: boolean;
  errMsg?: string;
  onInputFocus?: () => void;
  onSelectDate?: (value: Date) => void;
  input_type?: "date" | "password";
} & Partial<ComponentProps<typeof RNInput>>;

export const Input = ({
  placeholder,
  err,
  errMsg,
  onInputFocus,
  onSelectDate,
  input_type,
  ...otherProps
}: inputProps) => {
  const { colors } = useTheme();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date(1598051730000));
  const [show, setShow] = useState<boolean>(false);

  const IsDate = () => (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => setShow((prev) => !prev)}
    >
      <MaterialIcons name="date-range" size={20} />
    </TouchableOpacity>
  );

  const handleSetDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ): void => {
    const currentDate = selectedDate;
    if (currentDate !== undefined && onSelectDate) {
      setDate(new Date(currentDate));
      onSelectDate(new Date(currentDate));
      Platform.OS === "android" && setShow(false);
    }
  };

  return (
    <Pressable
      onPress={() => {
        if(input_type === 'date'){
          setShow(true)
        }
      }}
    >
      <RNInput
        color={colors.black[200]}
        fontSize={15}
        
        fontFamily="Poppins-Light"
        placeholder={placeholder}
        InputRightElement={
          input_type === "date" ? <IsDate /> : otherProps.InputRightElement
        }
        placeholderTextColor={colors.black[200]}
        variant={isInputFocused ? "focus" : "initial"}
        onFocus={() => {
          setIsInputFocused(true);
          onInputFocus && onInputFocus();
        }}
        editable={input_type === "date" ? false : otherProps.editable}
        onBlur={(e) => {
          setIsInputFocused(false);
          otherProps.onBlur && otherProps.onBlur(e);
        }}
        height="60px"
        borderRadius="10px"
        marginTop="6"
        {...otherProps}
      />

      {show && (
        <RNDateTimePicker
          value={date}
          display={"spinner"}
          mode="date"
          onChange={handleSetDate}
        />
      )}
      {err && (
        <Text fontFamily="Poppins-Regular" fontSize={10} color="red.100">
          {errMsg}
        </Text>
      )}
    </Pressable>
  );
};
