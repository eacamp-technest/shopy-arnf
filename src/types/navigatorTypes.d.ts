import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routers} from '../router/routers';

export type AppNavigation = NativeStackNavigationProp<NavigationParamlist>;

export type NavigationParamlist = {
  [Routers.mainRouter]: undefined;
  [Routers.authRouter]: undefined;
  [Routers.welcome]: undefined;
  [Routers.login]: undefined;
  [Routers.paymentMethod]: undefined;
  [Routers.register]: undefined;
  [Routers.verification]: undefined;
  [Routers.test]: undefined;
  [Routers.newCard]: undefined;
  [Routers.bookmarks]: undefined;
  [Routers.discover]: undefined;
  [Routers.home]: undefined;
  [Routers.notifications]: undefined;
  [Routers.settings]: undefined;
  [Routers.tab]: undefined;
  [Routers.popular]:undefinedl
  [Routers.allstore]:undefined;
};
