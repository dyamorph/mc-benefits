import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const NewDiscounts = () => {
  return (
    <View>
      <Text>Новинки</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
    </View>
  );
};

export default NewDiscounts;

const styles = StyleSheet.create({});
