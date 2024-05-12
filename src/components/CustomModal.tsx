import Modal from 'react-native-modal';
import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {TypographyStyles} from '../theme/typography';
import {colors} from '../theme/colors';
import {ButtonPrimary} from '../components/ButtonPrimary';
import {ButtonTransparent} from './ButtonTransparent';
import ModalImage from '../../assets/vectors/modalImage.svg';
import ModalMiddleImage from '../../assets/vectors/modalMiddleImage.svg';
import ModalSmallImage from '../../assets/vectors/modalSmallImage.svg';
import {ScrollView} from 'react-native-gesture-handler';
import {normalize} from '../theme/metrics';

export interface IModalBase {}

export const CustomModal: React.FC<IModalBase> = ({
  isModalVisible,
  toggleModal,
  children,
  title,
  subtitle,
  hasModalImage = false,
  hasModalMiddleImage = false,
  hasModalSmallImage = false,
}) => {
  return (
    <Modal isVisible={isModalVisible} style={{alignSelf: 'center'}}>
      <View style={styles.generalView}>
        {hasModalImage && <ModalImage />}
        {hasModalMiddleImage && (
          <ModalMiddleImage style={styles.modalMiddleImage} />
        )}
        {hasModalSmallImage && (
          <ModalSmallImage style={styles.modalSmallImage} />
        )}
        <View style={styles.buttonView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {children}
          <ButtonPrimary modalButton label="Sure" onPress={toggleModal} />
          <ButtonTransparent
            modalButton
            label="No, thanks"
            onPress={toggleModal}></ButtonTransparent>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  generalView: {
    width: normalize('width', 327),
    backgroundColor: '#fff',
    alignItems: 'center',
    maxHeight: '85%',
    borderRadius: 16,
  },

  buttonView: {
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    ...TypographyStyles.title3,
  },
  subtitle: {
    ...TypographyStyles.RegularNormalSemibold,
    color: colors.ink.light,

    lineHeight: 24,
  },
  modalMiddleImage: {
    marginTop: 30,
  },
  modalSmallImage: {
    marginTop: 30,
  },
});
