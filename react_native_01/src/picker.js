/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function PickerComponent() {
  const [selected, setSelected] = useState('korea');
  const [value, setValue] = useState(50);

  const sliderValueChange = value => {
    setValue(value);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={{
          height: 40,
          width: 300,
        }}
        value={value}
        minimumValue={0}
        maximumValue={100}
        onValueChange={sliderValueChange}
        maximumTrackTintColor="red"
        minimumTrackTintColor="blue"
        step={1}
      />
      <Text style={styles.input}>{value}</Text>
      <ActivityIndicator
        style={{ paddingTop: 200 }}
        size="large"
        color="green"
        animating={true}
      />
      <Picker
        onValueChange={(value, index) => {
          setSelected(value);
        }}
        selectedValue={selected}
        style={{ height: 50, width: 250 }}>
        <Picker.Item label="Korea" value="korea" />
        <Picker.Item label="Canada" value="canada" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});

export default PickerComponent;
