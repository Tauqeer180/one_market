import axiosBase from '../../../axios'
import { Alert } from "react-native";
import { updated } from '../../../store/features/update';

export async function updateShopNameAndDesciption(
    docId,
    shopNameValue,
    shopDescriptionValue,
    setEditShopNameAndDescriptionScreen,
    setShopUpate,
    setLoading,
    dispatch
) {
    setLoading(true)
    const data = {
        docId,
        shopNameValue,
        shopDescriptionValue,
    }
    try {
        await axiosBase.post('/get-shops-details/update', data);
        setLoading(false)
        setShopUpate(prev => !prev)
        setEditShopNameAndDescriptionScreen(false);  
        dispatch(updated()) 
    } catch (e) {
        console.error("message: ", e)
        setLoading(false)
        setEditShopNameAndDescriptionScreen(false)
        Alert("Unable to update!")
    }
}