import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";


export default function ShopCard({itemKey, uri, shopName, extraStyles }) {
  return (
    <View key={itemKey} style={{ ...styles.mainContainer, ...extraStyles }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: uri}} alt="shop_img" style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{shopName}</Text>
      </View>
    </View>
  );
}
