import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

const placeHolderImage: ImageSourcePropType = require("@/assets/images/background-image.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContsiner}>
        <ImageViewer imageSource={placeHolderImage} />
      </View>
      <View style={styles.container}>
        <Button theme="primary" title="Choose a photo" />
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
