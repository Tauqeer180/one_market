import { getToken } from "../../../store/features/visitshop_token";
import { getViewCardData } from "../../../store/features/view_item";

function navigateToShop(dispatch, payload, navigation) {
  dispatch(getToken(payload));
  navigation.navigate("shop");
}

function navigateToViewItem(dispatch, payload, navigation) {
  dispatch(getViewCardData(payload));
  navigation.navigate("item");
}

export { navigateToShop, navigateToViewItem };
