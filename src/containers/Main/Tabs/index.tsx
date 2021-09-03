import React, { FC, memo } from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { TabBarBottom } from './Components';
import { Alerts, Discover, Feed, Home } from './Screens';

const Tab = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <TabBarBottom {...props} />;

const Tabs: FC = () => (
  <Tab.Navigator tabBar={tabBar} initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Alerts" component={Alerts} />
    <Tab.Screen name="Discover" component={Discover} />
  </Tab.Navigator>
);

export default memo(Tabs);
