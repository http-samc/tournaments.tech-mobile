import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import Styles from '../theme/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core';
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';

const About = () => {
    const [updated, setUpdated] = useState('')

    const getUpdated = async () => {
        let updated = await SecureStore.getItemAsync("LAST_UPDATED")
        setUpdated(updated)
    }

    useEffect(() => { getUpdated() }, [])

    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.screenTitle}>tournaments.tech</Text>
            <Text style={Styles.teamSectionTitle}>why?</Text>
            <Text style={Styles.text}>
                We made this resource because there were no holistic rankings for the public forum national circuit, and existing record curations fail to collect sufficient quality data.
            </Text>
            <Text style={Styles.teamSectionTitle}>who?</Text>
            <Text style={Styles.text}>API, Mobile Apps, and Website:</Text>
            <Text style={Styles.specialLink} onPress={() => Linking.openURL("https://www.smrth.dev")}>Samarth Chitgopekar</Text>
            <Text style={Styles.text}>Ranking formula:</Text>
            <Text style={Styles.specialLink} onPress={() => Linking.openURL("https://www.instagram.com/adithyav21/")}>Adithya Vaidyanathan</Text>
            <Text style={Styles.teamSectionTitle}>more?</Text>
            <View style={Styles.linksView}>
                <Text style={Styles.link}
                    onPress={() => WebBrowser.openBrowserAsync('https://github.com/http-samc/tabroom-API/blob/main/RANKING_METHODOLOGY.md')}>
                    ranking methodology
                </Text>
                <Text style={Styles.link}
                    onPress={() => WebBrowser.openBrowserAsync('http://localhost:8080//issues-mobile')}>
                    submit feedback/issues
                </Text>
                <Text style={Styles.link}
                    onPress={() => Linking.openURL('https://github.com/http-samc/tabroom-API')}>
                    view our source code
                </Text>
                <Text style={Styles.link}
                    onPress={() => Linking.openURL('http://localhost:8080//')}>
                    tournaments.tech (web)
                </Text>
            </View>
            <Text style={Styles.footer} onPress={() => Linking.openURL('https://www.smrth.dev')}>created with 💙 & ☕ by <Text style={Styles.footerLink}>@smrth</Text></Text>
            <Text style={Styles.updated}>{updated}</Text>
        </SafeAreaView>
    )
}

export default About