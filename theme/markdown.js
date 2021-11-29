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
        borderColor: Colors.secondary,
        borderRadius: 3,
    },
    thead: {
        color: Colors.primaryVariant,
        fontFamily: 'MontserratBold',
    },
    tbody: {},
    th: {
        flex: 1,
        padding: 5,
    },
    tr: {
        borderBottomWidth: 1,
        borderColor: Colors.secondary,
        color: Colors.primaryVariant,
        fontFamily: 'MontserratRegular',
        flexDirection: 'row',
    },
    td: {
        flex: 1,
        padding: 5,
    },
    link: {
        textDecorationLine: 'none',
    },
    paragraph: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        fontFamily: 'MontserratRegular',
        color: Colors.error,
    },
    hardbreak: {
        width: '100%',
        height: 1,
    }
};