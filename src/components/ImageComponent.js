import { StyleSheet, Text, View, Image } from 'react-native'
import * as React from 'react'

const ImageComponent = () => (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/img/spirit.jpg')} style={{ width: '90%', height: '90%' }} />
    </View>


)

export default ImageComponent