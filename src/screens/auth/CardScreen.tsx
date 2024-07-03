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

export const CardScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.card>
> = ({navigation}) => {
  const {control} = useForm();
  const navigateToCard = () => {
    navigation.navigate(Routers.newCard);
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
        <Card></Card>
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
            <TextInputs
              type="text"
              placeholder="Enter your holder name"></TextInputs>
          </View>
          <View style={styles.dateHolder}>
            <TextInputs
              type="text"
              placeholder="Enter your holder name"></TextInputs>
          </View>
        </View>
        <ButtonPrimary
          label="Save"
          primaryBlock
          style={styles.button}></ButtonPrimary>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  skipNav: {
    paddingVertical: normalize('vertical', 25),
  },
  label: {
    color: colors.ink.base,
    ...TypographyStyles.RegularNoneSemiBold,
    marginBottom: 10,
  },
  mainInputHolder: {
    marginTop: 50,
  },
  inputHolder: {
    marginBottom: 30,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 8,
  },
});
