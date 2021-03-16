import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../Component/MealList";
import { useSelector } from "react-redux";

const CategoriesMeals = (props) => {
  const catId = props.route.params.categoriesid;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  console.log("availableMeals", availableMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.Ids.indexOf(catId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoriesMeals.navigationOptions = (navigationData) => {
  const catId = props.route.params.categoriesid;
  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesMeals;
