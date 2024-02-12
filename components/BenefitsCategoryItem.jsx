import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LikeIcon from "../assets/icons/like.svg";
import LikeIconPressed from "../assets/icons/likePressed.svg";
import COLORS from "../constants/COLORS.json";
import favoritesStore from "../store/favoritesStore";

const BenefitsCategoryItem = ({ item, image, inFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  const handleLikePress = () => {
    setIsFavorite(!isFavorite);
    favoritesStore.toggleFavorite({ ...item, image: image });
  };

  const removeFromFavorites = () => {
    if (favoritesStore.isFavorite(item)) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      favoritesStore.removeFromFavorites(item);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("BenefitInfo")}
      activeOpacity={0.9}
    >
      <View>
        <Image source={image} style={[styles.image]} />
      </View>
      <Text style={styles.name}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.discount}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={inFavorites ? removeFromFavorites : handleLikePress}
      >
        {favoritesStore.isFavorite(item) ? <LikeIconPressed fill={COLORS.primary} /> : <LikeIcon />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default observer(BenefitsCategoryItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  image: {
    width: "100%",
    height: 193,
    borderRadius: 12,
    marginBottom: 8,
  },
  name: {
    fontFamily: "SF-SemiBold",
    width: "100%",
    marginBottom: 4,
  },
  description: {
    fontFamily: "SF-Normal",
    color: COLORS.paragraph,
  },
  likeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: COLORS.white,
    opacity: 0.9,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 50,
  },
  discount: {
    backgroundColor: COLORS.secondary,
    position: "absolute",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
    top: 160,
    left: 8,
  },
  discountText: {
    color: COLORS.white,
    fontSize: 12,
  },
});
