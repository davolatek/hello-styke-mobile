import { HStack, VStack, useTheme } from "native-base";
import { Calendar as Calendar_, DateData } from "react-native-calendars";
import { useState, useRef, useEffect, Fragment, FC } from "react";
import moment from "moment";
import { TouchableOpacity } from "react-native";
import { View, Text } from "../customs";

type Props = {
  onSelectDate: (date: Date) => void;
};

export const Calendar: FC<Props> = ({ onSelectDate }) => {
  const { colors } = useTheme();
  const ref = useRef(0);
  const [selectedDate, setDate] = useState<Date>(new Date());

  return (
    <VStack position="relative">
      <Text
        letterSpacing={0.1}
        fontFamily="Poppins-Medium"
        fontSize={15}
        width="100%"
        color="gray.900"
        paddingY={4}
      >
        Select Date
      </Text>
      <VStack bgColor="black.400" borderRadius={10}>
        <Calendar_
          enableSwipeMonths
          markingType={"multi-dot"}
          markedDates={{
            "2012-05-16": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
          }}
          style={{
            backgroundColor: colors.black[400],
            borderRadius: 10,
            marginBottom: 10,
          }}
          theme={
            {
              calendarBackground: colors.black[400],
              textDayStyle: {
                fontSize: 16,
                borderWidth: 1,
                height: 55,
                width: 55,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              },
            } as any
          }
          
          onDayPress={(day) => {}}
          renderHeader={(date) => {
            return (
              <HStack zIndex={100} paddingY={21}>
                <Text
                  fontFamily="Poppins-Medium"
                  fontSize={16}
                  color="white.100"
                >
                  {moment(new Date(date)).format("MMM YYYY")}
                </Text>
              </HStack>
            );
          }}
          dayComponent={({ date, state }) => {
            if (date?.month === moment().subtract(1, "months").month() + 1) {
              ref.current = ref.current + 1;
            }
            return (
              <View
                height={51}
                width={61}
                pl={3}
                mt={-2}
                mb={-4}
                backgroundColor="black.400"
              >
                <TouchableOpacity
                  onPress={() => {
                    setDate(new Date(date?.dateString as string));
                    onSelectDate(new Date(date as string));
                  }}
                >
                  <View
                    justifyContent="flex-start"
                    pt={2}
                    alignItems="center"
                    height={41}
                    width={41}
                    borderRadius={50}
                    backgroundColor={
                      new Date(selectedDate).getTime() !==
                      new Date(date?.dateString as string).getTime()
                        ? "black.400"
                        : "blue.200"
                    }
                  >
                    <Text
                      color="white.100"
                      fontSize={11}
                      fontFamily="Poppins-Medium"
                    >
                      {date?.day}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </VStack>
    </VStack>
  );
};
