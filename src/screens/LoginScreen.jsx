import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function LoginScreen() {
  return (
    <View style={styles.body}>
      <Text>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})