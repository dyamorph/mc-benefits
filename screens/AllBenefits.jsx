import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, View } from "react-native";
import BenefitsCategory from "../components/BenefitsCategory";
import BenefitsMainPage from "../components/BenefitsMainPage";
import BenefitsTopMenu from "../components/BenefitsTopMenu";
import COLORS from "../constants/COLORS.json";
import menuStore from "../store/menuStore";

const AllBenefits = () => (
  <View style={styles.container}>
    <BenefitsTopMenu />
    {menuStore.activeCategory === "Все скидки" ? (
      <BenefitsMainPage />
    ) : (
      <BenefitsCategory />
    )}
  </View>
);

export default observer(AllBenefits);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
