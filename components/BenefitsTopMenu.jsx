import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Flame from "../assets/icons/flame.svg";
import COLORS from "../constants/COLORS.json";
import categoriesData from "../data/CATEGORIES.json";
import menuStore from "../store/menuStore";
import BenefitsTopMenuItem from "./BenefitsTopMenuItem";

const BenefitsTopMenu = () => {
  const [scrollInitialized, setScrollInitialized] = useState(false);
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();
  const activeCategory = menuStore.activeCategory;

  useEffect(() => {
    if (scrollInitialized && scrollViewRef.current) {
      const buttonOffset = menuStore.activeCategoryIndex * 130;
      scrollViewRef.current.scrollTo({ x: buttonOffset, animated: true });
    }
  }, [scrollInitialized, menuStore.activeCategory]);

  const categories = categoriesData.categories
    .filter((category) => category.title !== "Новинки")
    .map((category) => category.title);

  const handleAllDiscountsPress = () => {
    menuStore.setActiveCategory("Все скидки");
  };

  const handleLayout = () => {
    setScrollInitialized(true);
  };

  const handleCategoryPress = (category, index) => {
    menuStore.setActiveCategory(category, index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        onLayout={handleLayout}
      >
        <TouchableOpacity
          onPress={handleAllDiscountsPress}
          style={[
            styles.category,
            activeCategory === "Все скидки" && styles.activeCategory,
          ]}
        >
          <Flame
            width={20}
            height={20}
            fill={activeCategory === "Все скидки" ? COLORS.white : COLORS.dark}
            style={styles.icon}
          />
          <Text
            style={[
              styles.allBenefitsCategory,
              activeCategory === "Все скидки" && styles.activeCategoryText,
            ]}
          >
            Все скидки
          </Text>
        </TouchableOpacity>
        {categories.map((category, index) => (
          <BenefitsTopMenuItem
            key={index}
            category={category}
            activeCategory={activeCategory}
            handleCategoryPress={() => handleCategoryPress(category, index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default observer(BenefitsTopMenu);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F5",
    borderStyle: "solid",
  },
  scrollView: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  category: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 12,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: COLORS.bgGray,
  },
  allBenefitsCategory: {
    fontFamily: "SF-Bold",
    fontSize: 14,
  },
  categoryText: {
    fontSize: 13,
    color: COLORS.dark,
    fontFamily: "Inter-Semibold",
  },
  activeCategoryText: {
    color: COLORS.white,
  },
  activeCategory: {
    backgroundColor: COLORS.primary,
  },
  icon: {
    marginRight: 4,
  },
});
