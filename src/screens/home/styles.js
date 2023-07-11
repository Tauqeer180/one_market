import { StyleSheet, Dimensions } from "react-native";
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  wrapperContainer: {
    width: "94%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
  },
  inputContainer: {
    marginTop: 16,
    marginBottom: 10,
    width: "100%",
    height: 44,
    backgroundColor: "#E5E5E5",
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.2)",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 6,
    paddingTop: 8,
    paddingBottom: 8,
    shadowColor: "black",
    elevation: 0.8,
  },
  input: {
    flex: 1,
    letterSpacing: 0.6,
  },
  searchIconContainer: {},
  searchIcon: {},
  FindShopCardPB: {
    paddingBottom: 16,
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
  },
  ItemCardContainer: {
    marginTop: 16,
  },
  shopCardsContainer: {
    flexDirection: "row",
  },
  verticalScroll: {
    height:height - 156
  },
  marginTop: {
    marginTop: 16,
  },
  searchIconColor: "#404040"
});
