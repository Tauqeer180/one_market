import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 105,
    paddingTop: 6,
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: "center",
    borderRadius: 4,
    shadowColor:"black",
    elevation:2,
    marginRight:4
  },
  imageContainer: {
    width: "100%",
    height: 95,
    backgroundColor:"red",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
    borderColor:"#DF0404"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  textContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
  },
  text: {
    color: "white",
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 0.9,
    minHeight: 10,
  },
});
