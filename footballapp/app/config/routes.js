import * as React from 'react';
import { Button, Dimensions, Text, View, Image, StyleSheet, FlatList, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { BlurView } from 'expo-blur';

import MainTab from '../components/MainTab';
import HomeScreen from '../modules/home/scenes/Home';
const { width } = Dimensions.get("screen");

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>
  );
}


function SearchScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search screen</Text>
      </View>
    );
  }

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode={false}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator headerMode={false}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
    return (
      <SearchStack.Navigator headerMode={false}>
        <SearchStack.Screen name="Search" component={SearchScreen} />
        <SearchStack.Screen name="Details" component={DetailsScreen} />
      </SearchStack.Navigator>
    );
  }

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MainTab {...props} />}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Leagues" component={SettingsStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
   
  });
