import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";

export default function KeyboardAvoidingViewWrapper({ children }) {
  return (
    <KeyboardAvoidingView style={styles.flex}>
      <ScrollView style={styles.flex}>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
