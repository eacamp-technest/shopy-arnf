import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useRef} from 'react';
import {NavBars} from '../../components/NavBars';
import {colors} from '../../theme/colors';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';
import {TextLink} from '../../components/TextLink';
import {TypographyStyles} from '../../theme/typography';
import {CommonStyles} from '../../theme/common.styles';
import {normalize} from '../../theme/metrics';
import FacebookIcon from '../../../assets/vectors/facebookIcon.svg';
import TwitterIcon from '../../../assets/vectors/twitterIcon.svg';
import GoogleIcon from '../../../assets/vectors/googleIcon.svg';
import {InputControlled} from '../../components/InputControlled';
import {useForm} from 'react-hook-form';
import {FormRules} from '../../constants/formRules';
import ArrowLeft from '../../../assets/vectors/chevron-left.svg';

interface IRegisterForm {
  email: string;
  password: string;
}

export const LoginScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.login>
> = ({navigation}) => {
  const scrollRef = useRef<ScrollView>(null);
  const navigateToWelcome = () => {
    navigation.navigate(Routers.welcome);
  };
  const navigateToVerification = () => {
    navigation.navigate(Routers.verification);
  };
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<IRegisterForm>({
    defaultValues: {
      email: 'user1234@gmail.com',
      password: 'Admin123!',
    },
  });

  const onSubmit = (data: IRegisterForm) => {
    navigateToVerification();
  };
  return (
    <ScrollView scrollEnabled={false} style={CommonStyles.flex} ref={scrollRef}>
      <View style={styles.container}>
        <NavBars size="standard" leftIcon={<ArrowLeft/>} leftPress={navigateToWelcome} />
        <NavBars
          size="large"
          largeTitle="Welcome!"
          leftPress={navigateToWelcome}
        />
        <InputControlled
          control={control}
          name="email"
          label="Email"
          errorMessage={errors.email?.message}
          rules={FormRules.email}
          type="text"
          keyboardType="email-address"
          placeholder="Enter your email"
        />
        <InputControlled
          control={control}
          name="password"
          label="Password"
          errorMessage={errors.password?.message}
          rules={FormRules.password}
          type="password"
          placeholder="Enter your password"
        />
      </View>
      <View style={styles.footer}>
        <ButtonPrimary
          primaryBlock
          label="Login"
          onPress={handleSubmit(onSubmit)}
        />
        <Text style={styles.text}>or sign in with</Text>
        <View style={styles.final}>
          <View style={styles.icons}>
            <GoogleIcon />
            <FacebookIcon />
            <TwitterIcon />
          </View>
          <View style={styles.textLink}>
            <TextLink
              content="Don't have an account? Sign Up"
              center
              highlighted={[
                {
                  text: 'Sign Up',
                  callback: () => navigation.navigate(Routers.register),
                },
              ]}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  smallnavbar: {
    alignSelf: 'center',
    marginLeft: normalize('horizontal', 48),
  },
  largeNavbar: {
    marginLeft: normalize('horizontal', -48),
  },
  footer: {
    marginTop: 32,
    gap: 32,
  },
  text: {
    textAlign: 'center',
    ...TypographyStyles.TinyNormalRegular,
    color: colors.ink.dark,
  },
  icons: {
    flexDirection: 'row',
    gap: 24,
    alignSelf: 'center',
  },
  textLink: {
    ...TypographyStyles.SmallNormalRegular,
    flex: 1,
    width: '100%',
    height: '100%',
    paddingBottom: '100%',
    marginTop: normalize('vertical', 80),
    bottom: 0,
  },
  final: {
    flex: 1,
    alignSelf: 'center',
  },
  navbar: {
    marginLeft: -24,
  },
});
