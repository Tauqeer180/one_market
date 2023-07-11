import * as ImagePicker from "expo-image-picker";
import axiosBase from "../../../axios";
import { Alert } from "react-native";
import { updated } from "../../../store/features/update";

const pickImage = async (
  docId,
  upload,
  setShopUpate,
  setLoader,
  dispatch
) => {
     setLoader(true)
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
        await upload(result, docId, setLoader, setShopUpate, dispatch)  
    } else {
      setLoader(false)
    }
};

async function uploadDp(result, docId, setLoader, setShopUpate, dispatch) {
  const { uri } = result;
  const splitURI = uri.split('.');
  const type = splitURI[splitURI.length - 1]
  const formData = new FormData();
  formData.append('file', {
    uri: uri,
    name: `photo_${uri}`,
    type: `image/${type}`,
  });
  axiosBase.post(
    '/upload_image',
    formData, {
    headers: { "Content-Type": "multipart/form-data" }
  }
  )
    .then(async function (response) {
      const { url , } = response.data;
      const itemData = {
        docId,
        url
    }
    try{
      await axiosBase.post('/get-shops-details/update_dp', itemData)
      console.log("update!")     
      setLoader(false)
      setShopUpate(prev => prev + 1)
    } catch(e){
      console.error({message: "connot update dp!"})
      setLoader(false)
    } 
    dispatch(updated())
    })
    .catch(function (response) {
      Alert("cannot create product!")
      setLoader(false)
    });
}



async function uploadCover(result, docId, setLoader, setShopUpate, dispatch) {
  const { uri } = result;
  const splitURI = uri.split('.');
  const type = splitURI[splitURI.length - 1]
  const formData = new FormData();
  formData.append('file', {
    uri: uri,
    name: `photo_${uri}`,
    type: `image/${type}`,
  });
  axiosBase.post(
    '/upload_image',
    formData, {
    headers: { "Content-Type": "multipart/form-data" }
  }
  )
    .then(async function (response) {
      const { url } = response.data;
      const itemData = {
        docId,
        url
    }
    try{
      await axiosBase.post('/get-shops-details/update_cover', itemData)
      console.log("update!") 
      setLoader(false)
      setShopUpate(prev => prev - 1)
    } catch(e) {
      console.error({message: "cannor update cover!"});
      setLoader(false)
    }   
    dispatch(updated())   
    })
    .catch(function (response) {
      Alert("cannot create product!")
      setLoader(false)
    });
}


export {
  pickImage,
  uploadDp,
  uploadCover
}
