import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="To User Screen"
        onPress={() => {
          navigation.navigate('User', {
            userIdx: 100,
            userName: 'Minwoo',
            userLastName: 'Jung',
          });
        }}
      />
      <Button
        title="Change the title"
        onPress={() => {
          navigation.setOptions({
            title: 'Changed',
            headerStyle: {
              backgroundColor: 'pink',
            },
            headerTintColor: 'red',
          });
        }}
      />
    </View>
  );
}

export default HomeScreen;
