import axiosBase from '../../../axios';
import { getToken } from "../../../store/features/shopToken";
import { getNumber } from '../../../store/features/number';
import {Alert} from "react-native";
import { updated } from '../../../store/features/update';

export async function registerNewAccount(
  firstName,
  lastName,
  phoneNumber,
  location,
  marketType,
  password,
  errorHandlers,
  dispatch,
  navigation,
  setLoading,
) {
  setLoading(true);
  if (firstName.length === 0) {
    errorHandlers.setFirstNameError(true);
  }
  if (lastName.length === 0) {
    errorHandlers.setLastNameError(true);
  }
  if (phoneNumber.length === 0) {
    errorHandlers.setPhoneNumberError(true);
  }
  if (password.length === 0) {
    errorHandlers.setPasswordError(true);
  }
  if (password.length < 6) {
    errorHandlers.setPasswordLengthError(true);
  }
  if (
    firstName.length <= 0 ||
    lastName.length <= 0 ||
    phoneNumber.length <= 0 ||
    password.length <= 0 ||
    password.length < 6
  ) {
    setLoading(false);
    return;
  }
  const userData = {
    name: `${firstName} ${lastName}`,
    phone_number: phoneNumber,
    location: location,
    market_type: marketType,
    password: password
  }
  try {
    const response = await axiosBase.post('/register', userData);
    if(response?.data.token) {
      dispatch(getToken(response?.data.token))
      dispatch(getNumber(phoneNumber))
      dispatch(updated())
      if(phoneNumber?.substring(0, 5) !== 'admin'){
        navigation.navigate('customize-shop')
      } else {
        navigation.navigate('admin')
      }
      setLoading(false);
      console.log("user created successful!")
    } else {
      Alert.alert('Credentials error unable to create user!');
      setLoading(false)
    } 
  }
  catch (err) {
    console.error("message", err.message)
    setLoading(false)
  }
}
