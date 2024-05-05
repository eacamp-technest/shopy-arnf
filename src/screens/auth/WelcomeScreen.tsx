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

type OnboardingItem = {
  id: number;
  image: any;
  title: string;
};

export const WelcomeScreen = () => {
  const renderItem = ({item}: {item: OnboardingItem}) => {
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

<ScrollView>
  <ButtonPrimary
    label="Block Primary"
    showArrowSign={false}
    showMessageSign={false}
    primaryBlock
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={true}
    primaryBlock
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={true}
    showMessageSign={false}
    primaryBlock
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={true}
    centered
    primaryBlock
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={false}
    disabled
    primaryBlock
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={true}
    primaryBlock
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={true}
    showMessageSign={false}
    primaryBlock
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={true}
    primaryBlock
    centered
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    hasArrowSign={false}
    hasMessageSign={false}
    primaryLarge
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    primaryLarge
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={true}
    showMessageSign={false}
    hasMessageSign={false}
    primaryLarge
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    centered
    primaryLarge
  />
  <ButtonPrimary
    label="Block+Primary"
    hasArrowSign={false}
    hasMessageSign={false}
    primaryLarge
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    primaryLarge
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={true}
    showMessageSign={false}
    hasMessageSign={false}
    primaryLarge
    disabled
  />
  <ButtonPrimary
    label="Button Large"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    centered
    primaryLarge
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    hasArrowSign={true}
    hasMessageSign={true}
    primarySmall
  />
  <ButtonPrimary
    label="Block+Primary"
    hasArrowSign={false}
    hasMessageSign={true}
    showMessageSign={true}
    primarySmall
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={true}
    showMessageSign={false}
    showArrowSign={true}
    showMessageSign={false}
    hasArrowSign={true}
    hasMessageSign={false}
    primarySmall
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    hasArrowSign={false}
    showMessageSign={true}
    hasMessageSign={true}
    centered
    primarySmall
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    showMessageSign={false}
    hasArrowSign={false}
    hasMessageSign={false}
    centered
    primarySmall
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    hasArrowSign={false}
    hasMessageSign={true}
    showMessageSign={true}
    primarySmall
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={true}
    showMessageSign={false}
    hasArrowSign={true}
    hasMessageSign={false}
    primarySmall
    disabled
  />
  <ButtonPrimary
    label="Block+Primary"
    showArrowSign={false}
    hasArrowSign={false}
    showMessageSign={true}
    hasMessageSign={true}
    primarySmall
    disabled
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={false}
    secondaryBlock
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    secondaryBlock
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    secondaryBlock
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    centered
    secondaryBlock
  />
  <ButtonPrimary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={false}
    disabled
  />
  <ButtonPrimary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    disabled
  />
  <ButtonPrimary
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    disabled
  />
  <ButtonPrimary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    centered
    disabled
  />
  <ButtonSecondary
    label="Block+Secondary"
    hasArrowSign={false}
    hasMessageSign={false}
    secondaryLarge
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    secondaryLarge
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    hasMessageSign={false}
    secondaryLarge
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    centered
    secondaryLarge
  />
  <ButtonSecondary
    label="Block+Secondary"
    hasArrowSign={false}
    hasMessageSign={false}
    secondaryLarge
    disabled
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    secondaryLarge
    disabled
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    hasMessageSign={false}
    secondaryLarge
    disabled
  />
  <ButtonSecondary
    label="Button Secondary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    secondaryLarge
    centered
    disabled
  />
  <ButtonSecondary
    label="Block+Secondary"
    hasArrowSign={true}
    hasMessageSign={true}
    secondarySmall
  />
  <ButtonSecondary
    label="Block+Secondary"
    hasArrowSign={false}
    hasMessageSign={true}
    showMessageSign={true}
    secondarySmall
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    hasArrowSign={true}
    hasMessageSign={false}
    secondarySmall
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    hasArrowSign={false}
    showMessageSign={true}
    hasMessageSign={true}
    centered
    secondarySmall
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={false}
    hasArrowSign={false}
    hasMessageSign={false}
    centered
    secondarySmall
    disabled
  />
  <ButtonSecondary
    label="Block+Secondary"
    hasArrowSign={false}
    hasMessageSign={true}
    showMessageSign={true}
    secondarySmall
    disabled
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    hasArrowSign={true}
    hasMessageSign={false}
    secondarySmall
    disabled
  />
  <ButtonSecondary
    label="Block+Secondary"
    showArrowSign={false}
    hasArrowSign={false}
    showMessageSign={true}
    hasMessageSign={true}
    secondarySmall
    disabled
  />
  <ButtonOutline
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={false}
    outlineBlock
  />
  <ButtonOutline
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    outlineBlock
  />
  <ButtonOutline
    label="Block+Outline"
    showArrowSign={true}
    showMessageSign={false}
    outlineBlock
  />
  <ButtonOutline
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    centered
    outlineBlock
  />
  <ButtonOutline
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={false}
    outlineBlock
    disabled
  />
  <ButtonOutline
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    outlineBlock
    disabled
  />
  <ButtonOutline
    label="Block+Outline"
    showArrowSign={true}
    showMessageSign={false}
    outlineBlock
    disabled
  />
  <ButtonOutline
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    outlineBlock
    centered
    disabled
  />
  <ButtonOutline
    label="Block+Secondary"
    hasArrowSign={false}
    hasMessageSign={false}
    outlineLarge
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    outlineLarge
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    hasMessageSign={false}
    outlineLarge
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    centered
    outlineLarge
  />
  <ButtonOutline
    label="Block+Secondary"
    hasArrowSign={false}
    hasMessageSign={false}
    outlineLarge
    disabled
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    outlineLarge
    disabled
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    hasMessageSign={false}
    outlineLarge
    disabled
  />
  <ButtonOutline
    label="Button Secondary"
    showArrowSign={false}
    showMessageSign={true}
    hasArrowSign={false}
    centered
    outlineLarge
    disabled
  />
  <ButtonOutline
    label="Block+Secondary"
    hasArrowSign={true}
    hasMessageSign={true}
    outlineSmall
  />
  <ButtonOutline
    label="Block+Secondary"
    hasArrowSign={false}
    hasMessageSign={true}
    showMessageSign={true}
    outlineSmall
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    hasArrowSign={true}
    hasMessageSign={false}
    outlineSmall
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={false}
    hasArrowSign={false}
    showMessageSign={true}
    hasMessageSign={true}
    centered
    outlineSmall
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={false}
    showMessageSign={false}
    hasArrowSign={false}
    hasMessageSign={false}
    centered
    outlineSmall
    disabled
  />
  <ButtonOutline
    label="Block+Secondary"
    hasArrowSign={false}
    hasMessageSign={true}
    showMessageSign={true}
    outlineSmall
    disabled
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={true}
    showMessageSign={false}
    hasArrowSign={true}
    hasMessageSign={false}
    outlineSmall
    disabled
  />
  <ButtonOutline
    label="Block+Secondary"
    showArrowSign={false}
    hasArrowSign={false}
    showMessageSign={true}
    hasMessageSign={true}
    outlineSmall
    disabled
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={false}
    transparentBlock
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    transparentBlock
    centered
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={false}
    transparentBlock
    disabled
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    transparentBlock
    centered
    disabled
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={false}
    transparentLarge
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    transparentLarge
    centered
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={false}
    transparentLarge
    disabled
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    transparentLarge
    centered
    disabled
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={false}
    transparentSmall
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    transparentSmall
    centered
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={false}
    transparentSmall
    disabled
  />
  <ButtonTransparent
    label="Block+Outline"
    showArrowSign={false}
    showMessageSign={true}
    transparentSmall
    centered
    disabled
  />
  <Text> Welcome Screen </Text>
</ScrollView>;

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
