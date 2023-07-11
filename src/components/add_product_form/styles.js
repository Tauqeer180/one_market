import { StyleSheet, Dimensions } from "react-native";
var height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  popUpScreenWrapper: {
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.98)",
    height: height,
    paddingVertical: 36,
  },
  headingAndIconContainer: {
    flexDirection: "row",
  },
  mainHeadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeading: {
    fontSize: 18,
    color: "#000000",
    transform: [{ translateX: 12 }],
  },
  span: {
    color: "red",
  },
  crossBtn: {
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    marginTop: 50,
  },
  inputContainer: {
    height: 44,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.4,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.21)",
    borderRadius: 7,
    paddingTop: 9,
    paddingBottom: 13,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: "center",
    flexDirection: "row",
    elevation: 2,
    shadowColor: "black",
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#000000",
  },
  fromBtn: {
    marginTop: 18,
    backgroundColor: "#000000",
    width: "94%",
    alignSelf: "center",
    paddingVertical: 12,
    borderRadius: 200,
    alignItems: "center",
    shadowColor: "#000000",
    elevation: 2,
  },
  btnText: {
    color: "#D3D3D3",
    letterSpacing: 1,
  },
  scrollView: { height: "86%", paddingBottom: 30 },
  crossIcon: {
    width: 22,
    height: 22,
    color: "#000000",
  },
});
