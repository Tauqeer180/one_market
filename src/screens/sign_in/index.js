import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import {useDispatch} from 'react-redux';
import { styles } from "./styles";
import { PhoneIcon, LockIcon } from "../../components/svgs/svgs";
import { signIn } from "./services";
import Loader from "../../components/app_loader";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [loading, setLoading] = useState(false);
  const errorHandlers = {
    setEmailError,
    setPasswordError,
    setPasswordLengthError,
  };
const dispatch = useDispatch();

  useEffect(() => {
    if (email.length !== 0) {
      setEmailError(false);
    }
    if (password.length !== 0) {
      setPasswordError(false);
    }
    if (password.length >= 6) {
      setPasswordLengthError(false);
    }
  }, [email, password]);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.wrapperContainer}>
          <View style={styles.flexContainer}>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>
                Wel<Text style={styles.welcomeSpanText}>come</Text>
              </Text>
            </View>
            <ScrollView>
              <View style={styles.inputMainContainer}>
                {emailError && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>
                      Please enter your Phone Number
                    </Text>
                  </View>
                )}
                <View style={styles.inputContainer}>
                  <View style={styles.envelopeIconContainer}>
                    <PhoneIcon />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={email}
                    onChangeText={setEmail}
                  />
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
                    textContentType='password'
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <View style={styles.BtnMainContainer}>
                <View
                  style={{
                    ...styles.btnContainerCommonStyles,
                    ...styles.btnBlackVarient,
                  }}
                >
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                      signIn(email, password, errorHandlers, dispatch, navigation, setLoading)
                    }
                  >
                    <Text style={styles.loginBtnText}>Log in</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.orContainer}>
                  <Text style={styles.orText}>or</Text>
                  <Text style={styles.orText}>Don't have an account</Text>
                </View>
                <View
                  style={{
                    ...styles.btnContainerCommonStyles,
                    ...styles.btnWhiteVarient,
                  }}
                >
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate("register-user")}
                  >
                    <Text style={styles.registrationBtnText}>Registration</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {loading && <Loader />}
    </>
  );
}
