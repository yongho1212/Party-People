import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
         padding : 5,
         height:120
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow:'hidden'
    },  
    image:{
        height:'100%',
        aspectRatio: 1,
        resizeMode: 'cover',
        
    },
    bedrooms: {
        marginVertical: 10,
        color: "#5b5b5b"
    },
    descriptions: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10   
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold',

    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    }

}); 

export default styles;