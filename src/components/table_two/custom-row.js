import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles, iconColor } from "./styles";
import { GotoIcon, DeleteIcon } from "../svgs/svgs";

export default function RowItem({
  productName,
  productDescription,
  editIconOnPress,
  deleteIconOnPress,
  deleteBtnloader,
}) {
  return (
      <View style={{ ...styles.borderStyle, ...styles.fullWidth }}>
        <View
          style={{
            ...styles.rowContainers,
            ...styles.productNameContainerWidth,
          }}
        >
          <Text style={styles.productNameText}>{productName}</Text>
        </View>
        <View
          style={{
            ...styles.rowContainers,
            ...styles.productDescriptionContainerWidth,
          }}
        >
          <Text style={styles.productDescriptionText}>
            {productDescription}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            ...styles.rowContainers,
            ...styles.productEditContainerWidth,
          }}
          onPress={editIconOnPress}
        >
          <GotoIcon width={26} height={26} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.rowContainers,
            ...styles.productDeleteContainerWidth,
          }}
          onPress={deleteIconOnPress}
        >
          <DeleteIcon width={24} height={46} />
        </TouchableOpacity>
      </View>
  );
}
