import React, { FC, memo } from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { TabBarBottom } from './Components';
import { Home, Meditate, Sleep } from './Screens';

const Blank = () => null;

const Tab = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <TabBarBottom {...props} />;

const Tabs: FC = () => (
  <Tab.Navigator tabBar={tabBar} initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Sleep" component={Sleep} />
    <Tab.Screen name="Meditate" component={Meditate} />
    <Tab.Screen name="Music" component={Blank} />
    <Tab.Screen name="Profile" component={Blank} />
  </Tab.Navigator>
);

export default memo(Tabs);
