import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';



import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = () => {

    const navigation = useNavigation();

    return (


        <View style={styles.container}>


                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        navigation.navigate('Guests Screen');
                    }}
                    style={{
                        textInput: styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyDH3imine2M042LWRN1mEr24bpU7iS4dmQ',
                        language: 'en',
                        type: '(cities)'
                    }}
                    suppressDefaultStyles
                    renderRow = {(item) => <SuggestionRow item={item } />}
                />



        </View>
    );
};


export default DestinationSearchScreen;