import React from 'react';
import {View, Text, Button} from 'react-native';

function UserScreen({navigation, route}) {
  const {userIdx, userName, userLastName} = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>User Screen</Text>
      <Button
        title="To Home Screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />

      <Text>UserIndex: {userIdx}</Text>
      <Text>User Name: {userName}</Text>
      <Text>User LastName: {userLastName}</Text>
    </View>
  );
}

export default UserScreen;
