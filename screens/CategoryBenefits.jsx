import { useRoute } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BenefitsCategoryItem from "../components/BenefitsCategoryItem";
import BenefitsTopMenu from "../components/BenefitsTopMenu";
import COLORS from "../constants/COLORS.json";

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

export default observer(CategoryBenefits);

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
