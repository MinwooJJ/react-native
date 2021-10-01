/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';

function App() {
  const [random, setRandom] = useState([36, 999]);

  const onAddRandomNum = () => {
    alert('add random number');
  };

  return (
    <View style={styles.mainView}>
      <Header name={'My First App'} />
      <View>
        <Text style={styles.mainText} onPress={() => alert('text touch event')}>
          Hello World
        </Text>
      </View>
      <Generator add={onAddRandomNum} />
      <NumList num={random} />
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
  },
});

export default App;
