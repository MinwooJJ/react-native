/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

function ModalComponent() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(prev => !prev);
  };

  return (
    <View style={{ width: '100%' }}>
      <Button title="Open Modal" onPress={handleModal} />
      <Modal
        visible={modal}
        animationType={'slide'}
        onShow={() => alert('Modal!')}>
        <View style={{ marginTop: 60, backgroundColor: 'red' }}>
          <Text>This is Modal Content</Text>
        </View>
        <Button title="Close Modal" onPress={handleModal} />
      </Modal>
    </View>
  );
}

export default ModalComponent;
