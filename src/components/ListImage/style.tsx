import { StyleSheet, Dimensions } from 'react-native'

const withScreen = Dimensions.get('window').width

const AppStyles = StyleSheet.create({
    listImages: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }, 
    image: {
        width: withScreen / 2 - 10,
        height: withScreen / 2 - 10,
        flexDirection: 'row',
        backgroundColor: '#f0eeed'
    }
});

export default AppStyles