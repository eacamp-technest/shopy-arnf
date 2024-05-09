import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {ButtonSecondary} from '../../components/ButtonSecondary';
import {ButtonOutline} from '../../components/ButtonOutline';
import {ButtonTransparent} from '../../components/ButtonTransparent';
import {NavBars} from '../../components/bars/NavBars';
import Arrow from '../../../assets/vectors/arrow-right.svg';
import {CommonStyles} from '../../theme/common.styles';
import {windowWidth} from '../../theme/consts.styles';
import {TypographyStyles} from '../../theme/typography';
import {colors} from '../../theme/colors';
import {onboarding} from '../../constants/onboarding';
import {Pagination} from '../../components/Pagination';
import {AuthButton} from '../../components/AuthButton';

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
      {/* <FlatList
        data={onboarding}
        initialScrollIndex={0}
        horizontal
        pagingEnabled
        initialNumToRender={1}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderItem}
        style={CommonStyles.flex}
      /> */}
      <AuthButton label="Continue with Apple" platform="apple"></AuthButton>

      <AuthButton
        label="Continue with Google"
        hasGoogleSign={true}
        platform="google"
      />
      <AuthButton
        label="Continue with Facebook"
        hasFacebookSign={true}
        platform="facebook"></AuthButton>

      <AuthButton
        label="Continue with Twitter"
        hasTwitterSign={true}
        platform="twitter"></AuthButton>
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
