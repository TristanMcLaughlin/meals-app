import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const meal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>
                {meal.title}
            </Text>
            <Button title="Categories" onPress={() => {
                // Go back to topmost level
                props.navigation.popToTop()
            }} />
        </View>
    )
}

MealDetailScreen.navigationOptions = (route) => {
    const mealId = route.navigation.getParam('mealId');
    const meal = MEALS.find(meal => meal.id === mealId);

    return {
        title: meal.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;