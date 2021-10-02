/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Input from './src/input';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';

function App() {
  const [random, setRandom] = useState([]);

  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandom(prev => [...prev, randomNum]);
  };

  const onDeleteNum = position => () => {
    const newArray = random.filter((num, index) => {
      return index !== position;
    });

    setRandom(newArray);
  };

  return (
    <View style={styles.mainView}>
      {/* <Header name={'My First App'} />
      <View>
        <Text style={styles.mainText} onPress={() => alert('text touch event')}>
          Hello World
        </Text>
      </View>
      <Generator onAdd={onAddRandomNum} />
      <ScrollView
        style={{ width: '100%' }}
        // onMomentumScrollBegin={() => alert('begin')}>
        // onMomentumScrollEnd={() => alert('end')}>
        // onScroll={() => alert('scrolling')}>
        // onContentSizeChange={(width, height) => alert(height)}>
        bounces={true}>
        <NumList num={random} onDelete={onDeleteNum} />
      </ScrollView> */}
      <Input />
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
