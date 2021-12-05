import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../theme/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core';

const About = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.screenTitle}>tournaments.tech</Text>
            <ScrollView>
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
                        onPress={() => Linking.openURL('http://tournaments.tech/methodology')}>
                        ranking methodology
                    </Text>
                    <Text style={Styles.link}
                        onPress={() => navigation.navigate('Browser', { url: 'http://tournaments.tech/issues-mobile' })}>
                        submit feedback/issues
                    </Text>
                    <Text style={Styles.link}
                        onPress={() => Linking.openURL('https://github.com/http-samc/tabroom-API')}>
                        view our source code
                    </Text>
                    <Text style={Styles.link}
                        onPress={() => Linking.openURL('http://tournaments.tech/')}>
                        tournaments.tech (web)
                    </Text>
                </View>
            </ScrollView>
            <Text style={Styles.footer} onPress={() => Linking.openURL('https://www.smrth.dev')}>created with 💙 & ☕ by <Text style={Styles.footerLink}>@smrth</Text></Text>
        </SafeAreaView>
    )
}

export default About