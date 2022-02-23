import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
// import BlogContext from "../context/BlogContext";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Feather name="trash" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({ viewStyle: { backgroundColor: "#FFFFFF" } });

export default IndexScreen;
