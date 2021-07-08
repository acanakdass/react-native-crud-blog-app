import React, { useContext } from 'react'
import { FlatList, Button, StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/BlogContext'

const IndexScreen = () => {

   const { state, addBlogPostFunc } = useContext(Context)

   return (
      <View>
         <Text style={styles.text}>Blog App</Text>
         <Button
            title="Add Post"
            onPress={addBlogPostFunc}
         />
         <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
               return <Text style={styles.blogItem}>{item.title}</Text>
            }}
         />
      </View>
   )
}

export default IndexScreen

const styles = StyleSheet.create({
   text: {
      fontSize: 28,
      textAlign: 'center',
   },
   blogItem: {
      fontSize: 20,
      height: 30,
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 15,
      margin: 5,
      backgroundColor: 'purple',
      color: 'white'
   }
})
