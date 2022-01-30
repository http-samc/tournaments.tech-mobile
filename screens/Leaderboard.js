import React, { useState, useEffect, useCallback } from 'react'
import Styles from '../theme/styles'
import Colors from '../theme/colors'
import { Text, RefreshControl, ActivityIndicator, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';

import Row from '../components/Row';
import BlankRow from '../components/BlankRow'

const Leaderboard = () => {
    // Navigation config
    const navigation = useNavigation();

    // Leaderboard dimensions config
    const HEIGHT = Dimensions.get('window').height;
    const ROWS = Math.round(HEIGHT / 95)

    // Configure fonts
    const loaded = useFonts({
        MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
        MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    });

    // Configure states
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [visibleLeaders, setVisibleLeaders] = useState([0, ROWS])
    const [refreshing, setRefreshing] = useState(false);

    const save = async (key, val) => await SecureStore.setItemAsync(key, val)

    const getLeaderboard = async () => {
        try {
            const response = await fetch('http://localhost:8080//leaders')
            const json = await response.json()
            for (let i = 0; i < json.length % ROWS; i++)
                json.push({ _id: null })

            setData(json)
            lastUpdated = `Last Updated: ${json[0].lastUpdated}`
            await save("LAST_UPDATED", lastUpdated)
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

    const firstPage = () => {
        var low = 0
        var high = low + ROWS

        setVisibleLeaders([low, high])
    }

    const lastPage = () => {
        var high = data.length
        var low = high - ROWS

        setVisibleLeaders([low, high])
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setLoading(true);
        setRefreshing(false);
    }, []);

    useEffect(() => { getLeaderboard() }, [isLoading])

    const leaders = data.slice(visibleLeaders[0], visibleLeaders[1])

    // Check for assets
    if (!loaded)
        return null

    if (isLoading) return (
        <View style={Styles.loadingContainer}>
            <ActivityIndicator
                collor={Colors.primary}
            />
        </View>
    )

    return (
        <SafeAreaView style={Styles.container}>

            <Text style={Styles.screenTitle}>2021-22 Leaderboard</Text>
            <ScrollView
                contentContainerStyle={{ marginVertical: 20 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={Colors.error}
                        colors={[Colors.error]}
                    />
                }
            >
                <View style={Styles.table}>

                    <View style={[Styles.tableRow, Styles.tableHeaderWrapper]}>
                        <Text style={Styles.tableHeader}>Rank</Text>
                        <Text style={Styles.tableHeader}>Bids</Text>
                        <Text style={Styles.tableHeader}>Team</Text>
                    </View>

                    {
                        leaders.map((team, idx) => {
                            if (!team._id)
                                return <BlankRow key={idx} />
                            return <Row key={idx} team={team} />
                        })
                    }

                </View>
            </ScrollView>
            <View style={Styles.paginationWrapper}>

                <TouchableOpacity onPress={firstPage}>
                    <AntDesign name='banckward' style={Styles.paginationButton} size={20} color={Colors.primaryVariant} />
                </TouchableOpacity>

                <TouchableOpacity onPress={prevPage}>
                    <AntDesign name='leftcircleo' style={Styles.paginationButton} size={24} color={Colors.primaryVariant} />
                </TouchableOpacity>

                <Text style={Styles.paginationStatus}>{Math.round(visibleLeaders[0] / ROWS) + 1} of {Math.round(data.length / ROWS)}</Text>

                <TouchableOpacity onPress={nextPage}>
                    <AntDesign name='rightcircleo' style={Styles.paginationButton} size={24} color={Colors.primaryVariant} />
                </TouchableOpacity>

                <TouchableOpacity onPress={lastPage}>
                    <AntDesign name='forward' style={Styles.paginationButton} size={20} color={Colors.primaryVariant} />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )

}

export default Leaderboard