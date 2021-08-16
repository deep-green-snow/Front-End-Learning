import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

<<<<<<< HEAD
const HomeScreen = () => {
  return <Text style={styles.text}>My First Expo App !!! </Text>;
=======
const HomeScreen = ({navigation}) => {
  return <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button 
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button 
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
>>>>>>> 134c977a6d7b80914421391a4aee5be98c2d0d11
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

