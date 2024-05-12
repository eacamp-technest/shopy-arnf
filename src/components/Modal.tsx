import Modal from 'react-native-modal';
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

export interface IModalBase {}

export const CustomModal: React.FC<IModalBase> = ({
  isModalVisible,
  toggleModal,
}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View style={{flex: 1}}>
        <Text>Hello!</Text>
        <Button title="Hide modal" onPress={toggleModal} />
      </View>
    </Modal>
  );
};

const Style;
