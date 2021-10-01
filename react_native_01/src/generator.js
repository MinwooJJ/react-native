/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

function Generator({add}) {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={add} />
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
