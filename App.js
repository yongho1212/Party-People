/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home/index';
import SearchResultsScreen from './src/screens/SearchResult/index';
import DestinationSearchScreen from './src/screens/DestinationSearch/index'
import GuestScreen from './src/screens/Guests/index'

import Post from './src/components/Post';
import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[2];

const App: () => React$Node = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*<HomeScreen/>*/}
        {/*<Post post={post1} />*/}

        {/*<SearchResultsScreen/>*/}
        {/*<DestinationSearchScreen/>*/} 
        
        <GuestScreen/>
  
      </SafeAreaView>
    </>
  );
};

export default App;
