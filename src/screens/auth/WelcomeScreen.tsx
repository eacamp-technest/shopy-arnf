import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import { CommonStyles } from '../../theme/common.styles';
import { windowWidth } from '../../theme/consts.styles';
import { Button } from 'react-native';
import { TypographyStyles } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { onboarding } from '../../constants/onboarding';
import { normalize } from '../../theme/metrics';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { NavigationParamlist } from '../../types/navigatorTypes';
import { Routers } from '../../router/routers';
import { isIos } from '../../constants/common.consts';
import { Pagination } from '../../components/Pagination';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import Nike from '../../../assets/vectors/nike.svg'
import Adidas from '../../../assets/vectors/adidas.svg'
import Vans from '../../../assets/vectors/vans.svg'
import Converse from '../../../assets/vectors/converse.svg'


export const WelcomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.welcome>
> = ({navigation}) => {
  const navigateToLogin = () => navigation.navigate(Routers.login);
  const navigateToRegister = () => navigation.navigate(Routers.register);

  const renderItem = ({item}: {item: (typeof onboarding)[0]}) => {
     if(item.id === 0 ) {
      return(
      <View style={styles.background}>
        <Text style={styles.title}>Shoppay</Text>
        <View style={styles.round} />
        <Image
          source={item.image}
          resizeMode={isIos ? 'center' : undefined}
          style={styles.image}
        />
        <Text style={TypographyStyles.title2}>{item.title}</Text>
        <Pagination selectedIndex={item.id} />
        <View style={styles.buttons}>
          <ButtonPrimary
           label="Create an account"
            primaryBlock
            onPress={navigateToRegister}
          />
          <ButtonPrimary
            label="Log in Instead"
            primaryBlock
            onPress={navigateToLogin}
            style={styles.login}
          />
        </View>
      </View>)
    } else if (item.id === 1) {
      return(
      <View style={styles.secondary}>
         <Text style={styles.title}>Shoppay</Text>
        <Image source={item.image} style={styles.image2} />
        <View style={styles.main}>
          <Text
            style={[TypographyStyles.title2, {textAlign:'center'}]}>
            {item.title}
          </Text>
          <Pagination selectedIndex={item.id} />
        </View>
       
        <View style={styles.buttons}>
          <ButtonPrimary
            label="Create an account"
            primaryBlock
            onPress={navigateToRegister}
          />
          <ButtonPrimary
            label="Log in Instead"
            primaryBlock
            onPress={navigateToLogin}
            style={styles.login}
          />
        </View>
        <View style={styles.termsView}>
          <Text style={TypographyStyles.SmallNormalRegular}>Help</Text>
          <View style={styles.divider} />
          <Text style={TypographyStyles.SmallNormalRegular}>Terms</Text>
        </View>
        </View>)
    } else{
        return(
        <View style={styles.secondary}>
          <Text style={styles.title}>Shoppay</Text>
         <View style={styles.group}>
           <View style={styles.nikcon}>
             <Nike/>
             <Converse/>
           </View>
           <View style={styles.advans}>
             <Adidas/>
             <Vans/>
           </View>
         </View>
         <View style={styles.main}>
           <Text
             style={[TypographyStyles.title2, {textAlign:'center'}]}>
             {item.title}
           </Text>
           <Pagination selectedIndex={item.id} />
         </View>
        
         <View style={styles.buttons}>
           <ButtonPrimary
             label="Create an account"
             primaryBlock
             onPress={navigateToRegister}
           />
           <ButtonPrimary
             label="Log in Instead"
             primaryBlock
             onPress={navigateToLogin}
             style={styles.login}
           />
         </View>
         <View style={styles.termsView}>
           <Text style={TypographyStyles.SmallNormalRegular}>Help</Text>
           <View style={styles.divider} />
           <Text style={TypographyStyles.SmallNormalRegular}>Terms</Text>
         </View>
         </View>)
    }
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
       renderItem={renderItem}
       style={CommonStyles.flex}
      />
    </View>
  );
};

const bottomSize = normalize('vertical', 37);
const horizontalSize = normalize('horizontal', 24);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.sky.lightest,
  },
  round: {
    width: 461,
    height: 461,
    borderRadius: 999,
    position: 'absolute',
    backgroundColor: 'white',
    top: -197,
    right: 0,
  },
  buttons: {
    gap: normalize('vertical', 16),
  },
  main: {
    gap: horizontalSize,
    alignItems: 'center',
    marginTop: normalize('vertical', 32),
    marginBottom: normalize('vertical', 48),
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flex: 1,
    right: 0,
    bottom:0
  },
  smallImage: {
    width: '100%',
    height: '50%',
  },
  contentContainerStyle: {},
  background: {
    width: windowWidth,
    justifyContent: 'flex-end',
    paddingBottom: bottomSize,
    paddingHorizontal: horizontalSize,
    gap: horizontalSize,
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
  secondary: {
    padding: horizontalSize,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: bottomSize,
    width: windowWidth,
    backgroundColor: 'white',
  },
  login:{
    backgroundColor:colors.ink.base
  },
  group:{
    flexDirection:'row',
    gap:24,
    alignItems:'center',
    justifyContent:'center'
  },
  nikcon:{
    gap:24,
    marginTop:117
  },
  advans:{
    gap:24,
    marginTop:185
  },
  title:{
    ...TypographyStyles.title3,
    color: colors.primary.base,
    alignSelf: 'center',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 24,
  },
  image2:{
    width: 328,
    height: 248,
    marginTop:161
  }
});

