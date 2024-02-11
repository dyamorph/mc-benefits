import { StyleSheet, View, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import BenefitsTopMenu from "../components/BenefitsTopMenu";
import categoriesData from "../data/CATEGORIES.json";
import { useScrollToTop } from "@react-navigation/native";
import imageStore from "../store/imageStore";
import BenefitsSlider from "../components/BenefitsSlider";

const AllBenefits = () => {
  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <View style={styles.container}>
      <BenefitsTopMenu />
      <ScrollView ref={ref} style={styles.content} showsVerticalScrollIndicator={false}>
        {categoriesData.categories.map((category, index) => (
          <BenefitsSlider
            key={index}
            title={category.title}
            categoryData={category.items}
            images={imageStore.getCategoryImagesByTitle(category.title)}
            isFirstSlider={index === 0}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AllBenefits;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  content: {
    paddingTop: 24,
  },
});
