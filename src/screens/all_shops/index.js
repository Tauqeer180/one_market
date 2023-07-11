import React, {useState} from "react";
import { View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import ShopCard from "../../components/shop_card";
import { styles } from "./styles";
import { SearchIcon } from "../../components/svgs/svgs";
import { useDispatch, useSelector } from "react-redux";
import { navigateToShop } from "../home/services";

export default function AllShops({ navigation }) {
  const shopsData = useSelector((state) => state.shops.data);
  const [inputValue, setInputValue] = useState("")
  const searchFilter = shopsData?.length > 0 && shopsData?.filter((i) => {
    if(inputValue.length > 0){
      return i['shop_name'].toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    }
  });
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.wrapperContainer}>
        <View style={styles.inputMainContainer}>
          <View style={styles.inputContainer}>
            <TextInput
            value={inputValue}
            onChangeText={setInputValue}
              style={styles.input}
              placeholder="Search any part here..."
            />
            <TouchableOpacity style={styles.searchIconContainer}>
              <SearchIcon color={styles.searchIconColor} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollHeight}>
          <View style={styles.scrollMainContainer}>
            {searchFilter.length <= 0 ? shopsData?.map((data) => (
              <TouchableOpacity
                key={data['primary_id']}
                onPress={() =>
                  navigateToShop(dispatch, data['primary_id'], navigation)
                }
              >
                <ShopCard
                  extraStyles={styles.marginTop}
                  uri={data?.shop_cover_photo !== ""
                    ? data?.shop_cover_photo
                    : "https://st4.depositphotos.com/14953852/24787/v/1600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
                  shopName={data['shop_name']}
                />
              </TouchableOpacity>
            ))
            :
            searchFilter?.map((data) => (
              <TouchableOpacity
                key={data['primary_id']}
                onPress={() =>
                  navigateToShop(dispatch, data['primary_id'], navigation)
                }
              >
                <ShopCard
                  extraStyles={styles.marginTop}
                  uri={data?.shop_cover_photo !== ""
                    ? data?.shop_cover_photo
                    : 'https://st4.depositphotos.com/14953852/24787/v/1600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'}
                  shopName={data['shop_name']}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
