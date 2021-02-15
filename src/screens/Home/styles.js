import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'orange',
        marginTop:10,
        marginLeft: 10
    },
    button: {
        backgroundColor: '#e6e6e6',
        width: 300,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        borderWidth: 6,
        borderColor: 'orange',
        marginLeft:40
    },
    buttonText: {   
        fontSize: 19,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#e6e6e6',
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        top: 40,
        zIndex: 100,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        borderColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position:'absolute', 
    },
     searchButtonText: {   
        fontSize: 19,
        fontWeight: 'bold'
    },
});

export default styles;