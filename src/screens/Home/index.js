import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles';


const HomeScreen = () => {
    return(
        <View>
            <Pressable
                style={styles.searchButton}    
                onPress={() => console.warn("search btn clicked")}
            >
            <FontAwesome5 name="search" size={25} color={"orange"} />
            <Text style={styles.searchButtonText}>Where R U going?</Text>
            </Pressable>


            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} 
            style={styles.image}>

            

            <Text style={styles.title}>Party People</Text>

            <Pressable
                style={styles.button}
                onPress={() => console.warn('Explore btn clicked')}
            >
                <Text style={styles.buttonText}>Find Party</Text>
            </Pressable> 

            
            </ImageBackground>

        </View>

    );

};

export default HomeScreen;