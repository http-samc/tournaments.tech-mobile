import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Styles from '../theme/styles'
import { useNavigation } from '@react-navigation/core';

const Row = (props) => {
    // Navigation config
    const navigation = useNavigation();

    // Need to set as constant so it isn't shared between states
    const team = props.team

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Team', { _id: team._id })}>
            <View style={[Styles.tableRow, Styles.teamRow]}>
                <Text style={Styles.tableCell}>{team.rank}</Text>
                <Text style={Styles.tableCell}>{team.goldBids + .5 * team.silverBids}</Text>
                <Text style={[Styles.teamCodeCell]}>{team.codes[0]}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row