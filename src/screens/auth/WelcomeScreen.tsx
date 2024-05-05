import {View, Text, ScrollView,TextInput} from 'react-native';
import React,{useState} from 'react';
import {Button} from '../../components/Button';
import { NavBars } from '../../components/bars/NavBar';
import ArrowRight from '../../../assets/vectors/arrow-right.svg'
import { SearchBar } from '../../components/bars/SearchBar';

export const WelcomeScreen = () => {

return(
  <View>
  <SearchBar searchType='normal' />
  <SearchBar searchType='transparent' />
  </View>
);

};
