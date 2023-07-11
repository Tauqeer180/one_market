import React from "react";
import { View, ScrollView, TouchableOpacity, Linking } from "react-native";
import { styles } from "./styles";
import ViewCard from "../../components/view_card";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../components/item_card";
import { navigateToViewItem } from "../home/services";

export default function Item({ navigation }) {
  const cardData = useSelector((state) => state.viewCardData.data);
  const allItemsdata = useSelector((state) => state.allItems.data);
  const dispatch = useDispatch();
  console.log('numberrrrr:', cardData?.number?.substring(1))


  let url = `https://wa.me/92${cardData?.number?.substring(1)}`;
  function openInWhatsapp() {
    Linking.openURL(url).then((data) => {
      console.log('WhatsApp Opened');
    }).catch((err) => {
      console.log(err);
      alert('Make sure Whatsapp installed on your device');
    });

  }
  

  return (
    <View style={styles.mainContainer}>
      <View>
        <ViewCard uri={cardData['item_image']} price={cardData['item_price']} productName={cardData['item_name']} description={cardData['item_discription']} goto={openInWhatsapp}/>
        <ScrollView style={{ height: 320, marginTop: 10 }}>
          <View>
            {allItemsdata?.map((i) => (
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
  );
}