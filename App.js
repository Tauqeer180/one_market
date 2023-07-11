import React, { useState } from "react";
import Home from "./src/screens/home";
import SignIn from "./src/screens/sign_in";
import SignUp from "./src/screens/sign_up";
import CustomizeShop from "./src/screens/customize_shop";
import AllShops from "./src/screens/all_shops";
import Shop from "./src/screens/shop";
import Item from "./src/screens/view_item";
import Admin from "./src/screens/admin";
import { styles } from "./global-styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store/configure-store";
import Header from "./src/components/header";
import { navigationRef } from "./src/source_services/root=navigation";
import { signOutUser } from "./src/screens/customize_shop/services";
import { useSelector, useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();

function App() {
  const [signOutLoading, setSignOutLoading] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.data);
  const number = useSelector((state) => state.number.data);
  console.log("number: ", number)

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: () => (
            <Header
              icons={true}
              token={token}
              number={number}
              logOut={() =>
                signOutUser(
                  navigationRef,
                  setSignOutLoading,
                  dispatch
                )
              }
            />
          ),
          headerShadowVisible: false,
          headerStyle: { ...styles.header },
        }}
      />
       <Stack.Screen
        name="shop"
        component={Shop}
        options={{
          headerTitle: () => (
            <Header
              icons={true}
              token={token}
              number={number}
              logOut={() =>
                signOutUser(
                  navigationRef,
                  setSignOutLoading,
                  dispatch
                )
              }
            />
          ),
          headerLeft: () => null,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerStyle: { ...styles.header },
        }}
      />
           <Stack.Screen
        name="admin"
        component={Admin}
        options={{
          headerTitle: () => (
            <Header
              icons={true}
              token={token}
              number={number}
              logOut={() =>
                signOutUser(
                  navigationRef,
                  setSignOutLoading,
                  dispatch
                )
              }
            />
          ),
          headerLeft: () => null,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: { ...styles.header },
        }}
      />
      <Stack.Screen
        name="sign-in"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register-user"
        children={() => <SignUp/>}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="all-shops"
        component={AllShops}
        options={{
          headerTitle: () => (
            <Header
              icons={false}
              token={token}
              number={number}
              logOut={() =>
                signOutUser(
                  navigationRef,
                  setSignOutLoading,
                  dispatch
                )
              }
            />
          ),
          headerLeft: () => null,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerStyle: { ...styles.header },
        }}
      />
      <Stack.Screen
        name="item"
        component={Item}
        options={{
          headerTitle: () => (
            <Header
              icons={true}
              token={token}
              number={number}
              logOut={() =>
                signOutUser(
                  navigationRef,
                  setSignOutLoading,
                  dispatch
                )
              }
            />
          ),
          headerLeft: () => null,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerStyle: { ...styles.header },
        }}
      />
      <Stack.Screen
        name="customize-shop"
        children={() => (
          <CustomizeShop
            signOutLoading={signOutLoading}
            currentUserToken={token}
          />
        )}
        options={{
          headerTitle: () => (
            <Header
              token={token}
              number={number}
              logOut={() =>
                signOutUser(
                  navigationRef,
                  setSignOutLoading,
                  dispatch
                )
              }
            />
          ),
          headerLeft: () => null,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerStyle: { ...styles.header },
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <App />
      </Provider>
    </NavigationContainer>
  );
};
