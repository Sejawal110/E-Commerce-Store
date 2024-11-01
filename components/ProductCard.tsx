import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from './Constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'


export default function ProductCard({ item, likedHandler, } : { likedHandler: any, item: any}) {

    const navigation: any = useNavigation();
 

  return (
    <TouchableOpacity onPress={() => {
       navigation.navigate('Product_Detail', {item} )
       }} 
     style={styles.container}>
      <Image 
      source={{uri: item.image}} style={styles.img} />
      <View style={styles.detailsContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      </View>

      <TouchableOpacity style={styles.likeContainer} 
      onPress={() => {
        likedHandler(item)
      }}
      >

        { item.isLiked ?  (
           <AntDesign name={"heart"} size={24} color={Colors.primary} />
            ) : (
              <AntDesign name={"hearto"} size={24} color={Colors.primary} />
             
         )}


      
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        position: 'relative'
    },
    img: {
        height: 256,
        borderRadius: 20,
        width: '90%',
        marginVertical: 10,
        marginLeft: 10
    },

    detailsContainer: {
        paddingLeft: 15
    },

    title: {
        color: Colors.light,
        fontSize: 18,
        fontWeight: '600'
    },

    price: {
        fontSize: 18,
        color: Colors.danger,
        fontWeight: '600'
    },

    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: 20,
        right: 20
    },
})