import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import COLORS from "../constants/COLORS.json";
import categoriesData from "../data/CATEGORIES.json";
import imageStore from "../store/imageStore";
import menuStore from "../store/menuStore";
import BenefitsCategoryItem from "./BenefitsCategoryItem";
import { useState, useEffect } from "react";

const BenefitsCategory = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getDataByCategoryTitle = (categoryTitle) => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);

    const data = categoriesData.categories.find(
      (category) => category.title === categoryTitle,
    );
    return data ? data.items : [];
  };

  useEffect(() => {
    setIsLoading(true);
  }, [menuStore.activeCategory]);

  return (
    <View style={styles.container}>
      {isLoading === true ? (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          style={styles.loadingIndicator}
        />
      ) : (
        <FlatList
          data={getDataByCategoryTitle(menuStore.activeCategory)}
          renderItem={({ item, index }) => (
            <BenefitsCategoryItem
              key={item.title}
              item={item}
              image={
                imageStore.getCategoryImagesByTitle(menuStore.activeCategory)[
                  index
                ]
              }
              inFavorites={false}
            />
          )}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.slider}
          ListHeaderComponent={
            <Text style={styles.title}>{menuStore.activeCategory}</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  content: {
    paddingTop: 24,
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
  loadingIndicator: {
    alignSelf: "center",
    flex: 1,
  },
});

export default BenefitsCategory;
