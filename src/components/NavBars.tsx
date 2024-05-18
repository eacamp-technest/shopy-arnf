import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { processColorsInProps } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import ChevronLeft from '../../assets/vectors/chevron-left.svg'
import Settings from '../../assets/vectors/settings.svg'
import { ButtonTransparent } from './ButtonTransparent';
import { colors } from '../theme/colors';
import User from '../../assets/vectors/user.svg'
import { TypographyStyles } from '../theme/typography';

type TSize = 'standard' | 'large'
type TBack = 'settings' | 'none'

interface INavBar {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?:TSize;
  settings?:TBack;
  leftPress?: ()=>void;
  rightPress?:()=>void;
  title?:string;
  largeTitle?:string;
  button?: React.ReactNode;
  caption?: string;
  largeIcon?: string | React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const NavBars:React.FC<INavBar> = ({leftIcon,rightIcon,rightPress,leftPress,size,settings,title,largeTitle,button,caption,largeIcon,onPress,style}) => {
  if(size==='standard' && settings==='settings'){
    return(
      <View style={[styles.standard,button && !title ? styles.withButton:null]}>
        <View style={styles.settings}>
          <ChevronLeft onPress={leftPress} hitSlop={{right:12,left:12,top:12,bottom:12}}/>
          <Text style={styles.settingsTitle}>Settings</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      {rightIcon?<Settings onPress={rightPress} color={colors.ink.base} hitSlop={{right:12,left:12,top:12,bottom:12}}/> : button}
      </View>
    )
  } 
  else if(size ==='standard'){
    return(
      <View style={[styles.standard,button && !title ? styles.withButton:null]}> 
        {leftIcon?<ChevronLeft onPress={leftPress} hitSlop={{right:12,left:12,top:12,bottom:12}}/>:button}
        <Text style={styles.title}>{title}</Text>
        {rightIcon?<Settings onPress={rightPress} color={colors.ink.base} hitSlop={{right:12,left:12,top:12,bottom:12}}/> : button}
      </View>
    )
  } else{
    return(
      <View style={styles.large}>
        <View>
        <Text style={styles.largeTitle}>{largeTitle}</Text>
        <Text style={styles.caption}>{caption}</Text>
        </View>
       {rightIcon? <User onPress={rightPress} hitSlop={{right:12,left:12,top:12,bottom:12}}/> : button}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  standard:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:120
  },
  settings:{
    flexDirection:'row',
    alignItems:'center',
  },
  title:{
    ...TypographyStyles.title3,
    color:colors.ink.base
  },
  largeTitle:{
    ...TypographyStyles.title2,
    color:colors.ink.base
  },
  caption:{
    ...TypographyStyles.RegularNormalRegular,
    color:colors.ink.base
  },
  settingsTitle:{
    ...TypographyStyles.LargeNoneRegular,
    color:colors.ink.base,
    marginTop:2
  },
  withButton:{
    gap:85
  },
  large:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  }
})