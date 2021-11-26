import { StyleSheet } from 'react-native'

const Colors = {
    primary: '#bb86fc',
    primaryVariant: '#3700b3',
    secondary: '#03dac6',
    background: '#121212',
    error: '#cf6679',
    onPrimary: '#000000',
    onBackground: '#ffffff'
}

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background
    }
})