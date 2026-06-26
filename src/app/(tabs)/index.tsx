import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const placeHolderImage = require("@/assets/images/background-image.png");
export default function Index() {
  const [selectedImage, setSelectedImage] = useState(placeHolderImage);
  const [showAppOptions, setShowOptions] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const reset = () => {};

  const save = () => {};

  const onAddSticker = () => {
    setShowModal((state) => !state);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContsiner}>
        <ImageViewer imageSource={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.containerButton}>
          <CircleButton
            title="reset"
            iconType="refresh"
            onPress={reset}
            color="#fff"
            size={24}
          />
          <CircleButton onPress={onAddSticker} />

          <CircleButton
            title="save"
            iconType="save-alt"
            onPress={save}
            color="#fff"
            size={24}
          />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            border={true}
            icon={true}
            title="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button title="use this photo" onPress={() => setShowOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisble={showModal} onClose={onAddSticker}>
        <Text>Hello</Text>
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    flexDirection: "row",
    paddingTop: "20%",
  },
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
