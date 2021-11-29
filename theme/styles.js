import { StyleSheet } from 'react-native'
import Colors from '../theme/colors'

var Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    screenTitle: {
        fontSize: 25,
        paddingHorizontal: 5,
        textAlign: 'center',
        color: Colors.primary,
        marginVertical: 10,
        fontFamily: 'MontserratBold'
    },
    screenSubtitle: {
        fontSize: 15,
        paddingHorizontal: 5,
        paddingBottom: 5,
        textAlign: 'center',
        color: Colors.textImportant,
        fontFamily: 'MontserratBold'
    },
    navBar: {
        backgroundColor: Colors.onBackground,
        marginBottom: -5,
        borderTopColor: Colors.secondary
    },
    text: {
        color: Colors.primaryVariant,
        fontFamily: 'MontserratRegular',
        padding: 20,
        textAlign: 'center',
        maxWidth: 250,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: Colors.onBackground,
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 15
    },

    // Table
    table: {
        padding: 10,
        backgroundColor: Colors.onBackground,
        borderRadius: 10,
        width: '95%',
        maxWidth: 600,
        alignSelf: 'center',
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
        alignItems: 'center',
        marginBottom: 20
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
    },

    // TeamView
    teamSectionTitle: {
        fontFamily: 'MontserratBold',
        fontSize: 25,
        color: Colors.secondary,
        marginTop: 15,
        textAlign: 'center',
    },
    teamSection: {
        margin: 10,
        padding: 10,
        backgroundColor: Colors.onBackground,
        borderRadius: 10,
        width: '95%',
        maxWidth: 600,
        alignSelf: 'center'
        // intog w/ table style
    },
    teamStat: {
        fontFamily: 'MontserratRegular',
        fontSize: 25,
        color: Colors.primaryVariant,
        textAlign: 'center',
    },
    tournName: {
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        color: Colors.textImportant,
        textAlign: 'center',
        marginBottom: 5
    },
    tournStat: {
        fontFamily: 'MontserratRegular',
        fontSize: 20,
        color: Colors.primaryVariant,
        textAlign: 'left',
    },

    // Search view
    searchBar: {
        fontFamily: 'MontserratRegular',
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: Colors.onBackground,
        borderWidth: 3,
        padding: 15,
        width: '60%',
        maxWidth: 350,
        marginVertical: 15,
        color: Colors.secondary
    },
    resultsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
    },
    result: {
        backgroundColor: Colors.onBackground,
        padding: 15,
        borderRadius: 10,
        width: '60%',
        maxWidth: 350,
        marginBottom: 10,
    },
    resultText: {
        color: Colors.primaryVariant,
        fontFamily: 'MontserratRegular',
        textAlign: 'center'
    },

    // Bids view
    bidList: {
        color: Colors.primaryVariant,
        fontFamily: 'MontserratRegular',
        padding: 20
    }
})

export default Styles = Styles