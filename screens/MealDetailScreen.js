import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const meal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
      <Button
        title="Categories"
        onPress={() => {
          // Go back to topmost level
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = route => {
  const mealId = route.navigation.getParam("mealId");
  const meal = MEALS.find(meal => meal.id === mealId);

  return {
    title: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Fave"
          iconName="ios-star"
          onPress={() => {
            console.log("mark as favourite");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
