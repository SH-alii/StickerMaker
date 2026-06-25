import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";
interface ButtonProps {
  title: string;
  broderColor?: string;
  border?: boolean;
  icon?: boolean;
  onPress?: () => void;
}

export default function Button({
  title,
  broderColor = "#ffd33d",
  border = false,
  icon = false,
  onPress = () => alert("You pressed a button."),
}: ButtonProps) {
  return (
    <View
      style={[
        style.buttonContainer,
        border && {
          borderWidth: 4,
          borderColor: `${broderColor}`,
          borderRadius: 18,
        },
      ]}
    >
      <Pressable
        style={[style.button, { backgroundColor: "#fff" }]}
        onPress={onPress}
      >
        {icon && (
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={style.buttonIcon}
          />
        )}

        <Text style={[style.buttonLabel, { color: "#25292e" }]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },

  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
