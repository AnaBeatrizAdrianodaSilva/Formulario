import { StyleSheet, View, TextInput } from "react-native";
import { Text } from "react-native-paper";

export default function CadastroScreen() {
  return (
    <View style={styles.body}>

      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome Completo:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Nome de Usuário:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} secureTextEntry={true} />

        <Text style={styles.label}>Confirmação de Senha:</Text>
        <TextInput style={styles.input} secureTextEntry={true} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  title: {
    fontSize: 25,
    marginBottom: 30,
  },

  form: {
    backgroundColor: '#214D51',
    padding: 25,
    borderRadius: 10,
  },

  label: {
    color: 'white',
    marginBottom: 5,
  },  

  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    color: 'white',
    paddingLeft: 10,
  }
})