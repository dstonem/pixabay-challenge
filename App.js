import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import FormScreen from "./screens/FormScreen";
import ImageDetailsScreen from "./screens/ImageDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Search for Images!"}>
        <Stack.Screen name="Search for Images!" component={FormScreen} />
        <Stack.Screen name="ImageDetails" component={ImageDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
