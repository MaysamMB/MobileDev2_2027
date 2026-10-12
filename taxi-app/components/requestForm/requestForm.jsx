import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import rideRequestSchema from '../../utils/schemas/rideRequest'

const RequestForm = () => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    destination: '',
    passengers: 0,
  });

  const [errors, setErrors] = useState([]);

  const handleFormChange = (field, v) => {
    setForm({ ...form, [field]: v });
  };

  const submit = () => {
    setErrors([]);
    rideRequestSchema.validate(form, { abortEarly: false }).then(value => {
      console.log(value);
    })
      .catch(error => {
        setErrors(error.errors)
      })
  };

  return (
    <View>
      <Text
        accessible={true}
        accessibilityLabel="Fill this form to request a taxi"
        accessibilityRole="header"
        style={{
          fontSize: 25,
          color: '#f5d142',
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center'
        }}>
        Request a Taxi
      </Text>
      <TextInput
        accessible={true}   // this is true by default
        accessibilityLabel="Enter your name here"
        style={styles.input}
        placeholder="Your Name"
        keyboardType="default"
        onChangeText={(v) => handleFormChange('name', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Location"
        keyboardType="default"
        onChangeText={(v) => handleFormChange('location', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Destination"
        keyboardType="default"
        onChangeText={(v) => handleFormChange('destination', v)}
      />
      <TextInput
        style={styles.input}
        accessibilityLabel="Number of Passengers"
        accessibilityHint="It should be more than 0 and less than 7 passengers"
        disabled={!form.destination.length}
        accessibilityState={{ disabled: !form.destination.length }}
        placeholder="Number of Passengers"
        keyboardType="numeric"
        onChangeText={(v) => handleFormChange('passengers', parseInt(v))}

      />
      <Button
        title="Submit"
        onPress={submit}
      />
      <View>
        {errors.map((err) => (
          <Text style={styles.errors}>- {err}</Text>
        ))}
      </View>

      <TouchableOpacity style={{ width: 100, height: 24, backgroundColor: "#A80000" }} >
        <Text style={{ color: "#ECF6FD" }}>
          Click Me
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <Text>Data Summary:</Text>
        <Text>Name: {form.name}</Text>
        <Text>Your Location: {form.location}</Text>
        <Text>Your Destination: {form.destination}</Text>
        <Text>Number of Passengers: {form.passengers}</Text>
      </View>
    </View>
  );
};

export default RequestForm;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#aaaaaa',
    padding: 6,
    borderRadius: 5,
    marginBottom: 10,
  },
  errors: {
    fontSize: 10,
    color: '#fa1111',
  },
});