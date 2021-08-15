// Component parts
// Part 1 : import
// Part 2 : JSX
// Part 3 : StyleSheet
// Part 4 : export

// <Part 1>
// How different components work together
import React from 'react';
// How to take some information from those components and use it directly show some content on the mobile device
import { Text, StyleSheet, View } from 'react-native';

// <Part 2>
// = const componentsScreen = function() {}
const componentsScreen = () => {
    const name = <Text style={styles.textStyle}>My name is Dennis Ha</Text>;

    // JSX syntax-> react native bundler(Babel) -> javascript
    
    return (
    <View>
        <Text style={styles.headerStyle}>Getting started with React Native!</Text>
        {name}
    </View>
    ); // ; Not necessary
};

// <Part 3>
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});

export default componentsScreen;


