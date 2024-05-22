import { Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0, // 1 მაგალითი: ეს არის ხელსაწყო რომლის მიხედვითაც ვადგენთ რომელ პლატფორმაზე ვმუშაობთ და მის მხიედვით ვაწყობთ რა გვჭირდება.
    borderWidth: Platform.select({ ios: 0, android: 2 }), //ალტერნატივა ზედასი.
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300, //ეს იმოქმედებს მაშინ როცა 300 პიქსელი ნაკლებია მოცემული მასის 80 პროცენტის, თუ მეტია ზედა იმოქმედებს.
  },
});
