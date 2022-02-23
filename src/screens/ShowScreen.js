import React, { useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  // console.log("show screen : ", navigation);
  // navigation.getParam("id");

  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", {
            id: navigation.getParam("id"),
            // title: blogPost.title,
            // content: blogPost.content,
          })
        }
      >
        <Feather name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
