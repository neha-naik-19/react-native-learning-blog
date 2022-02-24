import React, { useContext, useState } from "react";
import { StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
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

export default CreateScreen;
