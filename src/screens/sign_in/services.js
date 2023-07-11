import axiosBase from '../../../axios';
import { getToken } from '../../../store/features/shopToken';
import { getNumber } from '../../../store/features/number';
import { Alert } from "react-native";

export async function signIn(
  number,
  password,
  { setEmailError, setPasswordError, setPasswordLengthError },
  dispatch,
  navigation,
  setLoading
) {
  setLoading(true);
  if (number.length === 0) {
    setEmailError(true);
  }
  if (password.length === 0) {
    setPasswordError(true);
  }
  if (password.length < 6) {
    setPasswordLengthError(true);
  }
  if (number.length <= 0 || password.length <= 0 || password.length < 6) {
    setLoading(false);
    return;

  }  
  const data = {
    phone_number: number,
    password
  };
  try {
    const response = await axiosBase.post('/sign-in', data);
    if (response.data) {
      dispatch(getToken(response.data.token))
      dispatch(getNumber(number))
      if(number?.substring(0, 5) !== 'admin'){
        navigation.navigate('customize-shop')
      } else {
        navigation.navigate('admin')
      }
      console.log('Log_in successful!');
    } else {
      console.error('data not found!')
    }
    setLoading(false);
  } catch (e) {
    Alert.alert("Wrong credentials user not found!");
    setLoading(false)
  }
}