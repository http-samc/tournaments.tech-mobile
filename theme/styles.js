import { StyleSheet } from 'react-native'
import Colors from '../theme/colors'

export default Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        height: '100%',
    },
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.primary,
        marginVertical: 10,
        fontFamily: 'MontserratBold'
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        paddingBottom: 20,
        paddingTop: 10,
        width: '100%',
        backgroundColor: Colors.onBackground,
        bottom: 0,
        left: 0,
        right: 0
    },

    // Table
    table: {
        margin: 10,
        padding: 10,
        backgroundColor: Colors.onBackground,
        borderRadius: 10
    },
    tableHeaderWrapper: {
        marginBottom: 10,
    },
    tableHeader: {
        flex: 1,
        justifyContent: 'center',
        color: Colors.primaryVariant,
        fontFamily: 'MontserratBold'
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    teamRow: {
        padding: 5,
        height: 60
    },
    tableCell: {
        flex: 1,
        justifyContent: 'center',
        color: Colors.secondary,
        fontFamily: 'MontserratRegular'
    },
    teamCodeCell: {
        width: 200,
        flex: 1,
        justifyContent: 'flex-start',
        color: Colors.textImportant,
        fontFamily: 'MontserratRegular'
    },

    // Pagination
    paginationWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationButton: {
        marginHorizontal: 3
    },
    paginationStatus: {
        color: Colors.primaryVariant,
        marginHorizontal: 5,
        width: 60,
        textAlign: 'center',
        fontFamily: 'MontserratBold'
    }
})