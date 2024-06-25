import * as ImagePicker from "expo-image-picker";
import { FC, ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";

type imageType = {
  uri: string;
  fileName: string | undefined | null;
  fileSize: number | undefined;
  height: number;
  width: number;
  mimeType?: string;
};

type props = {
  accessor: ReactElement;
  onPickImage?: (image: imageType) => void;
};

export const PickImage: FC<props> = ({ accessor, onPickImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 0.5,
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
          mimeType: result.assets[0].type,
        });
    }
  };

  return <TouchableOpacity onPress={pickImage}>{accessor}</TouchableOpacity>;
};

type ImageType = {
  uri: string;
  fileName: string | undefined | null;
  fileSize: number | undefined;
  height: number;
  width: number;
  mimeType?: string;
};

type Props = {
  accessor: ReactElement;
  onPickImage?: (images: ImageType[]) => void;
};

export const PickImages: FC<Props> = ({ accessor, onPickImage }) => {
  const [selectedImages, setSelectedImages] = useState<ImageType[]>([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowsMultipleSelection: true, // Enable multiple selection
      quality: 0.5,
      aspect: [4, 3],
    });

    console.log(result);
    // setSelectedImages(result.assets)
    console.log(selectedImages, 'selected')

    if (!result.canceled && result.assets) {
      const images = result.assets.map(asset => ({
        uri: asset.uri,
        fileName: asset.fileName,
        fileSize: asset.fileSize,
        height: asset.height,
        width: asset.width,
        mimeType: asset.type,
      }));

      setSelectedImages(images);

      if (onPickImage) {
        onPickImage(images);
      }
    }
  };

  return <TouchableOpacity onPress={pickImage}>{accessor}</TouchableOpacity>;
};
