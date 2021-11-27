import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from '../theme/styles'
import Colors from '../theme/colors'
import Navbar from '../components/Navbar'
import { ScrollView } from 'react-native-gesture-handler'

const Team = ({ route, navigation }) => {
    // Configure states
    const [isLoading, setLoading] = useState(true)
    const [team, setTeam] = useState({})

    const getTeam = async () => {
        try {
            const _id = route.params._id
            const response = await fetch(`http://tournaments.tech/query?team=${_id}`)
            const json = await response.json()
            setTeam(json)
        }

        catch (error) {
            console.error(error)
        }

        finally {
            setLoading(false)
        }
    }

    useEffect(() => { getTeam() }, [])

    return (
        isLoading ? <ActivityIndicator /> : (
            <SafeAreaView style={Styles.container}>
                <ScrollView>
                    <Text style={Styles.screenTitle}>{team.codes[0]} | {team.tournaments[0].fullNames}</Text>
                </ScrollView>
                <Navbar from='Team' />
            </SafeAreaView>
        )
    )
}

export default Team