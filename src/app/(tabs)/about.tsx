import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={style.contsiner}>
      <Text style={style.text}>About Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  contsiner: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
  },
});
