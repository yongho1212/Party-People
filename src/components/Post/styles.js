import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
         margin: 15 
    },
    image:{
        width:'100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 14,
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