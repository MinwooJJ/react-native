/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Picker from './src/picker';

function App() {
  const [myTextInput, setMyTextInput] = useState('');
  const [alphabet, setAlphabet] = useState([]);

  const onChangeInput = event => {
    setMyTextInput(event);
  };
  const onAddTextInput = () => {
    setAlphabet(prev => {
      return [...prev, myTextInput];
    });
    setMyTextInput('');
  };

  return (
    <View style={styles.mainView}>
      <Picker />
      {/* <TextInput
        value={myTextInput}
        style={styles.input}
        onChangeText={onChangeInput}
        multiline={true}
        maxLength={100}
        autoCapitalize={'none'}
      />
      <Button title="Add Text Input" onPress={onAddTextInput} />
      <ScrollView style={{ width: '100%' }}>
        {alphabet.map((item, index) => {
          return (
            <Text style={styles.mainText} key={index}>
              {item}
            </Text>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default App;
