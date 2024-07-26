import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { NavBars } from '../../components/NavBars';
import { ButtonTransparent } from '../../components/ButtonTransparent';
import { colors } from '../../theme/colors';
import { TypographyStyles } from '../../theme/typography';
import { TextInputs } from '../../components/TextInputs';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Menu from '../../../assets/vectors/menu.svg'
import ShopBag from '../../../assets/vectors/shopping-bag.svg'
import { normalize } from '../../theme/metrics';
import { Product } from '../../components/Product';
import { Routers } from '../../router/routers';


const Chip = ({ label, selected, onPress }: { label: string, selected: boolean, onPress: () => void }) => (
  <TouchableOpacity
    style={[styles.chip, selected && styles.chipSelected]}
    onPress={onPress}
  >
    <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{label}</Text>
  </TouchableOpacity>
);

const AllStore:React.FC = () => {
  const [selectedChip, setSelectedChip] = useState<string>('Shoes');
  const chips = ['All', 'Shoes', 'T-Shirt', 'Tops', 'Kids'];
  const navigation = useNavigation();
 if(selectedChip==='All'){
  return (
    <View>
       <NavBars 
          size="large"
          largeTitle="Categories"
          button={<ButtonTransparent label="See All" />}
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
      <Text>it is all page</Text>
    </View>
    </View>
  );}
  else if(selectedChip==='Shoes'){
    return (
      <View>
        <NavBars 
          size="large"
          largeTitle="Categories"
          button={<ButtonTransparent label="See All" />}
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
        <ScrollView horizontal>
          <View style={styles.shoesProducts} >
        <Product url='https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg' productName='Nike air max 90' cost='$90' brand='nike.com'/>
        <Product url='https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg' productName='Nike air max 90' cost='$90' brand='nike.com'/>
        <Product url='https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg' productName='Nike air max 90' cost='$90' brand='nike.com'/>
          </View>
        </ScrollView>
      </View>
      <NavBars 
          size="large"
          largeTitle="Popular Products"
          button={<ButtonTransparent label="See All" onPress={()=> navigation.navigate(Routers.popular)}/>}
          style={styles.popularproductsnavbar}
        />
      </View>
    )
  }
  else if(selectedChip==='T-Shirt'){
    return (
      <View>
       <NavBars 
          size="large"
          largeTitle="Categories"
          button={<ButtonTransparent label="See All" />}
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
      <Text>it is all page</Text>
    </View>
    </View>
    )
  }
  else if(selectedChip==='Tops'){
    return (
      <View>
       <NavBars 
          size="large"
          largeTitle="Categories"
          button={<ButtonTransparent label="See All" />}
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
      <Text>it is all page</Text>
    </View>
    </View>
    )
  }
  else if(selectedChip==='Kids'){
    return (
      <View>
       <NavBars 
          size="large"
          largeTitle="Categories"
          button={<ButtonTransparent label="See All" />}
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
      <Text>it is all page</Text>
    </View>
    </View>
    )
  }
};

const InStore: React.FC = () => {
  return (
    <View style={styles.scene}>
      <Text>In Store Content</Text>
    </View>
  );
};

const renderScene = SceneMap({
  allStore: AllStore,
  inStore: InStore,
});

export const HomeScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    { key: 'allStore', title: 'All Stores' },
    { key: 'inStore', title: 'In-Store' },
  ]);
  const { top } = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBarStyle('dark-content');
      };
    }, [])
  );

  return (
    <View style={styles.root}>
      <View style={[styles.header, { paddingTop: top }]}>
        <NavBars
          size="standard"
          leftIcon={<Menu color={'white'} />}
          title="SHOPPAY"
          style={styles.title}
          rightIcon={<ShopBag color={'white'} />}
        />
        <TextInputs
          style={styles.inner}
          type="text"
          placeholder="Search brand, products..."
        />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        swipeEnabled={true}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({ route, color }) => (
              <Text style={[TypographyStyles.RegularNoneSemiBold, { color }]}>
                {route.title}
              </Text>
            )}
            inactiveColor={'white'}
            activeColor={colors.skyBlue.base}
            contentContainerStyle={styles.contentContainerStyle}
          />
        )}
        animationEnabled={true}
        onIndexChange={setIndex}
        sceneContainerStyle={styles.sceneContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 18,
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  inner: {
    paddingVertical: 24,
  },
  contentContainerStyle: {
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  sceneContainerStyle: {
    paddingTop: 8,
  },
  title: {
    color: 'white',
  },
  scene: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  chip: {
    paddingVertical: 8,
   alignItems:'center',
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
    width:normalize('width',65),
    height:normalize('height',35),
  },
  chipSelected: {
    backgroundColor: colors.primary.base,
  },
  chipText: {
    color: '#000',
  },
  chipTextSelected: {
    color: '#fff',
  },
  shoesProducts:{
    gap:16,
    flexDirection:'row'
  },
  popularproductsnavbar:{
    marginTop:24
  }
});
