import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BenefitsSliderItem from "./BenefitsSliderItem";
import COLORS from "../constants/COLORS.json";
import LocationIcon from "../assets/icons/location.svg";
import { useNavigation } from "@react-navigation/native";
import menuStore from "../store/menuStore";
import { observer } from "mobx-react-lite";

const BenefitsSlider = ({ title, categoryData, images, isFirstSlider }) => {
  const navigation = useNavigation();

  const handlePress = (categoryData) => {
    menuStore.setActiveCategory(title);
    navigation.navigate("CategoryBenefits", {
      category: categoryData,
      title: title,
      images: images,
      activeCategory: menuStore.activeCategory,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{title}</Text>
        {isFirstSlider ? (
          <TouchableOpacity style={styles.location}>
            <LocationIcon fill={COLORS.paragraph} />
            <Text style={styles.locationText}>Гродно, Минск...</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handlePress(categoryData)}>
            <Text style={styles.link}>Все</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.slider}
      >
        {categoryData.slice(0, 4).map((item, index) => (
          <BenefitsSliderItem
            key={index}
            index={index}
            item={item}
            image={images[index]}
            isFirstSlider={isFirstSlider}
          />
        ))}
        {categoryData.length > 4 && (
          <TouchableOpacity style={styles.seeMoreCard} onPress={() => handlePress(categoryData)}>
            <Text style={styles.seeMoreText}>Смотреть ещё {categoryData.length - 4}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default observer(BenefitsSlider);

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryTitle: {
    fontFamily: "SF-Bold",
    fontSize: 20,
  },
  location: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 7.3,
  },
  locationText: {
    fontFamily: "SF-SemiBold",
    color: COLORS.paragraph,
  },
  slider: {
    paddingHorizontal: 16,
    columnGap: 8,
  },
  link: {
    color: COLORS.primary,
    fontFamily: "SF-SemiBold",
  },
  seeMoreCard: {
    width: 225,
    height: 127,
    borderRadius: 12,
    borderColor: COLORS.neutral,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  seeMoreText: {
    color: COLORS.paragraph,
    fontFamily: "SF-SemiBold",
  },
});
