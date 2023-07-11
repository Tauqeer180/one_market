import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  popUpScreenWrapper: {
    width: "100%",
    height: 44,
    backgroundColor: "rgba(225,225,225,0.99)",
    top: 6,
    left: 0,
    zIndex: 999,
    shadowColor: "#000",
    elevation: 500,
    flexDirection: "row",
    borderRadius: 2,
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 11,
  },
  crossIconBtn: {
    height: "100%",
    width: 26,
    alignItems: "flex-end",
    paddingTop: 2,
  },
  text: {
    fontSize: 12,
  },
  myShopTextColor: {
    color: "red",
  },
  crossIcon: {
    width: 18,
    height: 18,
    color: "#000000",
  },
});
