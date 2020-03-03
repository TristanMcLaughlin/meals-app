import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AntDesign } from "@expo/vector-icons";
// import { createDrawerNavigator } from 'react-navigation-drawer';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    // Entire stack in one tab
    // You can add a stack navigator in here instead of a screen, it can be any react component etc
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <AntDesign name="rest" size={25} color={tabInfo.tintColor} />;
        }
      }
    },
    // Different screen in the other tab
    Favourites: {
        screen: FavouritesScreen,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return <AntDesign name="staro" size={25} color={tabInfo.tintColor} />;
          }
        }
    }
  },
  {
    tabBarOptions: {
      // Active tab
      activeTintColor: Colors.accent
    }
  }
);

// Because the MealsNavigator is included in the bottom tabs section, we can use the tab navigator as the main nav
export default createAppContainer(MealsFavTabNavigator);
