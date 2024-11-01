import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useState } from 'react'
import Header from '../Header';
import Colors from '../Constants/Colors';
import {  useRoute } from '@react-navigation/native';
import { CartContext } from '@/components/Context/CardContext';
import { useNavigation } from '@react-navigation/native';



   
   const sizes = ['S', 'M', 'L', 'XL', 'XXL']
   const colorArray = ['#4379F2', '#117554', '#6C48C5', '#424242', '#697565', '#000000' ]
export default function ProductDetailScreen() {

  const navigation: any = useNavigation();

  const {addToCartHandler} = useContext(CartContext)
  const route = useRoute();
  const item = route.params?.item;
  

  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<any>(null);


  const handleAddtoCart = () => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCartHandler(item);
    navigation.navigate('Cart');
  }


  return (
    <LinearGradient
    colors={['#FDF0F3', '#FFFBFC']}
    style={styles.container}>

      <View style={styles.headerContainer}>
        <Header />
      </View>

      <Image  source={{uri: item.image}} style={styles.coverImg} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.price, styles.title]}>${item.price}</Text>
      </View>

      <Text style={[styles.title, styles.sizeTxt]}>Size</Text>
      <View style={styles.sizeContainer}>
       {
        sizes.map((size, index) => {
          return (
            <TouchableOpacity style={styles.sizeValueContainer} 
            key={index}
            onPress={() => {
              setSelectedSize(size)
            }}
            >
              <Text style={[styles.sizes, selectedSize === size && {color: Colors.primary},]}>{size}</Text>
            </TouchableOpacity>
          )
        })
       }
      </View>
      <Text style={[styles.title, styles.colors]}>Colors</Text>
      <View style={styles.colorContainer}>
        {colorArray.map((colors, index) =>{
          return (
            <TouchableOpacity style={[styles.circleBorder, selectedColor === colors &&
               {borderColor: colors, borderWidth: 3}


              ]} 
              key={index}
            onPress={() => {
              setSelectedColor(colors);
            }}
            > 
              <View style={[styles.circle, {backgroundColor: colors}]} />
            </TouchableOpacity>
          )
        })}
      </View>


      <TouchableOpacity style={styles.button} onPress={() => {
      handleAddtoCart(item);
      }}>
        <Text style={styles.buttonTxt}>Add to Cart</Text>
      </TouchableOpacity>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    padding: 20
  },

  coverImg: {
    width: '100%',
    height: 417
  },

  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20
  },
  title:{
    fontSize: 20,
    color: Colors.light,
    fontWeight: '500'
    
  },

  price: {
    color: Colors.dark,
  },

  sizeTxt: {
    color: Colors.dark,
    paddingHorizontal: 20
  },

  sizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20
  },

  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    
    
  },

  sizes: {
    fontSize: 18,
    fontWeight: '600',
  },

  colors: {
    marginHorizontal: 20,
    marginTop: 10
  },

  colorContainer: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 20,
    
  },

  circleBorder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent:'center',
    alignItems: 'center',
    marginHorizontal: 5

  },

  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    marginVertical: 20
  },
  buttonTxt: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center'
  },


  
})