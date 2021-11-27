import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Styles from '../theme/styles'
import Colors from '../theme/colors'
import { useNavigation } from '@react-navigation/core';

const Navbar = (props) => {
    const navigation = useNavigation()

    const goHome = () => {
        if (props.from === 'Home') return
        navigation.replace('Leaderboard')
    }

    const goSearch = () => {
        if (props.from === 'Search') return
        navigation.replace('Search')
    }

    const goAbout = () => {
        if (props.from === 'About') return
        navigation.replace('About')
    }

    return (
        <View style={Styles.navBar}>
            <TouchableOpacity onPress={goSearch}>
                <AntDesign name='search1' size={24} color={Colors.primary} />
            </TouchableOpacity>

            <TouchableOpacity onPress={goHome}>
                <AntDesign name='home' size={24} color={Colors.primary} />
            </TouchableOpacity>

            <TouchableOpacity onPress={goAbout}>
                <AntDesign name='infocirlceo' size={24} color={Colors.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default Navbar