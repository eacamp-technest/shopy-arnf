import Modal from 'react-native-modal';
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TypographyStyles} from '../theme/typography';
import {colors} from '../theme/colors';
import {ButtonPrimary} from '../components/ButtonPrimary';
import {ButtonTransparent} from './ButtonTransparent';
import ModalImage from '../../assets/vectors/modalImage.svg';
import ModalMiddleImage from '../../assets/vectors/modalMiddleImage.svg';
import ModalSmallImage from '../../assets/vectors/modalSmallImage.svg';
import {normalize} from '../theme/metrics';

export interface IModalBase {
  isModalVisible?: boolean;
  toggleModal?: () => void;
  children: React.ReactNode;
  title?: string;
  subtitle: string | React.ReactNode | any;
  hasModalImage?: boolean;
  hasModalMiddleImage?: boolean;
  hasModalSmallImage?: boolean;
  label? : string;
  secondLabel?: string;
  onPress?: () => void
}

export const CustomModal: React.FC<IModalBase> = ({
  isModalVisible,
  toggleModal,
  children,
  title,
  subtitle,
  hasModalImage = false,
  hasModalMiddleImage = false,
  hasModalSmallImage = false,
  label,
  secondLabel,
  onPress
}) => {
  return (
    <Modal isVisible={isModalVisible} style={{alignSelf: 'center'}}>
      <View style={styles.generalView}>
        {hasModalImage ? <ModalImage />: null}
        {hasModalMiddleImage ? (
          <ModalMiddleImage style={styles.modalMiddleImage} />
        ):null}
        {hasModalSmallImage ? (
          <ModalSmallImage style={styles.modalSmallImage} />
        ):null}
        <View style={styles.buttonView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {children}
          <ButtonPrimary modalButton label={label} onPress={onPress} />
          <ButtonTransparent
            modalButton
            label={secondLabel}
            onPress={toggleModal}/>
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
