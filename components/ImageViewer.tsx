import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

interface ImageProps {
  imageSource: ImageSourcePropType;
}

export default function ImageViewer({ imageSource }: ImageProps) {
  return <Image source={imageSource} style={style.image} />;
}

const style = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
