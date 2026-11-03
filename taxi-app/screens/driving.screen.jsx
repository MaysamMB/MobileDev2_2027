
import React from 'react';
import {useRoute} from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const DrivingScreen = () => {
  const route = useRoute();
  const data = route.params?.data;
        console.log('Received Data:', route.params);

  return (
    <View style={[styles.container]}>
      {/* <Text style={[styles.title]}>Driving Map</Text> */}

      <View style={[styles.txt1, styles.info_dev]}>
              <Text  style={styles.message}>Name: {data?.name}</Text>
              <Text style={styles.message}>Location: {data?.location}</Text>
              <Text style={styles.message}>Destination: {data?.destination}</Text>
              <Text style={styles.message}>Passengers: {data?.passengers}</Text>
              <Text style={styles.message}>Luggage: {data?.lugge}</Text>
              <Text style={styles.message}>Date: {data?.date ? new Date(data.date).toLocaleDateString("en-GB") : ""}</Text>
      </View>

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
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    width: '100%',
    // height: ,
    // marginTop: 20,
  },
  info_dev: {
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 40,
    height: 200,
    backgroundColor: '#e8d8df',
    padding: 10,
    borderRadius: 15,
    paddingTop: 20, 
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,  
  },
   txt1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: "white",
    // backgroundColor: '#9D5273',
    borderWidth: 1,
    borderColor: '#9D5273',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DrivingScreen;
