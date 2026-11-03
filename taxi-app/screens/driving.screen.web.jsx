
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

const DrivingScreen = () => {
  const route = useRoute();
  const data = route.params?.data;

  return (
    <View style={styles.container}>
      <View style={[styles.txt1]}>
        <Text style={[styles.title]}>Driving Screen</Text>
        <Text style={[styles.message]}>
          Map view is available in the mobile app.
        </Text>
      </View>
      <View style={[styles.txt2]}>
        <Text  style={styles.data}>Name:  {data?.name}</Text>
        <Text style={styles.data}>Location: {data?.location}</Text>
        <Text style={styles.data}>Destination: {data?.destination}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
 
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  txt1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
  data: {
    fontSize: 16,
    justifyContent: 'left',
  }
});

export default DrivingScreen;
