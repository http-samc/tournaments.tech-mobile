import React, { useState, useEffect } from 'react'
import { Text, KeyboardAvoidingView, View } from 'react-native'
import Styles from '../theme/styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Colors from '../theme/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Platform } from 'react-native'

import Result from '../components/Result'

const Search = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const startQuery = async () => {
        try {
            const response = await fetch(`http://localhost:8080//query?term=${query}`)
            const json = await response.json()
            setResults(json)
        }

        catch (error) {
            console.error(error)
        }
    }
    return (
        <KeyboardAvoidingView
            style={Styles.container}
            behavior={(Platform.OS == "ios" ? "padding" : undefined)}
        >
            <SafeAreaView>
                <Text style={Styles.screenTitle}>Team Lookup</Text>
                <TextInput
                    style={Styles.searchBar}
                    placeholder='search by code or names...'
                    placeholderTextColor={Colors.secondary}
                    onChangeText={text => setQuery(text)}
                    value={query}
                    returnKeyType='search'
                    onSubmitEditing={e => startQuery()}
                >
                </TextInput>
                <ScrollView contentContainerStyle={Styles.resultsContainer}>
                    {
                        results.map((result, idx) => {
                            if (idx > 7)
                                return
                            return <Result key={result._id} team={result} />
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Search