import { View, Text,TextInput,StyleSheet, Pressable,Image, ImageProps } from 'react-native'
import React, {useState} from 'react'
import SvgImage from 'react-native-svg/lib/typescript/elements/Image';
import MapPin from '../../assets/vectors/map-pin.svg'
import { TypographyStyles } from '../theme/typography';
import { colors } from '../theme/colors';

interface ITextInput {
  textLabel?: string;
  placeholder: string;
  caption?:string;
  errorMessage?:string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  righticon?: React.ReactNode;
}

export const TextInputs: React.FC<ITextInput> = ({ placeholder, textLabel, caption, errorMessage, disabled,leftIcon,righticon }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [text, setText] = useState('');

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <View style={styles.root}>
          <Text style={styles.text}>{textLabel}</Text>
          <View style={[styles.inputContainer, isFocused && !disabled ? styles.focused : null, text !== '' ? styles.filled : null, errorMessage ? styles.error : null, disabled ? styles.disabled : null]}>
            <View style={styles.placeholder}>
            {leftIcon?<MapPin/>: null}
              <TextInput
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                placeholder={placeholder}
                editable={!disabled}
                placeholderTextColor={colors.ink.lighter}
                autoCapitalize='none'
              />
            </View>
        </View>
        <Text style={styles.caption}>{caption}</Text>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignSelf: 'center',
    gap:12,
  },
  inputContainer: {
    width: 327,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.sky.light,
    alignSelf: 'center'
  },
  placeholder:{
    paddingLeft:16,
    gap:12,
    flexDirection:'row',
    alignItems:'center',
    flex:1
  },
  text: {
    ...TypographyStyles.RegularNoneSemiBold,
    color:colors.ink.base
  },
  caption: {
   ...TypographyStyles.SmallNormalRegular,
    color:colors.ink.lighter,
  },
  error: {
    borderColor: colors.red.base,
  },
  focused: {
    borderColor: colors.primary.base
  },
  disabled: {
    borderColor: colors.sky.lighter,
    backgroundColor: colors.sky.lighter
  },
  filled: {
    borderColor: colors.sky.light
  },
  errorMessage: {
    ...TypographyStyles.SmallNormalRegular,
    color: colors.red.base,
    marginTop:-24
  },
  map:{
    width:24,
    height:24
  }
});


