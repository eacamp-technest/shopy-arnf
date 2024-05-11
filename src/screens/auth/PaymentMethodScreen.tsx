import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import {Tables} from '../../components/Tables';
import Facebook from '../../../assets/vectors/facebook.svg';
import {colors} from '../../theme/colors';

export const PaymentMethodScreen = () => {
  return (
    <View>
      <Tables
        content="Content is here"
        rightType={'button'}
        right="small"
        caption="for caption"
        leftType="icon"
        left={<Facebook width={24} height={24} color={colors.primary.base} />}
      />
    </View>
  );
};
