import {View, Text, StyleSheet} from 'react-native';
import {Routers} from '../../router/routers';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Card} from '../../components/Card';
import {NavBars} from '../../components/NavBars';
import {colors} from '../../theme/colors';
import {TypographyStyles} from '../../theme/typography';
import {useForm} from 'react-hook-form';
import {InputControlled} from '../../components/InputControlled';
import ArrowLeft from '../../../assets/vectors/chevron-left.svg';
import {TextInputs} from '../../components/TextInputs';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonTransparent} from '../../components/ButtonTransparent';
import {normalize} from '../../theme/metrics';
import {useCardStore} from '../../store/useCardStore';

export const EditCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.card>
> = ({navigation, route}) => {
  const {cardsInfo, updateCardInfo} = useCardStore();
  const {cardIndex} = route.params;
  const {control, watch, handleSubmit} = useForm({
    defaultValues: {
      creditCardNumber: cardsInfo[cardIndex].creditCardNumber,
      creditCardName: cardsInfo[cardIndex].creditCardName,
      date: cardsInfo[cardIndex].date,
    },
  });

  const navigateToCard = () => {
    navigation.navigate(Routers.newCard);
  };
  const navigateToUserCard = () => {
    navigation.navigate(Routers.userCard);
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <ScrollView
        style={styles.screenView}
        contentContainerStyle={{flexGrow: 1}}>
        <NavBars
          style={styles.skipNav}
          leftIcon={<ArrowLeft />}
          leftPress={navigation.goBack}
          size="standard"
          title="YOUR CARD"></NavBars>
        <Card
          cardNumber={watch('creditCardNumber')}
          cardName={watch('creditCardName')}
          date={watch('date')}
        />
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
              placeholder="Enter your holder name"
            />
          </View>
          <View style={styles.dateHolder}>
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
        </View>
        <ButtonPrimary
          label="Save"
          primaryBlock
          onPress={handleSubmit(cardData => {
            console.log(cardData);
            updateCardInfo(cardData, cardIndex);
            navigateToUserCard();
          })}
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  skipNav: {
    paddingVertical: normalize('vertical', 15),
  },
  label: {
    color: colors.ink.base,
    ...TypographyStyles.RegularNoneSemiBold,
    marginBottom: 10,
  },
  mainInputHolder: {
    marginTop: 40,
  },
  inputHolder: {
    marginBottom: 20,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 8,
  },
});
