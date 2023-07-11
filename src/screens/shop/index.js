import { useState } from "react";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { compStyles } from "./styles";
import DpCover from "../../components/dp_cover";
import { SearchIcon } from "../../components/svgs/svgs";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../components/item_card";
import { navigateToViewItem } from "../home/services";

export default function Shop({ navigation }) {
  const [inputVal, setInputVal] = useState('')
  const token = useSelector((state) => state.visitShopToken.data);
  const shopInfo = useSelector((state) => state.shops.data).filter(
    (item) => item['primary_id'] === token
  );
  const shopItems = useSelector((state) => state.allItems.data)?.filter((i) => i['primary_id'] === token);
  const dispatch = useDispatch();
  const searchFilter = shopItems?.length > 0 && shopItems?.filter((i) => {
    if(inputVal.length > 0){
      return i['item_name'].toLocaleLowerCase().includes(inputVal.toLocaleLowerCase())
    }
  });

  return (
    <>
      <View style={compStyles.mainContainer}>
        <View style={compStyles.wrapperContainer}>
            <View style={compStyles.dpCoverMainContainer}>
              <DpCover
                shopInfo={shopInfo}
                selectCoverBtn={false}
                addBtn={false}
                editBtn={false}
              />
            </View>
            <View style={compStyles.inputContainer}>
              <View style={compStyles.searchIconContainer}>
                <SearchIcon color={"#404040"} />
              </View>
              <TextInput
                style={compStyles.input}
                placeholder="Name of shop(Optional)"
                value={inputVal}
                onChangeText={setInputVal}
              />
            </View>
          <ScrollView style={{height:"100%", marginTop: 10}}>
            <View style={compStyles.ItemCardContainer}>
              {searchFilter?.length > 0 ?
               searchFilter?.map((i) => (
                <TouchableOpacity key={i['_id']}
                  onPress={() => navigateToViewItem(dispatch, i, navigation)}
                >
                  <ItemCard
                    uri={i['item_image']}
                    producName={i['item_name']}
                    productDescription={i['item_discription']}
                    productPrice={i['item_price']}
                  />
                </TouchableOpacity>
              )) :
              shopItems?.map((i) => (
                <TouchableOpacity key={i['_id']}
                  onPress={() => navigateToViewItem(dispatch, i, navigation)}
                >
                  <ItemCard
                    uri={i['item_image']}
                    producName={i['item_name']}
                    productDescription={i['item_discription']}
                    productPrice={i['item_price']}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
