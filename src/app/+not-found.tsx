import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function PageNotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Page not found" }} />
      <View style={style.container}>
        <Link style={style.button} href="/">
          Go back to homepage
        </Link>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
