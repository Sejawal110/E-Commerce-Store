import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header';
import CartCard from '../CartCard';
import Colors from '../Constants/Colors';
import { CartContext } from '@/components/Context/CardContext';


export default function CartScreen() {
    const  {carts, totalPrice, deleteItemFromCart} = useContext(CartContext);
    return (
        <LinearGradient
            colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}>

            <View style={styles.headerContainer}>
                <Header isCart={true} />
            </View>
            

            <FlatList data={carts} renderItem={({item}) => <CartCard  item={item} 
            deleteItemFromCart={deleteItemFromCart}
            />} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 100
            }}
            ListFooterComponent={
                <>
                  <View style={styles.priceContainer}>
                <View style={styles.priceTitle}>
                    <Text style={styles.text}>Total:</Text>
                    <Text style={styles.text}>${totalPrice}</Text>
                </View>

                <View style={styles.priceTitle}>
                    <Text style={styles.text}>Shipping:</Text>
                    <Text style={styles.text}>$0.00</Text>
                </View>
            </View>
            <View style={styles.divider} />

            <View style={styles.priceTitle}>
                <Text style={styles.text}>Grand Total:</Text>
                <Text style={[styles.text, { color: Colors.black, fontWeight: '600' }]}>${totalPrice}</Text>
            </View>
                </>
            }
            />

          

            <TouchableOpacity style={styles.button} >
                <Text style={styles.btnTxt}>CheckOut</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    headerContainer: {
        marginBottom: 20
    },

    priceContainer: {
        marginTop: 40
    },

    priceTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10
    },

    text: {
        color: Colors.info,
        fontSize: 18
    },

    divider: {
        borderWidth: 1,
        color: Colors.warning,
        marginVertical: 10
    },

    button: {
        backgroundColor: Colors.primary,
        width: '100%',
        marginVertical: 10,
        borderRadius: 10
    },

    btnTxt: {
        fontSize: 25,
        color: Colors.white,
        textAlign: 'center',
        padding: 10
    },
})