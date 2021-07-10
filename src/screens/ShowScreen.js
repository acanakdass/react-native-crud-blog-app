import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const ShowScreen = ({ navigation }) => {

   const { state } = useContext(Context)
   const id = navigation.getParam('id')
   const blogPost = state.find((blogPost) => blogPost.id === id)
   return (
      <View style={styles.container}>
         <Text style={styles.title}>{blogPost.title}</Text>
         <ScrollView>
            <Text style={styles.content}>{blogPost.content} </Text>
         </ScrollView>
      </View>
   )
}

ShowScreen.navigationOptions = ({ navigation }) => {
   return {
      headerRight: () => (
         <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <AntDesign style={styles.editIcon} name="edit" size={24} color="black" />
         </TouchableOpacity>
      )
   }
}

export default ShowScreen

const styles = StyleSheet.create({
   editIcon: {
      marginHorizontal: 15
   },
   title: {
      fontSize: 30,
      textAlign: 'center',
      marginVertical: 20,
   },
   content: {
      marginHorizontal: 20,
      fontSize: 18,
   },
   container: {
      marginBottom: 50,
      paddingBottom: 50
   }
})
