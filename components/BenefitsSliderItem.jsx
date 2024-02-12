import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LikeIconPressed from "../assets/icons/likePressed";
import COLORS from "../constants/COLORS.json";
import favoritesStore from "../store/favoritesStore";

const BenefitsSliderItem = ({ item, image, isFirstSlider, index }) => {
  const navigation = useNavigation();

  const getTitleStyle = () => {
    return isFirstSlider
      ? index === 1
        ? styles.secondElemTitle
        : styles.firstSliderTitle
      : styles.title;
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate("BenefitInfo")} activeOpacity={0.9}>
      <Image
        source={image}
        style={[
          styles.image,
          isFirstSlider
            ? { width: 304, height: 170, marginBottom: 0 }
            : { width: 225, height: 127 },
        ]}
      />
      {favoritesStore.isFavorite(item) && (
        <View style={styles.likeButton}>
          <LikeIconPressed fill={COLORS.primary} />
        </View>
      )}
      <Text style={getTitleStyle()}>{item.title}</Text>
      <View style={isFirstSlider ? styles.firstSliderDiscount : styles.discount}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default observer(BenefitsSliderItem);

const styles = StyleSheet.create({
  image: {
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontFamily: "SF-SemiBold",
    width: 225,
  },
  firstSliderTitle: {
    position: "absolute",
    top: 12,
    left: 12,
    fontFamily: "SF-SemiBold",
  },
  secondElemTitle: {
    position: "absolute",
    top: 12,
    left: 12,
    fontFamily: "SF-SemiBold",
    color: COLORS.white,
  },
  likeButton: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: COLORS.white,
    opacity: 0.9,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 50,
  },
  discount: {
    backgroundColor: COLORS.secondary,
    position: "absolute",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
    top: 96,
    left: 8,
  },
  firstSliderDiscount: {
    backgroundColor: COLORS.secondary,
    position: "absolute",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
    left: 12,
    bottom: 12,
  },
  discountText: {
    color: COLORS.white,
    fontSize: 12,
  },
});
