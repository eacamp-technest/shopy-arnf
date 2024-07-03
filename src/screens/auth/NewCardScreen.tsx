import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {NavBars} from '../../components/NavBars';
import {Routers} from '../../router/routers';
import {ButtonTransparent} from '../../components/ButtonTransparent';
import {TextInputs} from '../../components/TextInputs';
import {colors} from '../../theme/colors';
import {TypographyStyles} from '../../theme/typography';
import {normalize} from '../../theme/metrics';
import {InputControlled} from '../../components/InputControlled';
import {useForm} from 'react-hook-form';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import ArrowLeft from '../../../assets/vectors/chevron-left.svg';

export const NewCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.newCard>
> = ({navigation}) => {
  const {control} = useForm();

  const navigateToCard = () => {
    navigation.navigate(Routers.card);
  };

  return (
    <View>
      <NavBars
        leftIcon={<ArrowLeft />}
        leftPress={navigation.goBack}
        size="standard"
        button={<ButtonTransparent label="Skip" />}
      />
      <NavBars size="large" largeTitle="ADD NEW CARD" />
      <View style={styles.mainInputHolder}>
        <View style={styles.inputHolder}>
          <Text style={styles.label}>Card Number</Text>
          <InputControlled
            name="creditCard"
            control={control}
            defaultValue=""
            rules={{required: true}}
            disabled={false}
            disabledControl={false}
            manipulator="cardNumber"
            placeholder="Enter your card number"
          />
        </View>
        <View style={styles.inputHolder}>
          <Text style={styles.label}>Cardholder Name</Text>
          <TextInputs type="text" placeholder="Enter your holder name" />
        </View>
        <TextInputs type="text" placeholder="MM / YY / CVV" />
      </View>

      <ButtonPrimary
        label="Add card"
        primaryBlock
        onPress={navigateToCard}></ButtonPrimary>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.ink.base,
    ...TypographyStyles.RegularNoneSemiBold,
  },
  datePicker: {
    color: 'red',
  },
  mainInputHolder: {
    gap: normalize('vertical', 20),
    marginTop: normalize('vertical', 30),
    marginBottom: normalize('vertical', 30),
  },
  inputHolder: {
    gap: normalize('vertical', 10),
  },
});
