
import { View, Text, StyleSheet } from 'react-native';

const DrivingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driving Screen</Text>
      <Text style={styles.message}>
        Map view is available in the mobile app.
      </Text>
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
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DrivingScreen;
