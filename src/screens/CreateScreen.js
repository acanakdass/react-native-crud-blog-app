import React, { useContext } from 'react'
import { StyleSheet, View, ToastAndroid } from 'react-native'
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {

   const { addBlogPostFunc } = useContext(Context)

   const showSuccessToast = (addedBlogTitle) => {
      ToastAndroid.show(`Blog named ${addedBlogTitle} added succesfully!`, ToastAndroid.LONG);
   }
   return (
      <BlogPostForm
         onSubmit={(title, content) => {
            addBlogPostFunc(title, content, () => navigation.navigate('Index'))
            // showSuccessToast(title)
         }}
      />
   )
}

export default CreateScreen

const styles = StyleSheet.create({

})
