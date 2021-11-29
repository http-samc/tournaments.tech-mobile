import React, { useState, useEffect } from 'react'
import Styles from '../theme/styles'
import Colors from '../theme/colors'
import { Text, ActivityIndicator, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/core';

import Row from '../components/Row';

const Leaderboard = () => {
    // Navigation config
    const navigation = useNavigation();

    // Leaderboard dimensions config
    const HEIGHT = Dimensions.get('window').height;
    const ROWS = Math.round(HEIGHT / 85)

    // Configure fonts
    const loaded = useFonts({
        MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
        MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    });

    // Configure states
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [visibleLeaders, setVisibleLeaders] = useState([0, ROWS])

    // Check for assets
    if (!loaded)
        return null

    const getLeaderboard = async () => {
        try {
            const response = await fetch('http://tournaments.tech/leaders')
            const json = await response.json()
            setData(json)
        }

        catch (error) {
            console.error(error)
        }

        finally {
            setLoading(false)
        }
    }

    const prevPage = () => {
        var low = visibleLeaders[0] - ROWS
        if (low < 0) low = 0
        var high = low + ROWS

        setVisibleLeaders([low, high])
    }

    const nextPage = () => {
        var low = visibleLeaders[1]
        var high = visibleLeaders[1] + ROWS

        if (high >= data.length + ROWS || low <= -ROWS) return

        setVisibleLeaders([low, high])
    }

    useEffect(() => { getLeaderboard() }, [])

    const leaders = data.slice(visibleLeaders[0], visibleLeaders[1])

    return (
        isLoading ? <ActivityIndicator /> : (
            <SafeAreaView style={Styles.container}>

                <Text style={Styles.screenTitle}>2021-22 Leaderboard</Text>

                <View style={Styles.table}>

                    <View style={[Styles.tableRow, Styles.tableHeaderWrapper]}>
                        <Text style={Styles.tableHeader}>Rank</Text>
                        <Text style={Styles.tableHeader}>Bids</Text>
                        <Text style={Styles.tableHeader}>Team</Text>
                    </View>

                    {
                        leaders.map((team) => {
                            return <Row key={team._id} team={team} />
                        })
                    }

                </View>

                <View style={Styles.paginationWrapper}>

                    <TouchableOpacity onPress={prevPage}>
                        <AntDesign name='leftcircleo' style={Styles.paginationButton} size={24} color={Colors.primaryVariant} />
                    </TouchableOpacity>

                    <Text style={Styles.paginationStatus}>{Math.round(visibleLeaders[0] / ROWS) + 1} of {Math.round(data.length / ROWS) + 1}</Text>

                    <TouchableOpacity onPress={nextPage}>
                        <AntDesign name='rightcircleo' style={Styles.paginationButton} size={24} color={Colors.primaryVariant} />
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        )
    )
}

export default Leaderboard