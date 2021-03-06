import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'; 

const GuestScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();

    return(
        <View >
            {/* Row1: Adults */}
            <View style={styles.row}>
                {/* Titles */}
            <View>
                <Text style={{fontWeight: "bold"}}>Adults</Text>
                <Text style={{color:"#8d8d8d"}}>Age 13 or above</Text>
            </View>
                {/* Buttons with valu */}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {/* - */}
                    <Pressable
                    onPress={() => setAdults(Math.max(0, adults -1))}
                    style={styles.button}
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={{marginHorizontal:20, fontSize:16}}>{adults}</Text>
                    {/* + */}
                    <Pressable
                    onPress={() => setAdults(adults +1)}
                    style={styles.button}
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            {/* second one ---------------------------------- */}

            <View style={styles.row}>
                {/* Titles */}
            <View>
                <Text style={{fontWeight: "bold"}}>Children</Text>
                <Text style={{color:"#8d8d8d"}}>Age 2 - 12</Text>
            </View>
                {/* Buttons with value */}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {/* - */}
                    <Pressable
                    onPress={() => setChildren(Math.max(0, children -1))}
                    style={styles.button}
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={{marginHorizontal:20, fontSize:16}}>{children}</Text>
                    {/* + */}
                    <Pressable
                    onPress={() => setChildren(children +1)}
                    style={styles.button}
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            {/* third one ---------------------------------- */}

            <View style={styles.row}>
                {/* Titles */}
            <View>
                <Text style={{fontWeight: "bold"}}>Infants</Text>
                <Text style={{color:"#8d8d8d"}}>Age 13 or above</Text>
            </View>
                {/* Buttons with valu */}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {/* - */}
                    <Pressable
                    onPress={() => setInfants(Math.max(0, infants -1))}
                    style={styles.button}
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>-</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={{marginHorizontal:20, fontSize:16}}>{infants}</Text>
                    {/* + */}
                    <Pressable
                    onPress={() => setInfants(infants +1)}
                    style={styles.button}
                    >
                    <Text style={{fontSize:20, color:'#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
        <Pressable 
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            })
          }

          style={{
            backgroundColor: "#f15454",
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal:20,
            marginTop: 40,
            borderRadius: 10
        }}>

            <Text style={{fontSize:20 , fontWeight:'bold', color:"#FFF"}}>Search</Text>
        </Pressable>
        
        
        </View>
    );
};

export default GuestScreen;