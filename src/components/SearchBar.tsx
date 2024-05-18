import { View, Text,TextInput, StyleSheet, Pressable } from 'react-native'
import React,{useState} from 'react'
import Search from '../../assets/vectors/search.svg'
import Close from '../../assets/vectors/close.svg'
import Microfon from '../../assets/vectors/mic.svg'
import { colors } from '../theme/colors'
import { CommonStyles } from '../theme/common.styles'
import { TypographyStyles } from '../theme/typography'

type TSearch = 'normal' | 'transparent'

interface ISearch {
  searchType: TSearch;

}

export const SearchBar:React.FC<ISearch> = ({searchType}) => {
    const [isFocused,setIsFocused] = useState<Boolean>(false)
    const [text, setText] = useState('');

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
    
    
  return (
    <View >
      <View style={[CommonStyles.alignCenterRow,styles.focused]}>
        <View style={[isFocused && searchType=== 'normal' ? styles.focusedNormal : styles[searchType]]}>
          <View style={styles.searchBar}>
            {searchType === 'transparent' ?<Search style={styles.transparentIcon}/> : <Search style={styles.normalIcon}/>}
          <TextInput 
          style={{height:'50%'}} 
          placeholder='Search' 
          onBlur={handleBlur} 
          onFocus={handleFocus}
          onChangeText={newText => setText(newText)}
          defaultValue={text}

          />
          </View>
          {!isFocused ? <Microfon color={colors.ink.darkest} /> : null}
          {text !== '' ? <Close color={colors.ink.darkest}/> : null}
        </View>
        <Text style={TypographyStyles.RegularNoneRegular}> {isFocused? 'Cancel' : null}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  normal:{
    backgroundColor:colors.sky.lighter,
    width:327,
    height:36,
    borderRadius:8,
    ...CommonStyles.alignJustifyCenterRow,
    justifyContent:'space-between',
    padding:10,
    gap:66
  },
  transparent:{
    width:327,
    height: 48,
    ...CommonStyles.alignJustifyCenterRow,
    justifyContent:'space-between',
    padding:10,
    gap:66
  },
  searchBar:{
    gap:12,
    ...CommonStyles.flexAlignCenter,
    flexDirection:'row',
    
  },
  transparentIcon :{
    width:24, 
    height:24
  },
  normalIcon :{
    width:16, 
    height:16
  },
  focusedNormal:{
    backgroundColor:colors.sky.lighter,
    width:258,
    height:36,
    borderRadius:8,
    ...CommonStyles.alignJustifyCenterRow,
    justifyContent:'space-between',
    padding:10,
    gap:66
  },
  focusedTransparent:{
    width:258,
    height:48,
    borderRadius:8,
    ...CommonStyles.alignJustifyCenterRow,
    justifyContent:'space-between',
    padding:10,
    gap:66
  },
  focused:{
    gap:16,
    justifyContent:'space-around'
  }
})

