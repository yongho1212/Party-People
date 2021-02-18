import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/Home'
import SearchResultsScreen from '../screens/SearchResult'

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={"SearchResults"}
            component={SearchResultsScreen}
            options={{
                title: 'Search your destination'
            }}
            />
            <Stack.Screen
            name={"Welcome"}
            component={HomeScreen}
            options={{
                headerShown=false,
            }}
            />
        </Stack.Navigator>
    );
};

export default Router;