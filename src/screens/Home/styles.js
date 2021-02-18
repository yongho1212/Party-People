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
        color: '#FFF',
        marginTop:10,
        marginLeft: 10,
        textShadowColor: "black",
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:0,
    },
    button: {
        backgroundColor: '#FFF',
        width: 300,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        borderWidth: 6,
        borderColor: '#f15454',
        marginLeft:40
    },
    buttonText: {   
        fontSize: 19,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#FFF',
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        top: 40,
        zIndex: 100,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        borderColor: '#f15454',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position:'absolute', 
        marginTop: 30
    },
     searchButtonText: {   
        fontSize: 19,
        fontWeight: 'bold'
    },
});

export default styles;