import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import favoritesStore from "../store/favoritesStore";
import BenefitsCategoryItem from "../components/BenefitsCategoryItem";
import { useScrollToTop } from "@react-navigation/native";

import COLORS from "../constants/COLORS.json";

const Favorites = () => {
  const ref = useRef(null);
  useScrollToTop(ref);

  const favorites = favoritesStore.favorites;

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <View>
          <Text style={styles.title}>Избранное</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.slider}
            ref={ref}
          >
            {favorites.map((item, index) => (
              <BenefitsCategoryItem key={index} item={item} image={item.image} inFavorites={true} />
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.emptyFavoritesContainer}>
          <Image
            style={styles.emptyFavoritesImage}
            source={require("../assets/images/empty-favorites.png")}
          />
          <Text style={styles.emptyFavoritesTitle}>Нет избранного</Text>
          <Text style={styles.emptyFavoritesText}>
            Чтобы добавить любимые скидки, просто нажими на иконку 💙️ в карточке
          </Text>
        </View>
      )}
    </View>
  );
};

export default observer(Favorites);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  emptyFavoritesContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 200,
  },
  emptyFavoritesImage: {
    marginBottom: 37,
  },
  emptyFavoritesTitle: {
    fontFamily: "SF-Bold",
    fontSize: 20,
    marginBottom: 12,
  },
  emptyFavoritesText: {
    fontFamily: "SF-Normal",
    color: COLORS.paragraph,
    textAlign: "center",
    paddingHorizontal: 25,
    lineHeight: 20,
  },
  slider: {
    rowGap: 32,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: "SF-Bold",
    paddingTop: 14,
  },
});
