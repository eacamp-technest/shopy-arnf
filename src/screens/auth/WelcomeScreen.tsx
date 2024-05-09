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
import {normalize} from '../../theme/metrics';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';

type OnboardingItem = {
  id: number;
  image: any;
  title: string;
};

export const WelcomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.welcome>
> = ({navigation}) => {
  const navigateToLogin = () => {
    navigation.navigate(Routers.login);
  };
  const navigateToRegister = () => {
    navigation.navigate(Routers.register);
  };
  const renderItem = ({item}: {item: OnboardingItem}) => {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Shoppay</Text>
        {item.id === 0 ? <View style={styles.round} /> : null}
        <Image
          source={item.image}
          resizeMode={item.id === 0 ? 'cover' : 'contain'}
          style={item.id !== 0 ? styles.image2 : styles.image}
        />
        <Text
          style={[TypographyStyles.title2, item.id === 0 ? {} : styles.pad]}>
          {item.title}
        </Text>
        <Pagination selectedIndex={item.id} />
        <View style={{gap: 20, marginTop: 20}}>
          <ButtonPrimary
            label="Create an account"
            primaryBlock
            centered
            onPress={navigateToRegister}
          />
          <ButtonPrimary
            label="Log in Instead"
            onPress={navigateToLogin}
            primaryBlock
            centered
            customStyles={styles.button}
          />
        </View>
        {item.id !== 0 ? (
          <View style={styles.termsView}>
            <Text style={TypographyStyles.SmallNormalRegular}>Help</Text>
            <View style={styles.divider} />
            <Text style={TypographyStyles.SmallNormalRegular}>Terms</Text>
          </View>
        ) : null}
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
  button: {
    backgroundColor: colors.ink.base,
    alignItems: 'center',
  },
  contentContainerStyle: {},
  background: {
    width: windowWidth,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 5,
  },
  image2: {
    marginBottom: 100,
    width: '100%',
    height: '100%',
    position: 'absolute',
    flex: 1,
    right: 0,
    bottom: 0,
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
    top: 56,
    left: 154,
  },
  pad: {
    marginLeft: 16,
    width: 327,
    height: 72,
    textAlign: 'center',
  },
  termsView: {
    gap: normalize('horizontal', 8),
    paddingTop: normalize('vertical', 54),
    ...CommonStyles.alignJustifyCenterRow,
  },
  divider: {
    width: 1,
    height: 15,
    backgroundColor: colors.ink.lighter,
  },
});
