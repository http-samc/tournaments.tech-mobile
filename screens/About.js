import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../theme/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const About = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.screenTitle}>tournaments.tech</Text>
            <ScrollView>
                <Text style={Styles.teamSectionTitle}>why?</Text>
                <Text style={Styles.text}>
                    we made this resource because there were no holistic rankings for the public forum national circuit, and existing record curations fail to collect sufficient quality data.
                </Text>
                <Text style={Styles.teamSectionTitle}>credits</Text>
                <Text style={Styles.text}>api created by Samarth Chitgopekar, apps developed by Samarth Chitgopekar, website written by Samarth Chitgopekar, ranking formula derived by Adithya Vaidyanathan. </Text>
                <Text style={Styles.teamSectionTitle}>resources</Text>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={() => Linking.openURL('https://github.com/http-samc/tabroom-API/blob/main/RANKING_METHODOLOGY.md')}
                >
                    <Text style={Styles.text}>methodology</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={() => Linking.openURL('http://tournaments.tech/issues')}
                >
                    <Text style={Styles.text}>report issue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={() => Linking.openURL('https://github.com/http-samc/tabroom-API')}
                >
                    <Text style={Styles.text}>source code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={() => Linking.openURL('http://tournaments.tech/')}
                >
                    <Text style={Styles.text}>website</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default About