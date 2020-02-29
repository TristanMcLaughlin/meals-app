import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem meal={itemData.item} onSelect={()=>{
        props.navigation.navigate('MealDetail', {mealId: itemData.item.id});
      }}/>
    );
  };

  const catID = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catID) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        numColumns={1}
        style={{width: '100%'}}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = route => {
  const catID = route.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

  return {
    title: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
