import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useDispatch } from "react-redux";
import KeyboardAvoidingViewWrapper from "../../components/keyboard_avoiding_wrappper";
import {
  ArrowIcon,
  PersonIcon,
  PhoneIcon,
  LockIcon,
  DownArrow
} from "../../components/svgs/svgs";
import SelectDropdown from "react-native-select-dropdown";
import {
  styles, iconColor, personIconHeight,
  locationDdListsize
} from "./styles";
import { registerNewAccount } from "./services";
import { heightSubtractThirty } from "./styles";
import { navigationRef as navigation } from "../../source_services/root=navigation";
import Loader from "../../components/app_loader";

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [locationSelected, setLocationSelected] = useState('');
  const [marketType, setMarketType] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [loading, setLoading] = useState(false);
  const errorHandlers = {
    setFirstNameError,
    setLastNameError,
    setPhoneNumberError,
    setPasswordError,
    setPasswordLengthError,
  };
  const dispatch = useDispatch();
  const location = ["Islamabad", "Rawalpindi"];
  const market = ["Tyre", "Decoration", "Spare Parts"]

  useEffect(() => {
    if (firstName.length !== 0) {
      setFirstNameError(false);
    }
    if (lastName.length !== 0) {
      setLastNameError(false);
    }
    if (phoneNumber.length !== 0) {
      setPhoneNumberError(false);
    }
    if (password.length !== 0) {
      setPasswordError(false);
    }
    if (password.length >= 6) {
      setPasswordLengthError(false);
    }
  }, [firstName, lastName, phoneNumber, password]);
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity
            style={styles.arrowBtn}
            onPress={() => navigation.navigate("sign-in")}
          >
            <ArrowIcon />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingViewWrapper scrollHeight={heightSubtractThirty}>
          <View style={styles.wrapperContainer}>
            <View style={styles.flexContainer}>
              <View style={styles.smPadding}>
                <Text style={styles.headingText}>
                  Profile <Text style={styles.DetailsText}>Details</Text>
                </Text>

                <View style={styles.inputMainContainer}>
                  {firstNameError && (
                    <View style={styles.errorContainer}>
                      <Text style={styles.errorText}>
                        Please enter your first name
                      </Text>
                    </View>
                  )}
                  <View style={styles.inputContainer}>
                    <View style={styles.personIconContainer}>
                      <PersonIcon height={personIconHeight} color={iconColor} />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="First Name"
                      value={firstName}
                      onChangeText={setFirstName}
                    />
                  </View>
                  {lastNameError && (
                    <View style={styles.errorContainer}>
                      <Text style={styles.errorText}>
                        Please enter your last name
                      </Text>
                    </View>
                  )}
                  <View style={styles.inputContainer}>
                    <View style={styles.personIconContainer}>
                      <PersonIcon height={personIconHeight} color={iconColor} />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Last Name"
                      value={lastName}
                      onChangeText={setLastName}
                    />
                  </View>
                </View>
                <View style={styles.lgPadding}>
                  <Text style={styles.headingText}>
                    Account <Text style={styles.DetailsText}>Details</Text>
                  </Text>
                  <View style={styles.inputMainContainer}>
                    {phoneNumberError && (
                      <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>
                          Please enter your phone number
                        </Text>
                      </View>
                    )}
                    <View style={styles.inputContainer}>
                      <View style={styles.personIconContainer}>
                        <PhoneIcon />
                      </View>
                      <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                      />
                    </View>
                    <View style={styles.dropDownContainer}>
                      <SelectDropdown
                        defaultButtonText="Location"
                        buttonStyle={{ ...styles.dropDownbtn }}
                        dropdownStyle={{ ...styles.dropDown, ...locationDdListsize }}
                        rowStyle={styles.dropDownrow}
                        rowTextStyle={styles.dropDownbtnTextTransform}
                        buttonTextStyle={styles.dropDownbtnText}
                        data={location}
                        onSelect={(selectedItem, index) => {
                          console.log(selectedItem, index);
                          setLocationSelected(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                      />
                      <View style={styles.transformIcon}>
                        <DownArrow width={16} height={16} color="#000000" />
                      </View>
                    </View>
                    <View style={styles.dropDownContainer}>
                      <SelectDropdown
                        defaultButtonText="Market"
                        buttonStyle={{ ...styles.dropDownbtn }}
                        dropdownStyle={{ ...styles.dropDown, ...locationDdListsize }}
                        rowStyle={styles.dropDownrow}
                        rowTextStyle={styles.dropDownbtnTextTransform}
                        buttonTextStyle={styles.dropDownbtnText}
                        sty
                        data={market}
                        onSelect={(selectedItem, index) => {
                          console.log(selectedItem, index);
                          setMarketType(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                          return item;
                        }}
                      />
                      <View style={styles.transformIcon}>
                        <DownArrow width={16} height={16} color="#000000" />
                      </View>
                    </View>
                    {passwordError && (
                      <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>
                          Please enter your password
                        </Text>
                      </View>
                    )}
                    {passwordLengthError && !passwordError ? (
                      <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>
                          Minimum 6 letters or digits require
                        </Text>
                      </View>
                    ) : (
                      ""
                    )}
                    <View style={styles.inputContainer}>
                      <View style={styles.lockIconContainer}>
                        <LockIcon />
                      </View>
                      <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                      />
                    </View>
                    <View style={styles.registrationBtnContainer}>
                      <TouchableOpacity
                        style={styles.registrationBtn}
                        onPress={() =>
                          registerNewAccount(
                            firstName,
                            lastName,
                            phoneNumber,
                            locationSelected,
                            marketType,
                            password,
                            errorHandlers,
                            dispatch,
                            navigation,
                            setLoading,
                          )
                        }
                      >
                        <View style={styles.registrationBtn}>
                          <Text style={styles.registrationBtnText}>Register</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingViewWrapper>
      </View>
      {loading && <Loader />}
    </>
  )
}
