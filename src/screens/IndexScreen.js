import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
// import BlogContext from "../context/BlogContext";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = (props) => {
  console.log(props);
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      {/* <Button title="Add Post" onPress={addBlogPost} /> */}
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.rows}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = (props) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => props.navigation.navigate("Create")}>
        <Feather name="plus" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: { fontSize: 18 },
  icon: { fontSize: 24 },
});

export default IndexScreen;
