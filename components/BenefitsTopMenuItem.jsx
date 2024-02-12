import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../constants/COLORS.json";

const BenefitsTopMenuItem = ({ category, activeCategory, handleCategoryPress }) => {
  return (
    <TouchableOpacity
      onPress={handleCategoryPress}
      style={[styles.category, category === activeCategory && styles.activeCategory]}
      activeOpacity={0.7}
    >
      <Text style={[styles.categoryText, category === activeCategory && styles.activeCategoryText]}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default BenefitsTopMenuItem;

const styles = StyleSheet.create({
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
  categoryText: {
    fontSize: 13,
    color: COLORS.dark,
    fontFamily: "Inter-Semibold",
  },
  activeCategoryText: {
    color: "white",
  },
  activeCategory: {
    backgroundColor: COLORS.primary,
  },
});
