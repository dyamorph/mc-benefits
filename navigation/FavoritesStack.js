import { createStackNavigator } from "@react-navigation/stack";
import BenefitInfo from "../screens/BenefitInfo";
import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen name="BenefitInfo" component={BenefitInfo} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
