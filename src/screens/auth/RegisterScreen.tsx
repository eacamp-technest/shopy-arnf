import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamlist} from '../../types/navigatorTypes';
import {Routers} from '../../router/routers';
import {TextLink} from '../../components/TextLink';
import {TypographyStyles} from '../../theme/typography';
import {normalize} from '../../theme/metrics';
import {Dimensions} from 'react-native';
import {NavBars} from '../../components/NavBars';
import {InputControlled} from '../../components/InputControlled';
import {useForm} from 'react-hook-form';
import {FormRules} from '../../constants/formRules';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface IRegisterForm {
  fullName: string;
  email: string;
  password: string;
}

export const RegisterScreen: React.FC<
  NativeStackScreenProps<NavigationParamlist, Routers.register>
> = ({navigation}) => {
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
      fullName: 'Khayyam Karimov',
      email: 'xeyyam.kerimov@gmail.com',
      password: 'Admin123!',
    },
  });

  const onSubmit = (data: IRegisterForm) => {
    navigateToVerification();
  };

  return (
    <ScrollView scrollEnabled={false}>
      <View style={styles.container}>
        <NavBars leftIcon size="standard" leftPress={navigateToWelcome} />
        <NavBars largeTitle="Create Account" size="large" />
        <InputControlled
          control={control}
          name="fullName"
          errorMessage={errors.fullName?.message}
          label="Full Name"
          placeholder="Khayyam Karimov"
          rules={FormRules.fullName}
        />
        <InputControlled
          label="Email"
          control={control}
          keyboardType="email-address"
          name="email"
          errorMessage={errors.email?.message}
          rules={FormRules.email}
          placeholder="Enter your email"
        />
        <InputControlled
          label="Password"
          control={control}
          name="password"
          errorMessage={errors.password?.message}
          rules={FormRules.password}
          placeholder="Enter your password"
        />
        <View style={styles.footer}>
          <ButtonPrimary
            label="Create an account"
            primaryBlock
            onPress={handleSubmit(onSubmit)}
          />
          <TextLink
            content="By signing up you agree to our Terms and Conditions of Use"
            center
            highlighted={[
              {
                text: 'Terms',
                callback: () => console.log('terms'),
              },
              {
                text: 'Conditions of Use',
                callback: () => console.log('conditions'),
              },
            ]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  textLink: {
    ...TypographyStyles.SmallNormalRegular,
  },
  footer: {
    flex: 1,
    gap: 198,
  },
});
