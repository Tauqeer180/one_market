import React, { useState } from "react";
import { styles } from "./styles";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Table } from "react-native-table-component";
import RowItem from "./custom-row";
import RowHeader from "./cutom-header";
import { deleteProduct } from "./services";
import { useDispatch } from "react-redux";

const HeadTable = ["Product", "Product Name", "Update", "Delete"];

export default function TableComp({ products, setAddProduct }) {
  const [deleteBtnloader, setDeleteBtnloader] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Table style={{ height: "100%" }} borderStyle={styles.borderStyle}>
        <RowHeader/>
        <ScrollView
          style={{ ...styles.scrollViewHeight, ...styles.fullWidth }}>
          {products?.map(
            ({ _id, item_name, item_discription }) => (
              <TouchableOpacity key={_id}>
                <RowItem
                  productName={item_name?.length > 20 ? item_name.substring(0, 20)+' ...' : item_name }
                  productDescription={item_discription?.length > 20 ? item_discription.substring(0, 20)+' ...': item_discription}
                  deleteIconOnPress={() =>
                    deleteProduct(_id, setAddProduct, dispatch)
                  }
                  deleteBtnloader={deleteBtnloader}
                />
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </Table>
    </View>
  );
}
