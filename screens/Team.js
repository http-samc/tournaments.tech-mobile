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

    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);

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

    if (isLoading) {
        return null
    }

    // Getting derived team stats
    var breakRecord = '0-0 (0.00%)'
    if (team.breakRecord)
        breakRecord = `${Math.round(team.breakRecord[0] / (team.breakRecord[0] + team.breakRecord[1]) * 100)}% (${team.breakRecord[0]}-${team.breakRecord[1]})`
    var prelimRecord = `${Math.round(team.prelimRecord[0] / (team.prelimRecord[0] + team.prelimRecord[1]) * 100)}% (${team.prelimRecord[0]}-${team.prelimRecord[1]})`

    return (
        isLoading ? <ActivityIndicator /> : (
            <SafeAreaView style={Styles.container}>
                <Text style={Styles.screenTitle}>{team.codes[0]}</Text>
                <Text style={Styles.screenSubtitle}>{team.tournaments[0].fullNames}</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 35 }}>
                    <Text style={Styles.teamSectionTitle}>Comp. Performance</Text>
                    <View style={Styles.teamSection}>
                        <Text style={Styles.teamStat}>OTR Score 🧮 : {team.otrScore}</Text>
                        <Text style={Styles.teamStat}>National Rank 🏆 : {team.rank}</Text>
                    </View>
                    <Text style={Styles.teamSectionTitle}>UK TOC Eligibility</Text>
                    <View style={Styles.teamSection}>
                        <Text style={Styles.teamStat}>Gold Bids 🥇: {team.goldBids}</Text>
                        <Text style={Styles.teamStat}>Silver Bids 🥈: {team.silverBids}</Text>
                        <Text style={Styles.teamStat}>Qual'd (Gold): {team.goldBids >= 2 ? '✅ ' : '❌'}</Text>
                        <Text style={Styles.teamStat}>Qual'd (Silver): {team.silverBids + team.goldBids > 0 ? '✅ ' : '❌'}</Text>
                    </View>
                    <Text style={Styles.teamSectionTitle}>Individual Metrics</Text>
                    <View style={Styles.teamSection}>
                        <Text style={Styles.teamStat}>Comp. Break Rate 🍾 : {team.breakPCT * 100}%</Text>
                        <Text style={Styles.teamStat}>Prelim Record 🙌 : {prelimRecord}</Text>
                        <Text style={Styles.teamStat}>Break Record 🎉 : {breakRecord}</Text>
                    </View>
                    <Text style={Styles.teamSectionTitle}>Tournaments (21-22)</Text>
                    {
                        team.tournaments.map((tourn, idx) => {

                            // Legacy code from web
                            if (!tourn.eliminated) var elim = "championed 🎖️";
                            else if (typeof tourn.eliminated == 'string') var elim = "prelims";
                            else if (tourn.eliminated[0] == 0 && tourn.eliminated[1] == 0) var elim = `losing bye with ${tourn.eliminated[4]} in ${tourn.eliminated[3]}`;
                            else if (tourn.eliminated[0] == null || tourn.eliminated[1] == null) var elim = `same-team conflict with ${tourn.eliminated[4]} in ${tourn.eliminated[3]}`;
                            else var elim = `${tourn.eliminated[0]}-${tourn.eliminated[1]} to ${tourn.eliminated[4]} in ${tourn.eliminated[3]}`;

                            var ghost = "";
                            if (tourn.ghostBid) ghost = " (Ghost Bid 👻)";
                            if (tourn.goldBid) var bid = `gold 🥇${ghost}`;
                            else if (tourn.silverBids) var bid = `silver 🥈${ghost}`;
                            else var bid = "no bid";

                            if (tourn.speaks && tourn.speaks[0].name && tourn.speaks[1].name) {
                                var s1 = `${tourn.speaks[0].name.split(' ')[1]}`
                                var s1res = `${tourn.speaks[0].rawAVG} (raw) ${tourn.speaks[0].adjAVG} (adj)`

                                var s2 = `${tourn.speaks[1].name.split(' ')[1]}`;
                                var s2res = `${tourn.speaks[1].rawAVG} (raw) ${tourn.speaks[1].adjAVG} (adj)`
                            }
                            else {
                                var s1 = team.fullNames.split(" ")[0];
                                var s1res = 'no scored speaks'

                                var s2 = team.fullNames.split(" ")[3];
                                var s2res = 'no scored speaks'
                            }

                            return (
                                <View style={Styles.teamSection} key={idx}>
                                    <Text style={Styles.tournName}>{tourn.name}</Text>
                                    <Text style={Styles.tournStat}>
                                        OTR Comp. 📚: {tourn.tournamentComp}
                                    </Text>
                                    <Text style={Styles.tournStat}>
                                        Prelim Record 📝: {tourn.prelimRecord[0]}-{tourn.prelimRecord[1]}
                                    </Text>
                                    <Text style={Styles.tournStat}>
                                        Prelim Rank 🗣️: {tourn.prelimRank[0]}/{tourn.prelimRank[1]}
                                    </Text>
                                    <Text style={Styles.tournStat}>
                                        OPwpm 💪: {tourn.OPwpm}
                                    </Text>
                                    <Text style={Styles.tournStat}>
                                        Break Record 📝: {tourn.breakRecord ? tourn.breakRecord[0] + '-' + tourn.breakRecord[1] : 'no break'}
                                    </Text>
                                    <Text style={Styles.tournStat}>
                                        Eliminated ❌: {elim}
                                    </Text>
                                    <Text style={Styles.tournStat}>
                                        Bid 🏆: {bid}
                                    </Text>
                                    <Text style={Styles.tournStat}>
                                        {s1}'s speaks 🎤: {s1res}
                                    </Text>
                                    <Text style={Styles.tournStat}>
                                        {s2}'s speaks 🎤: {s2res}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <Navbar from='Team' />
            </SafeAreaView>
        )
    )
}

export default Team