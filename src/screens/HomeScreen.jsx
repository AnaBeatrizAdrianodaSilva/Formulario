import { Image } from "react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.header}></View>

      <View style={styles.main}>
        <Image
          source={require("../../assets/img/iconUser.png")}
          style={styles.imgUser}
        />
        <Text style={styles.name}>Ana Beatriz</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 50,
  },

  imgUser: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },

  name: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
  },

  header: {
    backgroundColor: "#46936F",
    width: "100%",
    height: 80,
  },
});
