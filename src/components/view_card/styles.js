import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    height: 300,
    backgroundColor: "#FFFFFF",
    marginTop:10,
    shadowColor:"#000000",
    elevation: 4,
    paddingBottom: 10
  },
  imgContainer: {
    height: "60%",
    backgroundColor: "#E1E1E1",
  },
  image: {
    height:"100%"
  },

  detailContainer: {
    paddingHorizontal: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceTxt: {
    color: "#FC0F0F",
    marginTop: 10,
    fontSize: 20,
  },
  cartIconContainer: {
    paddingTop: 14,
  },
  productName: {
    fontSize: 36,
    lineHeight: 44,
  },
  shopName: {
    letterSpacing: 0.8,
    lineHeight: 18,
  },
  quesMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quesContainer: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
  },
  questionTxt: {
    fontSize: 10,
    letterSpacing: 0.4,
    lineHeight: 18,
  },
});

export const noImageUri = "https://www.cricketerlife.com/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg";