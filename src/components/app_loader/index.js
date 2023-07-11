import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./styles";

export default function Loader() {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.mainContainer]}>
      <LottieView
        source={require("../../../assets/loader/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
}
