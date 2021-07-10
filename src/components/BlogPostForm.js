import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements';

const BlogPostForm = ({ onSubmit, initialValues }) => {


   const [title, setTitle] = useState(initialValues.title)
   const [content, setContent] = useState(initialValues.content)


   return (
      <View>

         <View style={styles.container}>
            <Input placeholder='Title' value={title} onChangeText={(input) => setTitle(input)} />
         </View>

         <View style={styles.container}>
            <Input placeholder='Content' value={content} onChangeText={(input) => setContent(input)} />
         </View>

         <View style={styles.buttonContainer}>

            <Button
               title="Save Blog Post"
               style={styles.button}
               onPress={() => {
                  onSubmit(title, content)
               }}
            />
         </View>
      </View>
   )
}

BlogPostForm.defaultProps = {
   initialValues: {
      title: '',
      content: ''
   }
}

const styles = StyleSheet.create({
   buttonContainer: {
      width: '100%',
      alignItems: 'center'
   },
   container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
   }
})

export default BlogPostForm