
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const DrivingScreen = () => {
  return (
    <View style={[styles.container]}>
      {/* <Text style={[styles.title]}>Driving Map</Text> */}

      <MapView
        style={[styles.map]}
        initialRegion={{
          latitude: 31.5326,
          longitude: 35.0998,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: 31.5326,
            longitude: 35.0998,
          }}
          title="Pickup Location"
          description="Example pickup point"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F2',
    // marginTop: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6D3D59',
    textAlign: 'center',
    padding: 15,
  },

  map: {
    flex: 1,
  },
});

export default DrivingScreen;
