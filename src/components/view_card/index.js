import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles, noImageUri } from "./styles";
import { MessengerIcon, StarsIcon, WhatsappIcon } from "../svgs/svgs";

export default function ViewCard({
  uri = noImageUri,
  price = "Not Found!",
  productName = "Not Found!",
  shopName = "Not Fonud!",
  goto,
  description
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: uri }} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTxt}>{`Rs. ${price}`}</Text>
          <TouchableOpacity style={styles.cartIconContainer} onPress={goto}>
            <WhatsappIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.shopName}>{description}</Text>
        <View style={styles.quesMainContainer}>
        </View>
      </View>
    </View>
  );
}
