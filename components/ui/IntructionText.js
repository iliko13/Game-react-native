import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructorText, style]}>{children}</Text>; //style ბოლოსკენ იმიტომ ვწერთ რომ გადავწეროთ არსებული სტაილი.
};

export default InstructionText;

const styles = StyleSheet.create({
  instructorText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
