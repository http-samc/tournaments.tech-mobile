import Colors from './colors';

export const MarkdownStyles = {
    body: {
        padding: 20
    },
    heading2: {
        flex: 1,
        fontFamily: 'MontserratBold',
        fontSize: 25,
        color: Colors.secondary,
        marginVertical: 15,
        alignSelf: 'center'
    },
    table: {
        borderWidth: 1,
        padding: 10,
        borderColor: Colors.onBackground,
        borderRadius: 10,
        backgroundColor: Colors.onBackground
    },
    tbody: {},
    th: {
        flex: 1,
        padding: 5,
        color: Colors.primaryVariant,
        fontFamily: 'MontserratBold'
    },
    tr: {
        borderBottomWidth: 10,
        borderColor: Colors.onBackground,
        color: Colors.secondary,
        fontFamily: 'MontserratRegular',
        flexDirection: 'row',
        //height: 100
    },
    thead: {
        color: Colors.primaryVariant,
        fontFamily: 'MontserratBold',
    },
    td: {
        flex: 1,
        padding: 5,
    },
    link: {
        textDecorationLine: 'none',
        fontFamily: 'MontserratBold',
        color: Colors.textImportant
    },
    paragraph: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        fontFamily: 'MontserratBold',
        textAlign: 'center',
        color: Colors.error,
    },
    hardbreak: {
        width: '100%',
        height: 1,
    }
};