import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, Header } from "@react-navigation/stack";
import Splash from "./Screen/Splash";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Category from "./Screen/Category";
import CategoriesMeals from "./Screen/CategoriesMeals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import meals from "./Store/reducer/meals";
import MealsDetail from "./Screen/MealsDetail";

const rootReducer = combineReducers({
  meals: meals,
});
const store = createStore(rootReducer);

const Main = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, elevation: 2 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Main.Navigator initialRouteName="Splash">
            <Main.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Main.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Main.Screen name="SignUp" component={SignUp} />
            <Main.Screen name="Category" component={Category} />
            <Main.Screen name="CategoriesMeals" component={CategoriesMeals} />
            <Main.Screen name="MealsDetail" component={MealsDetail} />
          </Main.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}
