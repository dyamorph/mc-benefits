import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SaleIcon from "../assets/icons/sale.svg";
import HeartIcon from "../assets/icons/heart.svg";
import AccountIcon from "../assets/icons/account.svg";
import COLORS from "../constants/COLORS.json";
import BenefitsStack from "./BenefitsStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

const MainTabBarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.paragraph,
        tabBarLabelStyle: { fontFamily: "SF-SemiBold", fontSize: 12, marginTop: -2 },
      }}
    >
      <Tab.Screen
        name="Скидки"
        component={BenefitsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <SaleIcon fill={focused ? COLORS.primary : COLORS.paragraph} />
          ),
        }}
      />
      <Tab.Screen
        name="Избранное"
        component={FavoritesStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HeartIcon fill={focused ? COLORS.primary : COLORS.paragraph} />
          ),
        }}
      />
      <Tab.Screen
        name="Аккаунт"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AccountIcon fill={focused ? COLORS.primary : COLORS.paragraph} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabBarNavigator;
