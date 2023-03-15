import { StyleSheet, View, TextInput } from "react-native";
import { Text } from "react-native-paper";

export default function CadastroScreen() {
  return (
    <View>

      <View style={styles.header}></View>

      <View style={styles.main}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
  },

  title: {
    fontSize: 25,
    marginBottom: 30,
  },

  form: {
    backgroundColor: "#214D51",
    padding: 25,
    borderRadius: 10,
  },

  label: {
    color: "white",
    marginBottom: 5,
  },

  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    color: "white",
    paddingLeft: 10,
  },
  
  header: {
    backgroundColor: "#46936F",
    width: "100%",
    height: 80,
  },
});
