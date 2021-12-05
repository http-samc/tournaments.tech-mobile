import React, { useState, useEffect } from 'react'
import Styles from '../theme/styles'
import { MarkdownStyles } from '../theme/markdown';
import { Text, View } from 'react-native'
import Markdown from 'react-native-markdown-display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, RefreshControl } from 'react-native';
import Colors from '../theme/colors';
import { useNavigation } from '@react-navigation/core';

const Bids = () => {
    const navigation = useNavigation()

    const [bidList, setBidList] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setLoading(true);
        setRefreshing(false);
    }, []);

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

    const onLinkPress = (url) => {
        id = url.replace('http://tournaments.tech/?team=', '')
        navigation.navigate('Team', { _id: id })
        return false;
    }

    useEffect(() => { getBidList() }, [isLoading])


    if (isLoading) return (
        <View style={Styles.loadingContainer}>
            <ActivityIndicator
                collor={Colors.primary}
            />
        </View>
    )

    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.screenTitle}>2021-22 Bid List</Text>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Markdown style={MarkdownStyles} onLinkPress={onLinkPress}>
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