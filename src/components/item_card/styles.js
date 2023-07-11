import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    flexDirection: "row",
  },
  ItemImgContainer: {
    width: "22%",
    height:"100%"
  },
  itemImage: {
    width: "100%",
    height: 73.14,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 4,
  },
  itemName: {
    fontSize: 19.05,
    lineHeight: 25.98,
    letterSpacing: 0.4,
  },
  itemDetail: {
    fontSize: 10,
  },
  starsIcon: {
    width: 60,
    height: 10,
    marginTop: 4,
  },
  priceandCartContainer: {
    width: "20%",
  },

  priceBtn: {
    width: "100%",
    height: 74,
    backgroundColor: "#AC2727",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  priceBtnText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  cartAndMessangerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  messangerBtn: {
    width: "50%",
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  messangerIcon: {
    width: 18,
    height: 18,
  },
  cartBtn: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cartIcon: {
    width: 18,
    height: 18,
  },
});

export const noImageUri =
  "https://st4.depositphotos.com/14953852/24787/v/1600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
