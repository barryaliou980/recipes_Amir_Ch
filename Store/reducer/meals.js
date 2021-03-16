import { MEALS } from "../../data/dummy-data";
import { SET_FILTER, TOGGLE_FAVORITE } from "../Action/Meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoritMeals: [],
};

const meals = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritMeals.findIndex(
        (meal) => meal.id == action.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoritMeals];
        updateFavMeals.splice(existingIndex, 1);
        return { ...state, favoritMeals: updateFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id == action.mealId);
        return { ...state, favoritMeals: state.favoritMeals.concat(meal) };
      }
    case SET_FILTER:
      const appliedFilter = action.filters;
      const updateFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilter.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilter.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilter.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilter.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updateFilteredMeals };

    default:
      return state;
  }
};

export default meals;
