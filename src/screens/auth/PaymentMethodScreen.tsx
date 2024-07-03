import {View, Text, Switch, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Tables} from '../../components/Tables';
import Facebook from '../../../assets/vectors/facebook.svg';
import {colors} from '../../theme/colors';
import {ButtonTransparent} from '../../components/ButtonTransparent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';
import {NavBars} from '../../components/NavBars';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {TextLink} from '../../components/TextLink';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {TypographyStyles} from '../../theme/typography';
import MasterCard from '../../../assets/vectors/masterCard.svg';
import ChevronRight from '../../../assets/vectors/chevron-right.svg';
import AddCard from '../../../assets/vectors/addCardIcon.svg';
import {normalize} from '../../theme/metrics';

export const PaymentMethodScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.paymentMethod>
> = ({navigation}) => {
  const navigateToNewCard = () => {
    navigation.navigate(Routers.newCard);
  };

  return (
    <ScrollView>
      <NavBars
        style={styles.skipNav}
        leftIcon
        leftPress={navigation.goBack}
        size="standard"
        button={<ButtonTransparent label="Skip" />}
      />
      <NavBars
        style={styles.paymentNav}
        size="large"
        largeTitle="PAYMENT METHODS"
      />
      <View style={styles.middleView}>
        <Text style={styles.header}>STORED CARD</Text>
        <TextLink
          content="You have stored your card to make shopping with Shoppay even smoother. To enroll in Connected card, view card detail. Learn more "
          highlighted={[
            {
              text: 'Learn more',
              callback: () => console.log('Learn more'),
            },
          ]}
        />
        <View style={styles.cards}>
          <Pressable>
            <Tables
              leftType="icon"
              left={<MasterCard />}
              content="Mastercard * * * * 4 2 1 3"
              caption="Primary"
              rightType="icon"
              right={<ChevronRight />}
            />
          </Pressable>
          <Pressable onPress={navigateToNewCard}>
            <Tables
              content="Add another card"
              leftType="icon"
              left={<AddCard />}
              rightType="icon"
              right={<ChevronRight />}
              onPress={navigateToNewCard}
            />
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={styles.header}>STORED CARD</Text>
        <Text style={styles.text}>
          You don’t have a connected bank account.
        </Text>
        <ButtonPrimary
          style={styles.button}
          primaryBlock
          label="Connect a bank account"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  skipNav: {
    paddingVertical: normalize('vertical', 25),
  },
  paymentNav: {
    paddingTop: normalize('vertical', 5),
  },
  header: {...TypographyStyles.RegularNoneSemiBold, marginBottom: 10},
  text: {
    ...TypographyStyles.RegularNormalRegular,
    color: colors.ink.lighter,
  },
  middleView: {
    marginVertical: normalize('vertical', 30),
  },
  button: {
    marginTop: normalize('vertical', 25),
  },

  cards: {
    marginTop: normalize('vertical', 20),
  },
});
