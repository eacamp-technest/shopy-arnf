import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationParamlist } from '../../types/navigatorTypes'
import { Routers } from '../../router/routers'
import { colors } from '../../theme/colors'
import { normalize } from '../../theme/metrics'
import { NavBars } from '../../components/NavBars'
import ChevronLeft from '../../../assets/vectors/chevron-left.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Sliders from '../../../assets/vectors/sliders.svg'

const Chip = ({ label, selected, onPress }: { label: string, selected: boolean, onPress: () => void }) => (
    <TouchableOpacity
      style={[styles.chip, selected && styles.chipSelected]}
      onPress={onPress}
    >
      <Text style={styles.chipText}>{label}</Text>
    </TouchableOpacity>
  );

export const PopularScreen: React.FC<
NativeStackScreenProps<NavigationParamlist, Routers.popular>
> = ({navigation}) => {
const navigateToHome=()=>{
    navigation.navigate(Routers.home);
}
const { top } = useSafeAreaInsets();
const [selectedChip, setSelectedChip] = useState<string>('All');
  const chips = ['All', 'Shoes', 'T-Shirt', 'Tops', 'Kids'];
  if (selectedChip==='All'){
  return (
    <View style={styles.root}>
      <View style={[styles.header, { paddingTop: top }]}>
        <NavBars
          size="standard"
          leftIcon={<ChevronLeft color={'white'} />}
          title="MOST POPULAR"
          style={styles.title}
          rightIcon={<Sliders color={'white'} />}
          leftPress={navigateToHome}
        />
         <View style={styles.scene}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {chips.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            selected={selectedChip === chip}
            onPress={() => setSelectedChip(chip)}
          />
        ))}
      </ScrollView>
      
    </View>
      </View>
    </View>
  )}
  else if (selectedChip==='Shoes'){
    return (
        <View style={styles.root}>
          <View style={[styles.header, { paddingTop: top }]}>
            <NavBars
              size="standard"
              leftIcon={<ChevronLeft color={'white'} />}
              title="MOST POPULAR"
              style={styles.title}
              rightIcon={<Sliders color={'white'} />}
              leftPress={navigateToHome}
            />
             <View style={styles.scene}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
            {chips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                selected={selectedChip === chip}
                onPress={() => setSelectedChip(chip)}
              />
            ))}
          </ScrollView>
          
        </View>
          </View>
        </View>
      )
  }
  else if (selectedChip==='T-Shirt'){
    return (
        <View style={styles.root}>
          <View style={[styles.header, { paddingTop: top }]}>
            <NavBars
              size="standard"
              leftIcon={<ChevronLeft color={'white'} />}
              title="MOST POPULAR"
              style={styles.title}
              rightIcon={<Sliders color={'white'} />}
              leftPress={navigateToHome}
            />
             <View style={styles.scene}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
            {chips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                selected={selectedChip === chip}
                onPress={() => setSelectedChip(chip)}
              />
            ))}
          </ScrollView>
          
        </View>
          </View>
        </View>
      )
  }
  else if (selectedChip==='Tops'){
    return (
        <View style={styles.root}>
          <View style={[styles.header, { paddingTop: top }]}>
            <NavBars
              size="standard"
              leftIcon={<ChevronLeft color={'white'} />}
              title="MOST POPULAR"
              style={styles.title}
              rightIcon={<Sliders color={'white'} />}
              leftPress={navigateToHome}
            />
             <View style={styles.scene}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
            {chips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                selected={selectedChip === chip}
                onPress={() => setSelectedChip(chip)}
              />
            ))}
          </ScrollView>
          
        </View>
          </View>
        </View>
      )
  }
  else if (selectedChip==='Kids'){
    return (
        <View style={styles.root}>
          <View style={[styles.header, { paddingTop: top }]}>
            <NavBars
              size="standard"
              leftIcon={<ChevronLeft color={'white'} />}
              title="MOST POPULAR"
              style={styles.title}
              rightIcon={<Sliders color={'white'} />}
              leftPress={navigateToHome}
            />
             <View style={styles.scene}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
            {chips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                selected={selectedChip === chip}
                onPress={() => setSelectedChip(chip)}
              />
            ))}
          </ScrollView>
          
        </View>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
      },
      header: {
        backgroundColor: colors.bdazzledBlue.darkest,
        width:normalize('width',375),
        height:normalize('height',279),
        gap:24
      },
      title: {
        color: 'white',
      },
      chipContainer: {
        flexDirection: 'row',
        padding: 10,
      },
      chip: {
        paddingVertical: 8,
       alignItems:'center',
        borderRadius: 20,
        backgroundColor: colors.bdazzledBlue.base,
        marginHorizontal: 5,
        width:normalize('width',65),
        height:normalize('height',35),
      },
      chipSelected: {
        backgroundColor: colors.primary.base,
      },
      chipText: {
        color: 'white',
      },
      scene: {
        alignItems: 'center',
      },
})