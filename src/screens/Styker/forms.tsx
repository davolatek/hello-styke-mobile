import { Text, View } from "../../../components/customs";
import { Box, HStack, Progress } from "native-base";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants";
import { Arrow } from "../../../assets/images/svg/icons/arrow";
import { FlatList, ScrollView } from "react-native";
import { useState } from "react";
import { Radio } from "../../../components/button/radio";
import { Button } from "../../../components/button";
import { AllServices, Services } from "../../../components/services";
import { AppStackScreenProps } from "../../navigation/app.roots.types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StykerTaskerStackParamList } from "../../navigation/styker/styker.tasker/styker.tasker.stack.navigation";

type JobFormScreenProps = NativeStackScreenProps<
  StykerTaskerStackParamList,
  "job_form"
>;
export const Forms = ({ navigation }: JobFormScreenProps) => {
  const list = [
    {
      id: 1,
      name: "1/4",
    },
    {
      id: 2,
      name: "2/4",
    },
    {
      id: 3,
      name: "3/4",
    },
    {
      id: 4,
      name: "4/4",
    },
  ];
  const [active, setActive] = useState(1);

  const handleActive = (id: number) => {
    setActive(id);
  };
  const handleNavigation = (name: string, image: string) => {
    if (active === 4) {
      navigation.navigate("job_form", {
        name,
        image: image as any,
      });
    }
  };
  const [jobType, setJobType] = useState<Number | null>(null);
  const [experience, setExperience] = useState<Number | null>(null);
  const [model, setModel] = useState<Number | null>(null);
  const [jobTitle, setJobTitle] = useState<Number | null>(null);
  const handleJobType = (id: number) => {
    setJobType(id);
  };
  const handleExperienceLevel = (id: number) => {
    setExperience(id);
  };
  const handleModel = (id: number) => {
    setModel(id);
  };
  const handleJobTitle = (id: number) => {
    setJobTitle(id);
  };
  return (
    <View safeArea width={DEVICE_WIDTH} height={DEVICE_HEIGHT}>
      <ScrollView>
        <View width="88%" marginX="auto" marginTop={7}>
          <HStack
            alignItems="center"
            width={"90%"}
            justifyContent="space-between"
            style={{ gap: 30 }}
          >
            <Arrow />
            <HStack alignItems="center">
              <Box w="50%" maxW="400">
                <Progress
                  bg="pink.300"
                  _filledTrack={{
                    bg: "blue.300",
                  }}
                  value={
                    active === 1
                      ? 25
                      : active === 2
                      ? 50
                      : active === 3
                      ? 75
                      : active === 4
                      ? 100
                      : 25
                  }
                  mx="4"
                />
              </Box>
              <FlatList
                data={list}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <View>
                    {active === item.id && (
                      <Text
                        fontSize={9}
                        color={"blue.300"}
                        fontFamily="Poppins-SemiBold"
                      >
                        {active === item?.id ? item.name : null}
                      </Text>
                    )}
                  </View>
                )}
              />
            </HStack>
          </HStack>
          {active === 1 && (
            <>
              <Text
                fontSize={25}
                lineHeight={10}
                fontFamily="Poppins-SemiBold"
                marginTop={10}
              >
                What Type of Job Are You Interested In?
              </Text>
              <View style={{ gap: 20 }} mt={30}>
                {[
                  "Full-time",
                  "Part-time",
                  "Contract",
                  "Temporary",
                  "Internship",
                ].map((elem, id) => (
                  <HStack
                    key={elem}
                    width="100%"
                    style={{ gap: 10 }}
                    borderRadius={8}
                    padding={5}
                    bg="white.100"
                    alignItems="center"
                  >
                    <Radio
                      id={id}
                      active={jobType === id}
                      handleActive={() => handleJobType(id)}
                    />
                    <Text
                      fontSize={14}
                      fontFamily="Poppins-Medium"
                      color="black.100"
                    >
                      {elem}
                    </Text>
                  </HStack>
                ))}
              </View>
            </>
          )}
          {active === 2 && (
            <>
              <Text
                fontSize={25}
                lineHeight={10}
                fontFamily="Poppins-SemiBold"
                marginTop={10}
              >
                What is Your Level of Experience?
              </Text>
              <View style={{ gap: 20 }} mt={30}>
                {["Entry Level", "Intermediate", "Expert"].map((elem, id) => (
                  <HStack
                    key={elem}
                    width="100%"
                    style={{ gap: 10 }}
                    borderRadius={8}
                    padding={5}
                    bg="white.100"
                    alignItems="center"
                  >
                    <Radio
                      id={id}
                      active={experience === id}
                      handleActive={() => handleExperienceLevel(id)}
                    />
                    <Text
                      fontSize={14}
                      fontFamily="Poppins-Medium"
                      color="black.100"
                    >
                      {elem}
                    </Text>
                  </HStack>
                ))}
              </View>
            </>
          )}
          {active === 3 && (
            <>
              <Text
                fontSize={23}
                lineHeight={10}
                fontFamily="Poppins-SemiBold"
                marginTop={10}
              >
                Preferred Working Model: Work Structure?
              </Text>
              <View style={{ gap: 20 }} mt={30}>
                {["On-site", "Hybrid", "Remote"].map((elem, id) => (
                  <HStack
                    width="100%"
                    style={{ gap: 10 }}
                    borderRadius={8}
                    padding={5}
                    bg="white.100"
                    alignItems="center"
                    key={elem}
                  >
                    <Radio
                      id={id}
                      active={model === id}
                      handleActive={() => handleModel(id)}
                    />
                    <Text
                      fontSize={14}
                      fontFamily="Poppins-Medium"
                      color="black.100"
                    >
                      {elem}
                    </Text>
                  </HStack>
                ))}
              </View>
            </>
          )}
          {active === 4 && (
            <>
              <Text
                fontSize={23}
                lineHeight={10}
                fontFamily="Poppins-SemiBold"
                marginTop={10}
              >
                What Job Title Are You Seeking?
              </Text>
              <View style={{ gap: 20 }} mt={30}>
                {AllServices.map((elem, id) => (
                  <HStack
                    width="100%"
                    style={{ gap: 10 }}
                    borderRadius={8}
                    padding={5}
                    bg="white.100"
                    alignItems="center"
                    key={elem.id}
                  >
                    <Radio
                      id={id}
                      active={jobTitle === id}
                      handleActive={() => handleJobTitle(id)}
                    />
                    <Text
                      fontSize={14}
                      fontFamily="Poppins-Medium"
                      color="black.100"
                    >
                      {elem.name}
                    </Text>
                  </HStack>
                ))}
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <View width="88%" marginX="auto">
        <Button
          title="Next"
          onPress={() => {
            handleActive(active < list.length ? active + 1 : active);
            if (jobTitle !== null) {
              const selectedService = Services[jobTitle as any];
              handleNavigation(
                selectedService.name,
                selectedService.image as any
              );
            }
          }}
          style={{ marginTop: "auto" }}
        />
      </View>
    </View>
  );
};
