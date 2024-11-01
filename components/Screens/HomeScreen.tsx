import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header';
import Colors from '../Constants/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';
import CategoryList from '../CategoryList';
import ProductCard from '../ProductCard';
import data from '../../components/data/data.json'

const categoriesList = ['Trending Now', 'All', 'Jeans', 'Womens', 'Mens', 'Jackets', 'T-Shirts']

export default function HomeScreen() {

  const [active, setActive] = useState('All');
  const [isLiked, setIsLiked] = useState<Boolean>(false);
  const [products, setProducts] = useState(data.products)


  const likedHandler = (item: any) => {
    const newProducts = products.map((prod) => {
      if (prod.id === item.id ) {
        return {
          ...prod,
          isLiked: true,
        };
      }
      return prod;
    });
    setProducts(newProducts)
  }




  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      style={styles.container}>
      <Header />
      

      <FlatList
        ListHeaderComponent={
          <>
          <Text style={styles.txt}>Match Your Style</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={26} color="#C0C0C0" />
              </View>
              <TextInput
                placeholder='Search'
                style={styles.input} />
            </View>




            <FlatList data={categoriesList} keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <CategoryList item={item} active={active} setActive={setActive} />}
            />
          </>
        }

        data={products}
        renderItem={({item, index}) =>  <ProductCard item={item}  
        likedHandler={likedHandler}
        />}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 150}}

      />

    </LinearGradient>


  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  txt: {
    fontSize: 28,
    color: Colors.black,
    marginTop: 25
  },

  inputContainer: {
    backgroundColor: Colors.white,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15
  },
  input: {
    flex: 1,
  },

  iconContainer: {
    marginHorizontal: 15
  },

  productContainer: {
    flexDirection: 'row',
  },
})