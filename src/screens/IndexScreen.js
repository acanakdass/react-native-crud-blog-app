import React, { useContext } from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Context } from '../context/BlogContext'
import { ListItem, Divider, Text } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Card } from "react-native-elements";

const IndexScreen = ({ navigation }) => {

   const { state, addBlogPostFunc, deleteBlogPostFunc } = useContext(Context)

   return (
      <View>

         <Text h3 style={{ textAlign: 'center', marginTop: 10 }}>Blog Posts</Text>
         <Divider
            style={{ margin: 10 }}
            color="lightgray"
            width={1}
            orientation="horizontal"
         />
         <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.id.toString()}
            scrollEnabled
            renderItem={({ item }) => {
               return (
                  <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>

                     {/* <ListItem >
                        <ListItem.Content>
                           <ListItem.Title>{item.title}</ListItem.Title>
                           <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
                        </ListItem.Content>
                        <TouchableOpacity onPress={() => { deleteBlogPostFunc(item.id) }}>
                           <AntDesign style={styles.icon} name="delete" size={24} color="black" />
                        </TouchableOpacity>
                     </ListItem> */}
                     <Card containerStyle={{}} wrapperStyle={{}}>
                        <View style={styles.cardHeader}>

                           <Card.Title>{item.title}</Card.Title>
                           <TouchableOpacity onPress={() => { deleteBlogPostFunc(item.id) }}>
                              <AntDesign style={styles.icon} name="delete" size={24} color="black" />
                           </TouchableOpacity>
                        </View>
                        <Card.Divider />

                        <View
                           style={{
                              position: "relative",
                              alignItems: "center"
                           }}
                        >
                           {/* <Image
                              style={{ width: "100%", height: 100 }}
                              resizeMode="contain"
                              source={{
                                 uri:
                                    "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
                              }}
                           /> */}

                           <Text>{item.content}</Text>
                        </View>
                     </Card>
                  </TouchableOpacity>
               )
            }}
         />

      </View>
   )
}

IndexScreen.navigationOptions = ({ navigation }) => {
   return {
      headerRight: () => (
         <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <AntDesign style={styles.plusIcon} name="plus" size={24} color="black" />
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   header: {
      fontSize: 28,
      textAlign: 'center',
      paddingVertical: 10,
      marginBottom: 15,
      width: 300,
      alignSelf: 'center'
   },
   cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
      marginHorizontal: 15,
      borderBottomWidth: 1,
      borderColor: 'lightgray',
      margin: 5
   },
   icon: {
      paddingHorizontal: 5,
      alignSelf: 'flex-end'
   },
   blogTitle: {
      fontSize: 24,
      textAlign: 'center',
      paddingHorizontal: 10
   },
   plusIcon: {
      marginHorizontal: 15
   }
})

export default IndexScreen