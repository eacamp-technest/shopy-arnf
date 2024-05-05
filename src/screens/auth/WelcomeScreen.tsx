import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import {Button} from '../../components/Button';
import {NavBars} from '../../components/bars/NavBars';
import Arrow from '../../../assets/vectors/arrow-right.svg';
import {CommonStyles} from '../../theme/common.styles';
import {windowWidth} from '../../theme/consts.styles';
import {TypographyStyles} from '../../theme/typography';
import {colors} from '../../theme/colors';
import {onboarding} from '../../constants/onboarding';
import {Pagination} from '../../components/Pagination';

export const WelcomeScreen = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Shoppay</Text>
        {item.id === 0 ? <View style={styles.round} /> : null}
        <Image
          source={item.image}
          resizeMode={item.id === 0 ? 'cover' : 'contain'}
          style={styles.image}
        />
        <Text style={TypographyStyles.title1}>{item.title}</Text>
        <Pagination selectedIndex={item.id} />
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={onboarding}
        initialScrollIndex={0}
        horizontal
        pagingEnabled
        initialNumToRender={1}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderItem}
        style={CommonStyles.flex}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.sky.lightest,
  },
  contentContainerStyle: {},
  background: {
    width: windowWidth,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 24,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flex: 1,
    right: 0,
    bottom: 0,
  },
  round: {
    width: 461,
    height: 461,
    borderRadius: 400,
    backgroundColor: 'white',
    position: 'absolute',
    top: -197,
    left: -77,
  },
  title: {
    ...TypographyStyles.title3,
    color: colors.primary.base,
    alignSelf: 'center',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 76,
    left: 154,
  },
});
