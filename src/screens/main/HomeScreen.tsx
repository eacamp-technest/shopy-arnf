import {View, StyleSheet, StatusBar, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { NavBars } from '../../components/NavBars';
import { colors } from '../../theme/colors';
import {useFocusEffect} from '@react-navigation/native';
import { TextInputs } from '../../components/TextInputs';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';
import { TypographyStyles } from '../../theme/typography';
import { Tables } from '../../components/Tables';
import Menu from '../../../assets/vectors/menu.svg'
import ShopBag from '../../../assets/vectors/shopping-bag.svg'

const AllStore: React.FC = () => {
  return (
    <View>
      <Tables
        content="CATEGORIES"
        contentStyle={TypographyStyles.title3}
        Right={
          <Text onPress={() => console.log('-->')} style={styles.tableRight}>
            See All
          </Text>
        }
      />
    </View>
  );
};

const InStore: React.FC = () => {
  return (
    <View>
      <Text> In Store</Text>
    </View>
  );
};

const renderScene = SceneMap({
  allStore: AllStore,
  inStore: InStore,
});

export const HomeScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const {top} = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBarStyle('dark-content');
      };
    }, []),
  );

  return (
    <View style={styles.root}>
      <View style={[styles.header, {paddingTop: top}]}>
        <NavBars
          size='standard'
          leftIcon={<Menu color={'white'}/>}
          title='SHOPPAY' 
          style={styles.title}
          rightIcon={<ShopBag color={'white'}/>}
        />
        <TextInputs
          style={styles.inner}
          type="text"
          placeholder="Search brand, products..."
          
        />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        swipeEnabled={true}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({route, color}) => (
              <Text style={[TypographyStyles.RegularNoneSemiBold, {color}]}>
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

const routes = [
  {key: 'allStore', title: 'All Stores'},
  {key: 'inStore', title: 'In-Store'},
];

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    flex: 1,
  },
  inner: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 18,
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  contentContainerStyle: {
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  inputStyle: {
    backgroundColor: 'white',
  },
  tableRight: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.primary.base,
  },
  sceneContainerStyle: {
    paddingTop: 8,
  },
  title:{
    color:'white'
  }
});