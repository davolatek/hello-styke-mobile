import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Search } from "../../../../assets/images/svg/icons";
import { Text, View } from "../../../../components/customs";
import { PageLayout } from "../../../../components/layout.tsx/page-layout";
import { HomeStackParamList } from "../../../navigation/Home-navigation";
import { FlatList, StyleSheet } from "react-native";
import { PopularServices } from "../../../../components/services";
import { ServiceCard } from "../../../../components/Cards";
import { ListEmptyComponent } from "../../../../components/Cards/list-empty.component";

type OneServiceScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'one_service'
>;

export const OneServiceScreen = ({ route }: OneServiceScreenProps) => {
  const title = route.params.name || "Default Title"; 

  const filteredServices = () => {
    return PopularServices.filter(
      (elem) => elem.page.toLowerCase() === title.toLowerCase()
    );
  };

  console.log(filteredServices(), "filll");
  console.log("Route Param Name:", title);
  return (
    <PageLayout title={title} goBack={true} icon={<Search />}>
      <View flexDirection="column" style={styles.cards}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ServiceCard
              image={item.image}
              name={item.name}
              bookmarked={item.bookmarked}
              rating={item.rating}
              review={item.review}
              service={item.service}
              pay={item.pay}
              page={item.page}
              category={item.category}
            />
          )}
          data={filteredServices()}
          ListEmptyComponent={
            <ListEmptyComponent name={`No ${title} available`} />
          }
        />
      </View>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  cards: {
    marginTop: 40,
    rowGap: 10,
    shadowColor: "rgba(0, 62, 154, 0.10)",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  card: {},
});
