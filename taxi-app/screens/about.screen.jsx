
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AboutScreen = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.iconContainer]}>
        <MaterialCommunityIcons
          name="taxi"
          size={55}
          color="#9D5273"
        />
      </View>

      <Text style={[styles.title]}>About Taxi App</Text>

      <Text style={[styles.description]}>
        Your reliable ride, anytime and anywhere.
      </Text>

      <View style={[styles.card]}>
        <Text style={[styles.cardTitle]}>About Our App</Text>

        <Text style={[styles.cardText]}>
          Our Taxi App makes transportation easier and more
          convenient. You can request a taxi, explore driving
          information, and enjoy a simple user experience.
        </Text>
      </View>

      <Text style={[styles.footer]}>
        Safe rides, comfortable journeys.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F2',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E8D5DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6D3D59',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: '#8B8589',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8D5DF',
    elevation: 3,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#9D5273',
    marginBottom: 12,
  },

  cardText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#493342',
    textAlign: 'left',
  },

  footer: {
    marginTop: 25,
    fontSize: 14,
    color: '#6D3D59',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AboutScreen;
