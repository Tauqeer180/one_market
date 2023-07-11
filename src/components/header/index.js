import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { HamburgerIcon, AppIcon, PersonIcon } from "../svgs/svgs";
import Navigator from "../navigator";
import * as RootNavigator from "../../source_services/root=navigation";

export default function Header({ logOut, token, number }) {
  const [showNavigator, setShowNavigator] = useState(false);
  return (
    <View style={styles.headerMainContainer}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowNavigator(true)}
        >
          <HamburgerIcon />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.appIconContainer }}>
        <View style={styles.button}>
          <AppIcon />
          <Text style={styles.heading}>
            ONE<Text style={styles.span}>MARKET</Text>
          </Text>
        </View>
      </View>
      {!token ? (
        <View style={styles.iconsBtnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => RootNavigator.navigate("sign-in")}
          >
            <PersonIcon
              height={styles.personIcon.height}
              color={styles.personIcon.color}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.logoutButton} onPress={logOut}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      )}
      {showNavigator && (
        <Navigator
          token={token}
          number={number}
          crossIconOnPress={() => setShowNavigator(false)}
          setShowNavigator={setShowNavigator}
          navigation={RootNavigator}
        />
      )}
    </View>
  );
}
