import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam("id")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: { fontSize: 20, marginBottom: 5, marginLeft: 5 },
});

export default EditScreen;
