import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  styles,
  locationDdListsize,
  marketDdListsize,
} from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import { DownArrow } from "../svgs/svgs";

const countries = ['_', "Islamabad", "Rawalpindi"];
const market = ['_', "Decoration", "Tyre"];

export default function FindShopCard({ setLocation, setMarketType, SearchBtnOnPress }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainHeading}>FINDSHOP</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.flexContainer}>
          <View style={styles.dropDownContainer}>
            <SelectDropdown
              defaultButtonText="Location"
              buttonStyle={styles.dropDownbtn}
              dropdownStyle={{ ...styles.dropDown, ...locationDdListsize }}
              rowStyle={styles.dropDownrow}
              rowTextStyle={styles.dropDownbtnTextTransform}
              buttonTextStyle={styles.dropDownbtnText}
              sty
              data={countries}
              onSelect={(selectedItem, index) => {
                setLocation(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <View style={styles.transformIcon}>
              <DownArrow width={16} height={16} color="#000000" />
            </View>
          </View>
          <View style={styles.dropDownContainer}>
            <SelectDropdown
              defaultButtonText="Market"
              buttonStyle={styles.dropDownbtn}
              dropdownStyle={{ ...styles.dropDown, ...marketDdListsize }}
              rowStyle={styles.dropDownrow}
              rowTextStyle={styles.dropDownrowText}
              buttonTextStyle={styles.dropDownbtnText}
              sty
              data={market}
              onSelect={(selectedItem, index) => {
                setMarketType(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <View style={styles.transformIcon}>
              <DownArrow width={16} height={16} color="#000000" />
            </View>
          </View>
        </View>
        <View style={styles.registrationBtnContainer}>
          <TouchableOpacity style={styles.registrationBtn} onPress={SearchBtnOnPress}>
            <Text style={styles.registrationBtnText}>Search now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
