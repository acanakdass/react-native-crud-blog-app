import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

   const [blogPosts, setBlogPosts] = useState([]);

   const addBlogPost = () => {
      setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
      console.log('added')
   }


   return <BlogContext.Provider
      value={
         {
            data: blogPosts,
            addBlogPostFunc: addBlogPost
         }
      }>
      {children}
   </BlogContext.Provider>
}

export default BlogContext;