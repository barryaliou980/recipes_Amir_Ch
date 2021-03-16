import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <View style={styles.accountContainer}>
          <Text style={{ color: "hsl(198, 16%, 66%)" }}>
            Dont have an account ?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              style={{ color: "#5cc0eb" }}
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              SIGNUP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.login}>Login</Text>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("Category");
            }}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b5998",

    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
    elevation: 2,
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  card: {
    flex: 1,
    margin: 40,
    bottom: "20%",
    textAlign: "center",
    zIndex: 99,
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 2,
    // shadowOffset: 50,
  },
  login: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    margin: 20,
    borderBottomColor: "#737373",
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "#00a4ef",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
  },
  loginText: {
    alignItems: "center",
    color: "#fff",
    margin: 7,
  },
  accountContainer: {
    justifyContent: "center",
    top: "40%",
    left: "5%",
    flexDirection: "row",
  },
});
