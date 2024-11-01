import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './Constants/Colors'

export default function CategoryList({item, active, setActive}: {item: any, active: any, setActive: any}) {
  return (
    <TouchableOpacity style={{marginTop: 20}} onPress={() => setActive(item)}>
      <Text style={[styles.categoryTxt, 
      active === item && {color: Colors.white, backgroundColor: Colors.primary}
       ]}>{item}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    categoryTxt: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.white,
        backgroundColor: Colors.secondary,
        textAlign: 'center',
        borderRadius: 16,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        paddingVertical: 10
        
    },
})