import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();



    return(
        <View>
            <Pressable
                style={styles.searchButton}    
                onPress={() => navigation.navigate('Destination Search')}
            >
            <FontAwesome5 name="search" size={25} color={"#f15454"} />
            <Text style={styles.searchButtonText}>Where R U going?</Text>
            </Pressable>


            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} 
            style={styles.image}>

            

            <Text style={styles.title}>Start Journey with us</Text>

            <Pressable
                style={styles.button}
                onPress={() => console.warn('Explore btn clicked')}
            >
                <Text style={styles.buttonText}>Look around</Text>
            </Pressable> 

            
            </ImageBackground>

        </View>

    );

};

export default HomeScreen;