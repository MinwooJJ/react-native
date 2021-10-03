/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Button} from 'react-native';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#a4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'blue',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                title="Info"
                onPress={() => alert('button')}
                color="orange"
              />
            ),
          }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          initialParams={{
            userIdx: 50,
            userName: 'Yesenia',
            userLastName: 'Paulin',
          }}
          // options={{
          //   title: 'User Screen',
          //   headerStyle: {
          //     backgroundColor: 'pink',
          //   },
          //   headerTintColor: 'red',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //     color: 'purple',
          //   },
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
