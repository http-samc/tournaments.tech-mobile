import React, { useState, useEffect } from 'react'
import Styles from '../theme'
import { Text, FlatList, ActivityIndicator, View } from 'react-native'
import { DataTable } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const Leaderboard = () => {
    const HEIGHT = Dimensions.get('window').height;
    const ROWS = Math.round(HEIGHT / 60)

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [visibleLeaders, setVisibleLeaders] = useState([0, ROWS])

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
        low = visibleLeaders[0] - ROWS
        if (low < 0) low = 0
        high = low + ROWS

        setVisibleLeaders([low, high])
    }

    const nextPage = () => {
        low = visibleLeaders[1]
        high = visibleLeaders[1] + ROWS

        if (high >= data.length + ROWS || low <= -ROWS) return

        setVisibleLeaders([low, high])
    }

    useEffect(() => { getLeaderboard() }, [])

    leaders = data.slice(visibleLeaders[0], visibleLeaders[1])

    return (
        isLoading ? <ActivityIndicator /> : (
            <SafeAreaView>
                <ScrollView>

                    <DataTable>

                        <DataTable.Header>
                            <DataTable.Title>Rank</DataTable.Title>
                            <DataTable.Title>🥇</DataTable.Title>
                            <DataTable.Title>🥈</DataTable.Title>
                            <DataTable.Title>Team</DataTable.Title>
                        </DataTable.Header>

                        {
                            leaders.map((team) => {
                                return (
                                    <DataTable.Row key={team._id}>
                                        <DataTable.Cell style={{ color: "#fff" }}>{team.rank}</DataTable.Cell>
                                        <DataTable.Cell>{team.goldBids}</DataTable.Cell>
                                        <DataTable.Cell>{team.silverBids}</DataTable.Cell>
                                        <DataTable.Cell>{team.codes[0]}</DataTable.Cell>
                                    </DataTable.Row>
                                )
                            })
                        }

                    </DataTable>
                    <TouchableOpacity onPress={prevPage}>
                        <AntDesign name="leftcircleo" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={nextPage}>
                        <AntDesign name="rightcircleo" size={24} color="black" />
                    </TouchableOpacity>
                </ScrollView>

            </SafeAreaView>
        )
    )
}

export default Leaderboard