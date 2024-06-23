import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/main/HomeScreen';
import { DiscoverScreen } from '../screens/main/DiscoverScreen';
import { Routers } from './routers';
import { BookmarksScreen } from '../screens/main/BookmarksScreen';
import {NotificationsScreen} from '../screens/main/NotificationsScreen';
import {SettingsScreen} from '../screens/main/SettingsScreen';
import { NavigationParamlist } from '../types/navigatorTypes';
import Home from '../../assets/vectors/home.svg'
import Discover from '../../assets/vectors/search.svg'
import Bookmark from '../../assets/vectors/heart.svg'
import Notifications from '../../assets/vectors/notifications.svg'
import Settings from '../../assets/vectors/menu.svg'
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator<NavigationParamlist>();

export const TabRouter: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarIcon: ({ color,focused }) => {
          let IconComponent;
          switch (route.name) {
            case 'home':
              IconComponent = Home;
              break;
            case 'discover':
              IconComponent = Discover;
              break;
            case 'bookmarks':
              IconComponent = Bookmark;
              break;
            case 'notifications':
              IconComponent = Notifications;
              break;
            case 'settings':
              IconComponent = Settings;
              break;
            default:
              IconComponent = Home;
          }
          return <IconComponent color={focused ? colors.primary.base : color} />;
        },
        tabBarActiveTintColor: colors.primary.base,
      })}>
      <Tab.Screen
        name={Routers.home}
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name={Routers.discover}
        options={{ tabBarLabel: 'Discover' }}
        component={DiscoverScreen}
      />
      <Tab.Screen
        name={Routers.bookmarks}
        component={BookmarksScreen}
        options={{ tabBarLabel: 'Bookmarks' }}
      />
      <Tab.Screen
        name={Routers.notifications}
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Notifications' }}
      />
      <Tab.Screen
        name={Routers.settings}
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings' }}
      />
    </Tab.Navigator>
  );
};