import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import RadioGroup from '../common/RadioGroup.jsx'
import rideRequestSchema from '../../utils/schemas/rideRequest';

const RequestForm = () => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    destination: '',
    passengers: 0,
    date: new Date(),
    lugge:'',
    gender:''
  });
  const [showTimePicker, setShowTimePicker] = useState(false);

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
    <ScrollView style={[styles.container]}>
      <View style={[styles.container_min]}>

      <Text
        accessible={true}
        accessibilityLabel="Fill this form to request a taxi"
        accessibilityRole="header"
        style={{
          fontSize: 25,
          color: '#493342',
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center'
        }}>
        Request a Taxi
      </Text>
      <View style={[styles.input_dev]}>
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
      </View>
      <TouchableOpacity 
       style={[styles.picker_dev]}
        onPress={()=>{
          setShowTimePicker(true)
        }}
      >
        <Text style={[styles.picker_txt]}>
          Pick a date/time
        </Text>
      </TouchableOpacity>
      
      
      {showTimePicker && (
        <RNDateTimePicker
          value={form.date}
          mode="date"
          display="default"
          minimumDate={new Date()}
          maximumDate={new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          )}
          onValueChange={(_, selectedDate) => {
            setShowTimePicker(false);

            if (selectedDate) {
              handleFormChange('date', selectedDate);
            }
          }}
        />
      )}

      <View style={[styles.radio_div]}>
      <RadioGroup  
        textStyle={styles.radioText}
        options={['Has luggage','No luggage']}
        onOptionSelected={(v) => handleFormChange('lugge', v)}
      />
      <RadioGroup 
        textStyle={styles.radioText}
        options={['Male','Female']}
        onOptionSelected={(v) => handleFormChange('gender', v)}
      />
      </View>
        <Pressable
          style={styles.submitButton}
          onPress={submit}
        >
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>

        <View>
        {errors.map((err) => (
          <Text style={styles.errors}>- {err}</Text>
        ))}
      </View>

      <View style={[styles.summry_dev]}>
        <Text style={[styles.summary_text, styles.summary_title]}>Data Summary</Text>
        <Text style={styles.summary_text}>Name: <Text style={styles.user_input}>{form.name}</Text></Text>
        <Text style={styles.summary_text}>Your Location: <Text style={styles.user_input}>{form.location}</Text></Text>
        <Text style={styles.summary_text}>Your Destination: <Text style={styles.user_input}>{form.destination}</Text> </Text>
        <Text style={styles.summary_text}>Number of Passengers: <Text style={styles.user_input}>{form.passengers}</Text> </Text>
        <Text style={styles.summary_text}>Date: <Text style={styles.user_input}>{form.date.toDateString()}</Text></Text>
        <Text style={styles.summary_text}>Lugge: <Text style={styles.user_input}>{form.lugge}</Text></Text>
        <Text style={styles.summary_text}>Gender: <Text style={styles.user_input}>{form.gender}</Text> </Text>
      </View>
    </View>
    </ScrollView>
  );
};

export default RequestForm;


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#F8F5F2',
  },

  container_min: {
    margin: 15,
    marginTop: 25,
  },

  input: {
    borderWidth: 1.5,
    borderColor: '#D8C3CE',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    paddingBottom: 15,
    color: '#3F2938',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },

  input_dev: {
    marginTop: 16,
    width: 'auto',
    height: 'auto',
    backgroundColor: '#E8D5DF',
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
  },

  errors: {
    fontSize: 12,
    color: '#C62828',
  },

  picker_dev: {
    backgroundColor: '#6D3D59',
    width: 160,
    height: 35,
    borderRadius: 10,
    marginBottom: 10,
  },

  picker_txt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    top: 6,
    left: 15,
  },

  radio_div: {
    backgroundColor: '#F0E5EB',
    height: 100,
    marginBottom: 10,
    borderRadius: 14,
    padding: 20,
    paddingTop: 10,
  },

  radioText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#6D3D59',
  },

  submitButton: {
    backgroundColor: '#9D5273',
    padding: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  summry_dev: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8D5DF',
  },

  summary_text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#493342',
  },

  summary_title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6D3D59',
  },

  user_input: {
    color: '#9D5273',
    fontWeight: 'bold',
  },
});
