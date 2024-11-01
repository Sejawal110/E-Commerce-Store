import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import HomeScreen from '@/components/Screens/HomeScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProductDetailScreen from '@/components/Screens/ProductDetailScreen';
import CartScreen from '@/components/Screens/CartScreen';
import { CartContext, CartProvider } from '@/components/Context/CardContext';
import { useContext } from 'react';
import Colors from '@/components/Constants/Colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Product_Detail' component={ProductDetailScreen} />
    </Stack.Navigator>
  )
}


export default function Index() {
  return (
    <CartProvider>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{ headerShown: false, tabBarShowLabel: false, }} >
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return <AntDesign name="home" size={24} color={focused ? '#E96E6E' : 'black'} />
              },


            }}
            name="Home-Stack"
            component={MyStack}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return <Ionicons name="reorder-four" size={24} color={focused ? '#E96E6E' : 'black'} />
              },
            }}
            name='Reorder'
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                const { carts }: any = useContext(CartContext)
                return (
                  <View style={{ position: 'relative' }}>
                    <FontAwesome name="cart-plus" size={24} color={focused ? '#E96E6E' : 'black'} />
                    <View style={{
                      height: 16,
                      width: 16,
                      borderRadius: 8,
                      backgroundColor: Colors.primary,
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                      top: -10,
                      right: -11
                    }}>
                      <Text style={{ fontSize: 10, color: Colors.white, fontWeight: '500' }}>{carts?.length}</Text>
                    </View>
                  </View>
                )
              },
            }}
            name='Cart'
            component={CartScreen}

          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {

                return <Feather name="user" size={24} color={focused ? '#E96E6E' : 'black'} />
              }
            }}
            name='Account'
            component={HomeScreen}
          />


        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}