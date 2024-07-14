import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import {TypographyStyles} from '../theme/typography';
import {colors} from '../theme/colors';
import React from 'react';
import MasterCard from '../../assets/vectors/masterCard.svg';

export const Card = ({onPress, cardNumber, cardName, date}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.mainView}>
        <View style={styles.masterCardView}>
          <Text style={styles.label}>Universal Card</Text>
          <MasterCard width={55} height={55}></MasterCard>
        </View>
        <TextInput style={styles.numbers} editable={false} value={cardNumber} />

        <View style={styles.cardLabels}>
          <Text style={styles.cardText}>CARD HOLDER </Text>
          <Text style={styles.cardText}>CARD SAVE</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.info}>{cardName}</Text>
          <Text style={styles.info}>{date} </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 30,
    backgroundColor: colors.blue.base,
    borderRadius: 16,
  },

  label: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.base.white,
  },
  masterCardView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numbers: {
    ...TypographyStyles.title3,
    color: colors.base.white,
    marginTop: 30,
  },
  cardLabels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  cardText: {
    ...TypographyStyles.TinyNormalSemibold,
    color: colors.sky.base,
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  info: {
    ...TypographyStyles.TinyNoneSemibold,
    color: colors.mellowApricot.lightest,
  },
});
