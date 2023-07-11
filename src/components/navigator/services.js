export function navigateToHome(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("home");

}

export function navigateToMyShop(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("customize-shop");
}

export function navigateToAllShops(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("all-shops");
}


export function navigateToSignIn(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("sign-in");
}

export function navigateToRegister(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("register-user");
}

export function navigateToAdmin(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("admin");
}
