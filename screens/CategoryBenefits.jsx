import { StyleSheet, View, Text, FlatList } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import BenefitsCategoryItem from "../components/BenefitsCategoryItem";
import COLORS from "../constants/COLORS.json";
import BenefitsTopMenu from "../components/BenefitsTopMenu";

const CategoryBenefits = () => {
  const route = useRoute();

  const { category, images, title } = route.params;

  return (
    <View style={styles.container}>
      <BenefitsTopMenu />

      <FlatList
        data={category}
        renderItem={({ item, index }) => (
          <BenefitsCategoryItem key={index} item={item} image={images[index]} inFavorites={false} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.slider}
        ListHeaderComponent={<Text style={styles.title}>{title}</Text>}
      />
    </View>
  );
};

export default CategoryBenefits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 28,
    fontFamily: "SF-Bold",
    paddingTop: 25,
  },
  slider: {
    gap: 32,
    paddingHorizontal: 16,
  },
});
