import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    shadowColor:"black",
    elevation:2
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  wrapper: {
    width: "90%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 42,
    shadowColor: "black",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainHeading: {
    color: "#E5E5E5",
    letterSpacing: 0.9,
    fontSize: 16,
    lineHeight: 17,
  },
  dropDownContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
    borderRadius: 1.5,
    paddingRight: 0,
    paddingRight:4,
    position:"relative",
    width:140,
    height:30
  },
  dropDownContainerNoMargin: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
    borderRadius: 1.5,
    paddingRight: 0,
    paddingRight:4,
    position:"relative",
    width:140,
    height:30
  },
  dropDownbtn: {
    height: 30,
    borderRadius: 6,
    paddingTop: 2,
    paddingBottom: 2,
    zIndex: 999,
    borderRadius: 1.5,
    position:"absolute",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width:140
  },
  dropDownbtnText: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 14,
  },
 
  dropDownrow: {
    backgroundColor: "#FFFFFF",
    },
  dropDownrowText: {
    marginTop: 6,
    marginBottom: 6,
    fontSize: 15,
  },
  dropDown: { marginTop: 2 },
  transformIcon:{
    position:"absolute",
    right:6

  },
  inputContainer: {
    marginTop: 8,
    width: "100%",
    height: 40,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.2)",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 8,
    paddingBottom: 8,
    shadowColor:"black",
    elevation:1.4
  },
  input: {
    flex: 1,
    letterSpacing: 0.6,
    paddingLeft: 10,
  },
  searchIconContainer: {},
  searchIcon: {},
  registrationBtnContainer: {
    height: 34,
    marginTop: 14,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  registrationBtn: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DF0404",
    letterSpacing: 0.7,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    
  },
  registrationBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
});

export const locationDdsize = {
};

export const marketDdsize = {
};

export const categoryDdsize = {
};

export const locationDdListsize = {
  transform:[{translateY: -22}]
};

export const marketDdListsize = {
  transform:[{translateY: -22}]
};

export const categoryDdListsize = {
  transform:[{translateY: -22}]

};
