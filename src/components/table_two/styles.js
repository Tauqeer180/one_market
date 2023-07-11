import { StyleSheet, Dimensions } from "react-native";
let height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: height - 75,
    marginTop:10,
    borderRadius: 2,
    shadowColor: "black",
  },
  itemsHeadingRowText: {
    color: "#000",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  HeadStyle: {
    height: 50,
    backgroundColor: "rgba( 0, 0, 0, 0.05)",
  },
  itemsRowText: {},
  rows: {
    width: "100%",
    flexDirection: "row",
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.8)",
    flexDirection: "row",
  },
  fullWidth: {
    width: "99.79%",
  },
  scrollViewHeight: {
    height:"82%"
    
  },
  rowContainers: {
    width: 117.4,
    borderRightWidth: 1,
    borderRightColor: "rgba(185, 185, 185, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4
  },
  productNameContainerWidth: {
    height:54,
    width: "36%",
  },
  productNameText: {
    alignSelf: "center",
    marginHorizontal: 5,
  },
  productDescriptionContainerWidth: {
    width: "32%",
  },
  productDescriptionText: {
    alignSelf: "center",
  },
  productEditContainerWidth: {
    width: '16%',
  },
  productDeleteContainerWidth: {
    width: '18%',
  },
});

export const iconColor = "#000000";
export const rowCellSizes = [118, 111, 60, 58.2]
