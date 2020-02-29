import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.meal.imageUrl }}
              style={styles.bgImage}
            >
            <Text style={styles.headerTitle}>{props.meal.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetail }}>
            <Text>{props.meal.duration}m</Text>
            <Text>{props.meal.complexity.toUpperCase()}</Text>
            <Text>{props.meal.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'open-sans',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 5,
    elevation: 2,
    textAlign: 'center'
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#eee",
    marginBottom: 5
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    height: '15%',
    fontSize: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    fontFamily: 'open-sans',
    justifyContent: "space-between"
  }
});

export default MealItem;
