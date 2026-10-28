
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'expo-checkbox';

const RadioGroup = (props) => {
  const [value, setValue] = useState('op1');

  const handleChange = (value) => {
    setValue(value);
    props.onOptionSelected(
      value === 'op1' ? props.options[0] : props.options[1]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.option}>

        <Checkbox
          value={value === 'op1'}
          onValueChange={() => handleChange('op1')}
        />
        <Text style={props.textStyle}>
          {props.options[0]}
        </Text>
      </View>

      <View style={styles.option}>

        <Checkbox
          value={value === 'op2'}
          onValueChange={() => handleChange('op2')}
        />
        <Text style={props.textStyle}>
          {props.options[1]}
        </Text>
      </View>
    </View>
  );
};

export default RadioGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 15,
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

});
