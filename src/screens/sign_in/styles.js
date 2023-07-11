import { StyleSheet, Dimensions } from "react-native";
var height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  mainContainer: {
    width:"100%",
    height: height,
  },
  wrapperContainer: {
    width: "90%",
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  flexContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  welcomeTextContainer: {
    justifyContent:"center",
    flexDirection:"row",
    textAlign: "center",
    paddingTop: 90,
  },
  welcomeText: {
    fontSize: 26,
    lineHeight: 33,
    fontWeight: "600",
    color: "#000000",
  },
  welcomeSpanText: {
    color: "#FC0F0F",
  },
  inputMainContainer: {
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  inputContainer: {
    height: 44,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.4,
    borderStyle:"solid",
    borderColor: "rgba(0, 0, 0, 0.21)",
    borderRadius: 7,
    paddingTop: 9,
    paddingBottom: 13,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: "center",
    flexDirection: "row",
    elevation:2,
    shadowColor:"black"
  },
  envelopeIconContainer: {
  },
  envelopeIcon: {
    width: 25,
    height: 23,
  },
  lockIconContainer: {
    width: 25,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft:4,
  },
  lockIcon: {
    width: 19,
    height: 24,
    color: "#C3C3C3",
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#000000",
  },
  forgetPassBtnContainer: {
    alignSelf: "flex-end",
    paddingRight: 16
  },
  forgetPassBtn: {
    marginRight: 16,
  },
  forgetPassBtnText: {
    fontSize: 12,
    lineHeight: 16.37,
    letterSpacing:0.8,
    fontWeight: "400",
    color: "rgba(86, 54, 176, 0.8)",
  },
  BtnMainContainer: {
    marginTop:30,
    paddingBottom: 10,
  },
  btnContainerCommonStyles : {
    width: "94%",
    height: 44,
    borderRadius: 200,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    elevation:4,
    shadowColor:"rgba(0,0,0,0.4)",
    borderWidth: 1,
    borderStyle:"solid",
    borderColor:"#000000",

  },
  btnBlackVarient: {
    backgroundColor: "#000000",
    marginTop: 20,
  },
  btnWhiteVarient: {
    backgroundColor: "#ffffff",
    marginTop: 40,
  },
  btn: {
    flex: 1,
    height: "100%",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  loginBtnText: {
    color: "#FC0F0F",
    fontSize: 14,
    fontWeight: "600",
  },
  orContainer: {
    width: "94%",
    marginTop: 40,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    justifyContent:"center",
    alignItems:"center"
  },
  orText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000000",
  },
  registrationBtnText: {
    color: "#FC0F0F",
    fontSize: 14,
    fontWeight: "600",
  },
  errorContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 14,
    paddingRight: 8, 
  },
  errorText: {
    color: "red",
  },
});


export const placeholderColor = "rgba(0, 0, 0, 0.47)";
