import axiosBase from "../../../axios";
import { getAllShops } from "../../../store/features/all_shops_slice";
import { getAllItems } from "../../../store/features/get_all_items";
import { getToken } from "../../../store/features/shopToken";

export async function getShopsDetails(setShops, dispatch) {
  try {
    const request = await axiosBase.get('/get-shops-details');
    const data = await request.data['shops_details'];
    if (data) {
      setShops(data);
      dispatch(getAllShops(data));
    }
  } catch (err) {
    console.error({ message: err.message });
  }
}

export async function getShopItems(setProducts, dispatch) {
  try {
    const request = await axiosBase.get('/shop/get-items');
    const data = await request.data.response;
    if (data) {
      setProducts(data);
      dispatch(getAllItems(data));
    }
  } catch (err) {
    console.error({ message: err.message });
  }
}



export function signOutUser(navigationRef, setSignOutLoading, dispatch) {
         setSignOutLoading(true);
         navigationRef.navigate("home")
         dispatch(getToken(""))
         setSignOutLoading(false)
     
}