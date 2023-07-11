
import axiosBase from "../../../axios";
import { updated } from '../../../store/features/update';

async function deleteProduct(setAddProduct, primary_id, dispatch) {
  console.log('id::::', primary_id)
  try{
    await axiosBase.post(`/delete-shop`, {id: primary_id});
    console.log("deleted!")
    dispatch(updated())
  }  catch(e){
    console.error("error: ", e)
  }
}


export {  deleteProduct };





// setDeleteBtnloader(true);
// const docReference = doc(db, "shops", token, "shop-items", docId);
// const itemssDocReference = doc(db, "items", docId);
// try {
//   await deleteDoc(itemssDocReference);
//   await deleteDoc(docReference);
//   deleteDataFromStorage(token, docId)
//   setDeleteBtnloader(false);
// } catch (e) {
//   console.log("can not delete product!");
// }?