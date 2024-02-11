import { createStackNavigator } from "@react-navigation/stack";
import AllBenefits from "../screens/AllBenefits";
import CategoryBenefits from "../screens/CategoryBenefits";
import BenefitInfo from "../screens/BenefitInfo";
import React from "react";

const Stack = createStackNavigator();

const BenefitsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllBenefits" component={AllBenefits} options={{ headerShown: false }} />
      <Stack.Screen
        name="CategoryBenefits"
        component={CategoryBenefits}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="BenefitInfo" component={BenefitInfo} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default BenefitsStack;
