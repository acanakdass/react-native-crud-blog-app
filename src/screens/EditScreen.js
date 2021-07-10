import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';
import { Text } from 'react-native-elements';

const EditScreen = ({ navigation }) => {

   const id = navigation.getParam('id');
   const { state, updateBlogPost } = useContext(Context)

   const showSuccessToast = (addedBlogTitle) => {
      ToastAndroid.show(`Blog named ${addedBlogTitle} updated succesfully!`, ToastAndroid.LONG);
   }

   const blogPost = state.find((blogPost) => blogPost.id === id);

   return (
      <View>
         <Text h2 h2Style={{ textAlign: 'center' }} >Update Blog Post</Text>

         <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
               updateBlogPost(id, title, content, () => navigation.pop())
               // showSuccessToast(title)
            }} />
      </View>
   )
}

export default EditScreen

const styles = StyleSheet.create({})
