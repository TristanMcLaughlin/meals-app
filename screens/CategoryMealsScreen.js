import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return (
      <View style={styles.screen}>
        <Text>Category meals screen</Text>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;