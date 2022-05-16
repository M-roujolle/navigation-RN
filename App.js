import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabNavigation from './src/navigation/TabNavigation'
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => (

  <View style={{ flex: 1 }}>
    <TabNavigation />
  </View>
)

export default App