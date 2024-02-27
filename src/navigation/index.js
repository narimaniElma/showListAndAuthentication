import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "native-base";

import Colors from "../helpers/Colors";
import {
  SignInScreen,
  SignUpScreen,
  ConfirmEmailScreen,
  ForgotPasswordScreen,
  NewPasswordScreen,
  HomeScreen,
} from "../screens";
import { useAuth } from "../contexts/AuthContext";

const Stack = createStackNavigator();

const Navigation = ({ navigation }) => {
  const { authState, logout } = useAuth();

  const NavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.white,
    },
  };

  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authState?.authenticated ? (
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerRight: () => <Button onPress={logout} >Sign Out</Button>,
        }}/>
      ) : (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      )}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
