import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import DefaultText from "../Component/DefaultText";
const MealItem = (props) => {
  return (
    <View style={styles.Main}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.header }}>
          <ImageBackground source={{ uri: props.image }} style={styles.img}>
            <Text style={styles.title}>{props.title}</Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.detail }}>
          <DefaultText>{props.duration}m</DefaultText>
          <DefaultText>{props.complexity}</DefaultText>
          <DefaultText>{props.affordability}</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    padding: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
  img: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  header: {
    height: "85%",
  },
  detail: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    height: "15%",
  },
  title: {
    fontFamily: "AllertaRegular",
    color: "white",
    fontSize: 19,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    textAlign: "center",
  },
});

export default MealItem;
