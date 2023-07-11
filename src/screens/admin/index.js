import React, {useEffect, useState} from "react";
import { View } from 'react-native';
import TableComp from "../../components/table_two";
import { getShopsDetails } from "../customize_shop/services";
import { useDispatch, useSelector } from "react-redux";



export default function Admin({navigation}) {
    const [shopInfo, setShopInfo] = useState([]);
    const update = useSelector((state) => state.update.data)
    const dispatch = useDispatch();

    useEffect(() => {
        getShopsDetails(setShopInfo, dispatch)
      }, [update])
    return (
        <View>
            <TableComp shops={shopInfo} navigation={navigation}/>
        </View>
    )
}