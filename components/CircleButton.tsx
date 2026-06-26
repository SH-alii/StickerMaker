import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CircleButtonProps {
  title?: string | null;
  iconType?: any;
  onPress: () => void;
  size?: number;
  color?: string;
}

export default function CircleButton({
  title = null,
  iconType = "add",
  onPress,
  size = 38,
  color = "#25292e",
}: CircleButtonProps) {
  return (
    <View style={title == null && styles.container}>
      <Pressable
        onPress={onPress}
        style={title == null ? styles.circleButton : styles.iconButton}
      >
        <MaterialIcons name={iconType} size={size} color={color} />
        {title != null && <Text style={styles.iconButtonLabel}>{title}</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },

  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },

  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
