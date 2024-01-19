import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { View } from "../customs";
import { useState } from "react";

export const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "set" && selectedDate) {
      const currentDate: Date = selectedDate;
      setDate(currentDate); // Assuming setDate is a function that accepts a Date
    } else {
      toggleDatePicker(); // Assuming toggleDatePicker is a function with no parameters
    }
  };
  return (
    <View>
      {
        <DateTimePicker
          mode="date"
          onChange={onChange}
          display="spinner"
          value={date}
        />
      }
    </View>
  );
};
