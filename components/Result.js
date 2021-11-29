import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from '../theme/styles'

import { useNavigation } from '@react-navigation/core';

const Result = (props) => {
    const navigation = useNavigation()

    const _id = props.team._id
    const code = props.team.codes[0]

    return (
        <TouchableOpacity style={Styles.result} onPress={() => navigation.navigate('Team', { _id: _id })}>
            <Text style={Styles.resultText}>{code}</Text>
        </TouchableOpacity>
    )
}

export default Result