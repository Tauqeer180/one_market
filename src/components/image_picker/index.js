import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";

const DocPicker = ({
  base64, setBase64,
}) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setBase64({
        image: result,
      });
    }
  }
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Text style={styles.btnText}>Select product image</Text>
      </TouchableOpacity>
      {base64 && <Image source={{ uri: base64?.image.uri }} style={styles.image} />}
    </View>
  )
};

export default DocPicker;