import React, { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { SearchIcon } from "../../components/svgs/svgs";
import FindShopCard from "../../components/find_shop_card";
import ShopCard from "../../components/shop_card";
import ItemCard from "../../components/item_card";
import {
  navigateToShop,
  navigateToViewItem,
} from "./services";
import { getShopItems, getShopsDetails } from "../customize_shop/services";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/app_loader";


export default function Home({ navigation }) {
  const [inputValue, setInputValue] = useState('');
  const [shops, setShops] = useState([]);
  const [shopsItems, setShopsItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [marketType, setMarketType] = useState('');
  const [filterData, setFilterData] = useState([])
  const dispatch = useDispatch();
  const searchFilter = shopsItems?.length > 0 && shopsItems?.filter((i) => {
    if (inputValue.length > 0) {
      return i['item_name'].toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    }
  });
  const update = useSelector((state) => state.update.data)

  function filterShops() {
    const data = shops?.length > 0 && shops?.filter((i) => {
      if (location === i.location || marketType === i.shop_type) {
         return i
      }
    });
    setFilterData(data)
  }
  useEffect(() => {
    setLoading(true);
    getShopsDetails(setShops, dispatch);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [update]);

  useEffect(() => {
    getShopItems(setShopsItems, dispatch);
  }, [update]);
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.wrapperContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search any part here..."
              value={inputValue}
              onChangeText={setInputValue}
            />
              <SearchIcon color={styles.searchIconColor} />
          </View>
          <ScrollView style={styles.verticalScroll}>
            {searchFilter?.length > 0 ?
              searchFilter?.map((i) => (
                <TouchableOpacity
                  key={i['_id']}
                  onPress={() => navigateToViewItem(dispatch, i, navigation)}
                >
                  <ItemCard
                    uri={i?.item_image}
                    producName={i?.item_name}
                    productDescription={i?.item_discription}
                    productPrice={i?.item_price}
                  />
                </TouchableOpacity>
              ))
              :
              (<View><View style={styles.FindShopCardPB}>
                <FindShopCard SearchBtnOnPress={filterShops} setLocation={setLocation} setMarketType={setMarketType} />
              </View>
              {filterData?.length > 0 ? <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>{filterData?.map((data) => (
                      <TouchableOpacity
                        key={data['primary_id']}
                        onPress={() =>
                          navigateToShop(dispatch, data['primary_id'], navigation)
                        }
                      >
                        <ShopCard
                          uri={
                            data?.shop_cover_photo !== ""
                              ? data?.shop_cover_photo
                              : 'https://st4.depositphotos.com/14953852/24787/v/1600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                          }
                          shopName={data?.shop_name}
                          extraStyles={styles.marginTop}
                        />
                      </TouchableOpacity>
                    ))}</View> : 
                    <View>
                <View style={styles.shopCardsContainer}>
                  <ScrollView horizontal={true}>
                    {shops?.map((data) => (
                      <TouchableOpacity
                        key={data['primary_id']}
                        onPress={() =>
                          navigateToShop(dispatch, data['primary_id'], navigation)
                        }
                      >
                        <ShopCard
                          uri={
                            data?.shop_cover_photo !== ""
                              ? data?.shop_cover_photo
                              : 'https://st4.depositphotos.com/14953852/24787/v/1600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                          }
                          shopName={data?.shop_name}
                          extraStyles={styles.marginTop}
                        />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
                <View style={styles.ItemCardContainer}>
                  {shopsItems?.map((i) => (
                    <TouchableOpacity
                      key={i['_id']}
                      onPress={() => navigateToViewItem(dispatch, i, navigation)}
                    >
                      <ItemCard
                        uri={i?.item_image}
                        producName={i?.item_name}
                        productDescription={i?.item_discription}
                        productPrice={i?.item_price}
                      />
                    </TouchableOpacity>
                  ))}
                </View></View>}
                </View>)}
          </ScrollView>
        </View>
      </View>
      {loading && <Loader />}
    </>
  );
}

