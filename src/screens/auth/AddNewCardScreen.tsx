import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {NavBars} from '../../components/NavBars';
import {ButtonTransparent} from '../../components/ButtonTransparent';
import {TextInputs} from '../../components/TextInputs';
import {colors} from '../../theme/colors';
import {TypographyStyles} from '../../theme/typography';
import {normalize} from '../../theme/metrics';
import {InputControlled} from '../../components/InputControlled';
import {useForm} from 'react-hook-form';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import ArrowLeft from '../../../assets/vectors/chevron-left.svg';
import {Routers} from '../../router/routers';
import {useCardStore} from '../../store/useCardStore';

export const AddNewCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.addNewCard>
> = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  const {addCardInfo, cardsInfo} = useCardStore();
  console.log({cardsInfo});
  const navigateToUserCard = () => {
    navigation.navigate(Routers.userCard);
  };
  const navigateToPaymentMethod = () => {
    navigation.navigate(Routers.paymentMethod);
  };
  return (
    <View>
      <NavBars
        leftIcon={<ArrowLeft />}
        leftPress={navigateToPaymentMethod}
        size="standard"
        button={<ButtonTransparent label="Skip" />}
      />
      <NavBars size="large" largeTitle="ADD NEW CARD" />
      <View style={styles.mainInputHolder}>
        <View style={styles.inputHolder}>
          <Text style={styles.label}>Card Number</Text>
          <InputControlled
            name="creditCardNumber"
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
          <InputControlled
            name="creditCardName"
            control={control}
            defaultValue=""
            rules={{required: true}}
            disabled={false}
            disabledControl={false}
            placeholder="Enter your card name"
          />
        </View>
        <InputControlled
          name="date"
          control={control}
          defaultValue=""
          rules={{required: true}}
          disabled={false}
          disabledControl={false}
          placeholder="MM / YY / CVV"
        />
      </View>
      <ButtonPrimary
        label="Add card"
        primaryBlock
        onPress={handleSubmit(function (cardData) {
          console.log(cardData);
          addCardInfo(cardData);
          navigateToUserCard();
        })}
      />
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
