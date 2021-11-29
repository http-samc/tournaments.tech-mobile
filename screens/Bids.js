import React, { useState, useEffect } from 'react'
import Styles from '../theme/styles'
import { MarkdownStyles } from '../theme/markdown';
import { StyleSheet, Text, View } from 'react-native'
import Markdown from 'react-native-markdown-display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import Colors from '../theme/colors';

const Bids = () => {
    const [bidList, setBidList] = useState('')
    const [isLoading, setLoading] = useState(true)


    const getBidList = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/http-samc/tabroom-API/main/BidList.md')
            const text = await response.text()
            setBidList(text)
        }

        catch (error) {
            console.error(error)
        }

        finally {
            setLoading(false)
        }
    }

    useEffect(() => { getBidList() }, [])


    if (isLoading) return (
        <View style={Styles.container}>
            <ActivityIndicator
                collor={Colors.primary}
            />
        </View>
    )

    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.screenTitle}>2021-22 Bid List</Text>
            <ScrollView>
                <Markdown style={MarkdownStyles}>
                    {bidList
                        .replace('<p>', '')
                        .replace('</p>', '')
                        .replace('<br>', '')
                    }
                </Markdown>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Bids