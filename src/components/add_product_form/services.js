import axiosBase from "../../../axios";
import { updated } from "../../../store/features/update";

export async function addNewProduct(
  token,
  productName,
  productDescription,
  productPrice,
  base,
  setCreateProductScreen,
  setLoader,
  setAddProduct,
  dispatch,
  number
) {
  setLoader(true)
  if (base) {
    const { uri } = base?.image;
    const splitURI = base?.image.uri.split('.');
    const type = splitURI[splitURI.length - 1]
    const formData = new FormData();
    formData.append('file', {
      uri: uri,
      name: `photo_${uri}`,
      type: `image/${type}`,
    });
    await axiosBase.post(
      '/upload_image',
      formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }
    )
      .then(async function (response) {
        console.log("excuting func")
        const { url } = response?.data;
        const itemData = {
          _primary_id: token,
          item_name: productName,
          item_discription: productDescription,
          item_image: url,
          cloudinary_id: response.data['public_id'],
          item_price: productPrice,
          number: number
        }
        await axiosBase.post(`/shop/create-item`, itemData)
        setLoader(false);
        setCreateProductScreen(false);
        setAddProduct((prev) => prev + 1)
        console.log("product added!")
        dispatch(updated())
        return;
      })

  } else {
    const itemData = {
      _primary_id: token,
      item_name: productName,
      item_discription: productDescription,
      item_image: "",
      cloudinary_id: "",
      item_price: productPrice,
      number: number
    }
    await axiosBase.post(`/shop/create-item`, itemData)
    setLoader(false);
    setCreateProductScreen(false);
    setAddProduct((prev) => prev + 1)
    dispatch(updated())
  }
}