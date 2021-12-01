import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Styles from '../theme/styles'
import { useNavigation } from '@react-navigation/core';

const BlankRow = (props) => {

    return (
        <TouchableOpacity>
            <View style={[Styles.tableRow, Styles.teamRow]}>
            </View>
        </TouchableOpacity>
    )
}

export default BlankRow