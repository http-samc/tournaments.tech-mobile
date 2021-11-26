import React, { useState, useEffect } from 'react'
import Styles from '../theme'
import { Text, FlatList, ActivityIndicator, View } from 'react-native'

const Leaderboard = () => {

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

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

    useEffect(() => { getLeaderboard() }, [])

    return (
        <View style={Styles.container}>
            {
                isLoading ? <ActivityIndicator /> :
                    (
                        <FlatList
                            data={data}
                            keyExtractor={({ _id }, index) => _id}
                            renderItem={({ item }) => (
                                <Text>{item.codes[0]}, {item.breakPCT}</Text>
                            )}
                        />
                    )
            }
        </View>
    )
}

export default Leaderboard