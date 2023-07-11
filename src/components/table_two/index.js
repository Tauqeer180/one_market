import React, { useState } from "react";
import { styles } from "./styles";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Table } from "react-native-table-component";
import RowItem from "./custom-row";
import RowHeader from "./cutom-header";
import { deleteProduct } from "./services";
import { navigateToShop } from "../../screens/home/services";
import { useDispatch } from "react-redux";

export default function TableComp({ shops, setAddProduct, navigation }) {
  const [deleteBtnloader, setDeleteBtnloader] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Table style={{ height: "100%" }} borderStyle={styles.borderStyle}>
        <RowHeader/>
        <ScrollView
          style={{ ...styles.scrollViewHeight, ...styles.fullWidth }}>
          {shops?.map(
            ({ _id, shop_name , shop_discription, primary_id }) => (
              <TouchableOpacity key={_id}>
                <RowItem
                  productName={shop_name}
                  productDescription={shop_discription}
                  deleteIconOnPress={() =>
                    deleteProduct(setAddProduct, primary_id, dispatch)
                  }
                  deleteBtnloader={deleteBtnloader}
                  editIconOnPress={() => navigateToShop(dispatch, primary_id, navigation)}
                />
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </Table>
    </View>
  );
}
