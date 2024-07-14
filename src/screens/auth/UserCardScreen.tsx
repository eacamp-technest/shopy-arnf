import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Card} from '../../components/Card';
import {NavBars} from '../../components/NavBars';
import ArrowLeft from '../../../assets/vectors/chevron-left.svg';
import {ButtonOutline} from '../../components/ButtonOutline';
import {normalize} from '../../theme/metrics';
import {Routers} from '../../router/routers';
import {useCardStore} from '../../store/useCardStore';

export const UserCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.userCard>
> = ({navigation}) => {
  const {cardsInfo} = useCardStore();
  const navigateToAddNewCard = () => {
    navigation.navigate(Routers.addNewCard);
  };
  const navigateToEditCard = index => {
    navigation.navigate(Routers.editCard, {cardIndex: index});
  };

  return (
    <ScrollView>
      <NavBars
        style={styles.navBars}
        leftIcon={<ArrowLeft />}
        leftPress={navigateToAddNewCard}
        size="standard"
        title="YOUR CARD"></NavBars>
      <View style={styles.cardView}>
        {cardsInfo.map((card, index) => {
          return (
            <Card
              cardNumber={card.creditCardNumber}
              cardName={card.creditCardName}
              date={card.date}
              onPress={() => navigateToEditCard(index)}
            />
          );
        })}
        <ButtonOutline
          outlineBlock
          label="Add new card"
          onPress={navigateToAddNewCard}></ButtonOutline>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navBars: {
    paddingVertical: normalize('vertical', 15),
  },
  cardView: {
    gap: 40,
  },
});
