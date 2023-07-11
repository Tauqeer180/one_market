import { StyleSheet, Dimensions } from "react-native";
var height = Dimensions.get("window").height;
export var heightSubtractThirty = height;

export const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom:20,
    marginTop:20,
    height: height
  },
  arrowBtn: {
     paddingTop: 20, 
  }, 
  arrowContainer: {
    width: "92%",
    marginTop: 16,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 10,
    paddingBottom: 10,
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  
  wrapperContainer: {
    width:"90%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  flexContainer: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 18,
    lineHeight: 24.51,
    fontWeight: "500",
    color: "#000000",
    marginTop: 10,
    marginBottom: 10,
  },
  DetailsText: {
    fontSize: 18,
    lineHeight: 24.51,
    fontWeight: "500",
    color: "#FC0F0F",
  },
  errorContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 14,
    paddingRight: 8, 
  },
  errorText: {
    color: "red"
  },
  inputMainContainer: {

  },
  inputContainer: {
    flex: 1,
    height: 44,
    margin: 10,
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(0, 0, 0, 0.21)",
    borderRadius: 7,
    paddingTop: 11,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: "center",
    flexDirection: "row",
    shadowColor:"black",
    elevation:2,
  },
  personIconContainer: {
  },
  personIcon: {
    border: "none",
    width: 25,
    height: 19,
    color: "#C3C3C3",
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24.51,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 20,
    // color: "rgba(0, 0, 0, 0.47)",
  },
  lockIconContainer: {
    width: 23,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft:5
  },
  lockIcon: {
    width: 19,
    height: 24,
    color: "#C3C3C3",
  },
  registrationBtnContainer: {
    width: "94%",
    height: 46,
    marginTop: 20,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  
  },
  registrationBtn: {
    borderRadius: 200,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth:1,
    borderColor:"#000000",
    backgroundColor: "#000000",
    letterSpacing: 0.7,
    shadowColor:"#000000",
    elevation:2
  },
  registrationBtnText: {
    color: "#FC0F0F",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19.1,
  },
  smPadding: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  lgPadding: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    height: height,
    backgroundColor: "rgba(0, 0, 0, 0.81)",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    color:"white",
    fontSize: 22
  },
  dropDownContainer: {
    width:"94%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
    borderRadius: 7,
    paddingRight: 0,
    paddingRight:4,
    position:"relative",
    height: 44,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor:"#000000",
    elevation:2
  },
  dropDownContainerNoMargin: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 1.5,
    paddingRight:4,
    width:320,
  
  },
  dropDownbtn: {
    height: 30,
    borderRadius: 6,
    paddingTop: 2,
    paddingBottom: 2,
    zIndex: 999,
    borderRadius: 1.5,
    position:"absolute",
    backgroundColor: "rgba(255,255,255,0.5)",
    width:"100%",
  },
  dropDownbtnText: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 14,
  },
 
  dropDownrow: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5
    },
  dropDownrowText: {
    marginTop: 6,
    marginBottom: 6,
    fontSize: 15,
  },
  dropDown: { marginTop: 2 },
  transformIcon:{
    width: 22,
    position:"absolute",
    right:6,
  },
});

export const marketDdsize = {
};

export const categoryDdsize = {
};

export const locationDdListsize = {
  transform:[{translateY: -42}],
};

export const marketDdListsize = {
  transform:[{translateY: -22}]
};

export const categoryDdListsize = {
  transform:[{translateY: -22}]

};


export const iconColor = "#C3C3C3";
export const personIconHeight = 18;