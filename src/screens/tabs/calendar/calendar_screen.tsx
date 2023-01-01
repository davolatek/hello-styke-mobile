import { HStack, ScrollView, VStack } from "native-base";
import { Menu } from "../../../../assets/images/svg/icons";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { Calendar } from "../../../../components/Cards";
import { FlatList, StyleSheet } from "react-native";
import { note } from "../../../utils/assets";
import { EmptyService } from "../../../../components/empty-state";
import { jobBookings } from "../../../../components/services";
import { Card } from "../../../../components/booking/card";

export const CalendarScreen = () => {
  return (
    <PageLayout title="My Calendar" goBack icon={<Menu />}>
      <ScrollView showsVerticalScrollIndicator={false} paddingBottom={200}>
        <View paddingX={5}>
          <Calendar onSelectDate={(date) => null} />
          <VStack>
            <Text marginTop={8} fontFamily="Poppins-SemiBold" color="black.100">
              Service Booking (0)
            </Text>
            <FlatList
              contentContainerStyle={styles.job}
              data={jobBookings.filter((ele) => ele.type === 'Upcoming')}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <Card
                    name={item.name}
                    service={item.service}
                    id={item.id}
                    image={item.image}
                    type={item.type as any}
                  />
                </View>
              )}
              ListEmptyComponent={<EmptyService />}
            />
          </VStack>
        </View>
        <View height={200}></View>
      </ScrollView>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  job: {
    width: "98%",
    marginHorizontal: "1%",
    gap: 25,
    marginTop: 30
  },
});
