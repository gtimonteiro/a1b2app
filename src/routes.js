import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import New from './pages/New';
import Notification from './pages/Notification';
import Profile from './page/Profile';
import Search from './pages/Search';

const Tab = createBottomTabNavigator();