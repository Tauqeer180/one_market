import { StyleSheet, Dimensions } from "react-native";
let height = Dimensions.get("window").height;

export const compStyles = StyleSheet.create({
  mainContainer: {
    flex:1,
    paddingBottom:370,
    minHeight: Math.round(height)
  },
  wrapperContainer: {
    width: "94%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  dpCoverMainContainer: {
    height:232,
  },
  inputContainer: {
    width: "100%",
    height: 44,
    backgroundColor: "#E5E5E5",
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.2)",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 8,
    paddingBottom: 8,
    shadowColor: "black",
    elevation: 0.4,
  },
  searchIconContainer: {},
  searchIcon: {},
  input: {
    flex: 1,
    letterSpacing: 0.6,
    paddingLeft: 10,
  },
  addProductBtnContainer: {
    width:120,
    marginTop:10,
    borderWidth: 0.4,
    borderColor: "#000000",
    paddingHorizontal: 2,
    paddingVertical:8,
    borderRadius: 2,
    shadowColor: "black",
    elevation: 1,
    alignItems:"center",
    alignSelf:"flex-end"
  },
  addProductTableContainer: {
    marginTop:10,
    borderRadius: 2,
    shadowColor: "black",
    elevation: 1.4,
    backgroundColor:"red",
  },
    ItemCardContainer: {
        // marginTop: 16,
      }
})
