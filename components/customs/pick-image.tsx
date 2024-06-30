import * as ImagePicker from "expo-image-picker";
import { FC, ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";

type imageType = {
  uri: string;
  fileName: string | undefined | null;
  fileSize: number | undefined;
  height: number;
  width: number;
  mimeType?: string
};

type props = {
  accessor: ReactElement;
  onPickImage?: (image: imageType) => void;
};

export const PickImage: FC<props> = ({ accessor, onPickImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: .5,
    });

    console.log(result);

    if (!result.canceled) {
      onPickImage &&
        onPickImage({
          uri: result.assets[0].uri,
          fileName: result.assets[0].fileName,
          fileSize: result.assets[0].fileSize,
          height: result.assets[0].height,
          width: result.assets[0].width,
          mimeType: result.assets[0].type
        });
    }
  };

  return <TouchableOpacity onPress={pickImage}>{accessor}</TouchableOpacity>;
};