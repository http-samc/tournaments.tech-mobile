import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const Team = (props) => {

    return (
        <View>
            <Text>{props._id}</Text>
        </View>
    )
}

export default Team

const styles = StyleSheet.create({})
