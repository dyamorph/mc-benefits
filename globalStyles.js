import { StyleSheet, Platform } from "react-native";
import COLORS from "./constants/COLORS.json";

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
});
