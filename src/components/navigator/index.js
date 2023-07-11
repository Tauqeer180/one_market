import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PopUpScreenWrapper from "../pop_up_screen_wrapper";
import { AppIcon, CrossIcon } from "../svgs/svgs";
import { styles } from "./styles";
import {
  navigateToHome,
  navigateToMyShop,
  navigateToAllShops,
  navigateToSignIn,
  navigateToRegister,
  navigateToAdmin
} from "./services";

export default function Navigator({
  token,
  crossIconOnPress,
  setShowNavigator,
  navigation,
  number
}) {
  console.log("ssss", number.substring(0,5))
  return (
    <PopUpScreenWrapper extraStyles={styles.popUpScreenWrapper}>
      <View style={styles.mainContainer}>
        <AppIcon />
        <TouchableOpacity
          onPress={() => navigateToHome(setShowNavigator, navigation)}
        >
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        {token && number?.substring(0, 5) !== 'admin' && <TouchableOpacity
          onPress={() => navigateToMyShop(setShowNavigator, navigation)}
        >
          <Text style={styles.myShopTextColor}>My-Shop</Text>
        </TouchableOpacity>}
        {token && number?.substring(0, 5) === 'admin' && <TouchableOpacity
          onPress={() => navigateToAdmin(setShowNavigator, navigation)}
        >
          <Text style={styles.myShopTextColor}>Admin</Text>
        </TouchableOpacity>}
        <TouchableOpacity
          onPress={() => navigateToAllShops(setShowNavigator, navigation)}
        >
          <Text style={styles.text}>All shop</Text>
        </TouchableOpacity>
        {!token && <TouchableOpacity
          onPress={() => navigateToSignIn(setShowNavigator, navigation)}
        >
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>}
        {!token && <TouchableOpacity
          onPress={() => navigateToRegister(setShowNavigator, navigation)}
        >
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>}
        <TouchableOpacity
          style={styles.crossIconBtn}
          onPress={crossIconOnPress}
        >
          <CrossIcon
            width={styles.crossIcon.width}
            height={styles.crossIcon.height}
            color={styles.crossIcon.color}
          />
        </TouchableOpacity>
      </View>
    </PopUpScreenWrapper>
  );
}
