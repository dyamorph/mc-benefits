import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

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
