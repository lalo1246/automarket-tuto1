import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'

const HomeScreen = () => {

    useEffect(() => {
        console.log('cargo')        
    }, [])
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;
