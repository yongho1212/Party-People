import React from 'react'
import {View, Text} from 'react-native';
import Marker from 'react-native-maps';

const CustomMarker= (props) => {

    const {coordinate, price} = props;

    return(
        <Marker coordinate={coordinate}>
        <View style={{
            backgroundColor: 'white',
            padding: 5,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            width: 20,
            height: 20

        }}>
            <Text style={{
                fontWeight: 'bold'
            }}>
                ${price}</Text>
        </View>
    </Marker>
    );
};

export default CustomMarker;
