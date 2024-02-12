import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BenefitsSlider from "../components/BenefitsSlider";
import BenefitsTopMenu from "../components/BenefitsTopMenu";
import categoriesData from "../data/CATEGORIES.json";
import imageStore from "../store/imageStore";
import menuStore from "../store/menuStore";

const AllBenefits = () => {
  const ref = useRef(null);
  useScrollToTop(ref);

  useFocusEffect(() => {
    menuStore.setActiveCategory("Все скидки");
  });

  return (
    <View style={styles.container}>
      <BenefitsTopMenu />
      <ScrollView ref={ref} style={styles.content} showsVerticalScrollIndicator={false}>
        {categoriesData.categories.map((category, index) => (
          <BenefitsSlider
            index={index}
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

export default observer(AllBenefits);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  content: {
    paddingTop: 24,
  },
});
