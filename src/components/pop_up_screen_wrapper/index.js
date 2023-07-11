import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export default function PopUpScreenWrapper({
  children,
  extraStyles
}) {
  return (
    <View style={{ ...styles.mainContainer, ...extraStyles }}>
      <View style={styles.wrapperContainer}>{children}</View>
    </View>
  );
}
