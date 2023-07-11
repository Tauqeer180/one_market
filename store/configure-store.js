import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userDataReducer from "./features/current_user_info";
import getAllShopsReducer from "./features/all_shops_slice";
import getTokenReducer from "./features/shopToken";
import getAllItemsReducer from "./features/get_all_items";
import getViewCardReducer from "./features/view_item";
import getVisitShopToken from './features/visitshop_token';
import updateReducer from "./features/update";
import numberReducer from './features/number';

const rootReducer = combineReducers({
  userData: userDataReducer,
  shops: getAllShopsReducer,
  token: getTokenReducer,
  allItems: getAllItemsReducer,
  viewCardData: getViewCardReducer,
  visitShopToken: getVisitShopToken,
  update: updateReducer,
  number: numberReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
