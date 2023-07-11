import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import PopUpScreenWrapper from "../pop_up_screen_wrapper";
import { styles } from "./styles";
import { CrossIcon } from "../svgs/svgs";
import { updateShopNameAndDesciption } from "./services";
import Loader from "../app_loader";
import { useDispatch } from "react-redux";

export default function EditShopNameAndDescripton({
  setEditShopNameAndDescriptionScreen,
  docId,
  setShopUpate
}) {
  const [shopNameValue, setShopNameValue] = useState("");
  const [shopDescriptionValue, setShopDescriptionValue] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <PopUpScreenWrapper extraStyles={styles.popUpScreenWrapperPadding}>
      <View>
        <View style={styles.headingAndIconContainer}>
          <View style={styles.mainHeadingContainer}>
            <Text style={styles.mainHeading}>
              Edit <Text style={styles.span}> shop name</Text> <Text> and</Text>{" "}
              <Text style={styles.span}> description</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.crossBtn}
            onPress={() => setEditShopNameAndDescriptionScreen(false)}
          >
            <CrossIcon width={18} height={18} color={"#F1F1F1"} />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Shop name"
              value={shopNameValue}
              onChangeText={setShopNameValue}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Shop description"
              value={shopDescriptionValue}
              onChangeText={setShopDescriptionValue}
            />
          </View>
          <TouchableOpacity
            style={styles.fromBtn}
            onPress={async () =>
              await updateShopNameAndDesciption(
                docId,
                shopNameValue,
                shopDescriptionValue,
                setEditShopNameAndDescriptionScreen,
                setShopUpate,
                setLoading,
                dispatch
              )
            }
          >
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <Loader />}
    </PopUpScreenWrapper>
  );
};
