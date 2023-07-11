import { StyleSheet, Dimensions } from "react-native";
let height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
    mainContainer: {
        width: "94%",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
    },
    cardMainContainer: {
        height:300,
        backgroundColor:"#FFFFFF",
    },
    imgContainer: {
        height:"60%",
        backgroundColor:"#E1E1E1",
    },
    infoContainer: {
        paddingHorizontal: 10
    },
    priceContainer: {
        flexDirection:"row"
    },
    priceTxt : {
        color: "#FC0F0F",
        marginTop: 10,
        fontSize: 20,
    },
    productName: {
        fontSize: 36,
        lineHeight: 44,
    },
    shopName: {
        letterSpacing: 0.8,
        lineHeight:18

    },
    quesMainContainer: {
        flexDirection:"row",
        justifyContent:"space-between"
    },
    quesContainer: {
        width:"40%",
      flexDirection:"row",
      alignItems:"center",
    },
    questionTxt: {
        fontSize: 10,
        letterSpacing: 0.4,
        lineHeight:18
    }
})