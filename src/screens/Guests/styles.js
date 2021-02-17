import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button:{
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',

    },
    row:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },

});

export default styles;