import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catID = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

    return (
      <View style={styles.screen}>
        <Text>Category meals screen</Text>
        <Text>{selectedCategory.title}</Text>
        <Button
          title="Go to meal detail"
          onPress={() => {
              // Can use push if going to same screen e.g. folders going to child folder in dropbox
            props.navigation.navigate("MealDetail");
          }}
        />
        <Button title="Go back" onPress={() => {
            // can use pop()
            props.navigation.goBack()
        }} />
      </View>
    );
}

CategoryMealsScreen.navigationOptions = (route) => {
  const catID = route.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

  return {
    title: selectedCategory.title
  }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;