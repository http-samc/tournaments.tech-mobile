import React from 'react'
import { View } from 'react-native'
import WebView from 'react-native-webview'
import Styles from '../theme/styles'

const Browser = ({ route, navigation }) => {
    return (
        <View style={Styles.container}>
            <WebView
                source={{ uri: route.params.url }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Browser