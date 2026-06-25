import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const placeHolderImage = require("@/assets/images/background-image.png");
export default function Index() {
  const [selectedImage, setSelectedImage] = useState(placeHolderImage);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContsiner}>
        <ImageViewer imageSource={selectedImage} />
      </View>
      <View style={styles.container}>
        <Button
          border={true}
          icon={true}
          title="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button title="use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContsiner: {
    flex: 1,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
