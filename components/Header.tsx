import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './Constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Header ({isCart}) {

    const navigation: any = useNavigation();


  return (
    <View style={styles.mainContainer}>

        <TouchableOpacity onPress={() =>{
            navigation.navigate('Home-Stack');
        }} style={styles.headerContainer}>
            {
                isCart ?  ( <Ionicons name="chevron-back" size={28} color={Colors.primary} />

                 ) : (
                    <Image  source={require('../assets/images/header1.png')} style={styles.headerimg}/>
                 )
            }
        
        </TouchableOpacity>

        { isCart && <Text style={styles.cartText}> My Cart </Text> }

        <Image source={require('../assets/images/index1.jpg')} style={styles.headerimgg} />



    </View>
  )
}

const styles = StyleSheet.create({


    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },

    headerContainer:{
        backgroundColor: '#fff',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },



    headerimg: {
        width: 28,
        height: 28
    },

    headerimgg: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },

    cartText: {
        fontSize: 28,
        color: Colors.black
    }
})