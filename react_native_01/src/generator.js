/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function Generator({ onAdd }) {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#782347',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
