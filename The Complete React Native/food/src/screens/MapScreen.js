import React, { useState, useEffect } from 'react';
import {View, Button, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps'
import * as Location from 'expo-location'

const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);
        })
    }, []);

    // console.log(currentLocation);

    return (
        <View style={styles.container}>
            <Button 
                title="Current Location"
                onPress={() => setCurrentLocation(location)}
            />
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={region => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
        onRegionChangeComplete={region => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="this is a marker"
          description="this is a marker example"
        />
      </MapView> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 100,
    },
});

export default MapScreen;
