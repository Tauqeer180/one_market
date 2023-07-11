import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  popUpScreenWrapperPadding: {
    paddingVertical: 10,
    width:"100%",
    backgroundColor:"rgba(0,0,0,0.88)",
  },
  headingAndIconContainer: {
    flexDirection: "row",
  },
  mainHeadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    transform:[{translateX: 6}]
  },
  mainHeading: {
    fontSize: 14,
    color: "#F1F1F1",
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
    marginTop: 10,
  },
  inputContainer: {
    height: 36,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.4,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.21)",
    borderRadius: 7,
    // paddingTop: 9,
    // paddingBottom: 13,
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
    marginTop: 10,
    backgroundColor: "#E5E5E5",
    width: "94%",
    alignSelf: "center",
    paddingVertical: 8,
    borderRadius: 200,
    alignItems: "center",
    shadowColor: "#000000",
    elevation: 2,
  },
  btnText: {
    color: "#000000",
    letterSpacing: 1,
  },
});
