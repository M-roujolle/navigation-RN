import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/AntDesign' //changer le nom quand on veut appeler une autre bibliotheque
import ImageComponent from '../components/ImageComponent'
import TextComponent from '../components/TextComponent'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (

        <NavigationContainer>

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName
                        if (route.name === 'Image') {
                            Platform.OS === 'android'
                                ?
                                (iconName = focused ? 'md-image' : 'md-image-outline')
                                :
                                (iconName = focused ? 'ios-image' : 'ios-image-outline')
                        }
                        else if (route.name === 'Text') {
                            Platform.OS === 'android'
                                ?
                                (iconName = focused ? 'md-text' : 'md-text-outline')
                                :
                                (iconName = focused ? 'ios-text' : 'ios-text-outline')
                        }
                        return <Ionicons name={iconName} size={32} />
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray'
                })}>

                <Tab.Screen
                    name={"Image"}
                    component={ImageComponent}
                />
                <Tab.Screen
                    name="Text"
                    component={TextComponent}
                />

            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default TabNavigation
