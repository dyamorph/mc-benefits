import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import COLORS from "../constants/COLORS.json";
import categoriesData from "../data/CATEGORIES.json";
import imageStore from "../store/imageStore";
import BenefitsSlider from "./BenefitsSlider";

const BenefitsMainPage = () => {
  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <ScrollView
      ref={ref}
      style={styles.content}
      showsVerticalScrollIndicator={false}
    >
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});

export default BenefitsMainPage;
