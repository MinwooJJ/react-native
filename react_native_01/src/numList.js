/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function NumList({ num, onDelete }) {
  return num.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={onDelete(index)}
        style={styles.numList}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  });
}

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
