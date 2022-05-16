import { StyleSheet, Text, View, Image } from 'react-native'
import * as React from 'react'
import ImagePage from '../screens/ImageScreen'
import TextPage from '../screens/TextScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'







const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (

        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen name="Image" component={ImagePage} options={{ tabBarIcon: () => (<Icons name="images" size={30} color="blue" />) }} />
                <Tab.Screen name="Texte" component={TextPage} options={{ tabBarIcon: () => (<Icon name="format-text" size={30} color="blue" />) }} />

            </Tab.Navigator>
        </NavigationContainer >
    )

}

export default TabNavigation