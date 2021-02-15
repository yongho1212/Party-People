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
import Post from './src/components/Post';


const App: () => React$Node = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*<HomeScreen/>*/}
        <Post/>
      </SafeAreaView>
    </>
  );
};

export default App;
