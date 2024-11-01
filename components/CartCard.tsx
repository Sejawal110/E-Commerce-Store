import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from './Constants/Colors';

export default function CartCard({item, deleteItemFromCart}: {item: any}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.circleContainer}>
        <View style={[styles.circle, {backgroundColor: item.color}]} />
        <View style={styles.sizeCircle}>
            <Text style={styles.size}>{item.size}</Text>
        </View>
      </View>
      </View>

      <TouchableOpacity onPress={() => {
        deleteItemFromCart(item);
      }}>
      <MaterialIcons name="delete-outline" size={25} color={Colors.primary} />
      </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 10,
        flexDirection: 'row'
    },


    image: {
        height: 125,
        width: '25%',
        borderRadius: 10
    },

    cardContent: {
        flex: 1,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        color: Colors.light,
        fontWeight: '500'
    },
    price:{
        fontSize: 17,
        color: Colors.success,
        marginVertical: 10
    },

    circleContainer: {
        flexDirection: 'row',
    
    },

    circle: {
        height: 32,
        width: 32,
        borderRadius: 20,
       
    },

    sizeCircle: {
        backgroundColor: Colors.white,
        height: 32,
        width: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },

    size: {
        fontSize: 18,
        fontWeight: '500'
    },

    
})