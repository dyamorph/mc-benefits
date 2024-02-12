import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AllBenefits from "../screens/AllBenefits";
import BenefitInfo from "../screens/BenefitInfo";
import CategoryBenefits from "../screens/CategoryBenefits";

const Stack = createStackNavigator();

const BenefitsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllBenefits"
        component={AllBenefits}
        options={{
          headerShown: false,
        }}
      />
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
