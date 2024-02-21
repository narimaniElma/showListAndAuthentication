import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider, extendTheme } from "native-base";
import Colors from "./src/helpers/Colors";
import { SignIn, SignUp } from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  const theme = extendTheme({
    colors: Colors,
  });

  const NavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.primary[200],
    },
  };

   
  return (
    <>
      <StatusBar style="auto" />
      <NativeBaseProvider theme={theme}>
        <NavigationContainer theme={NavigationTheme}>
          <Stack.Navigator>
         {/* <Stack.Screen
              name="EarnMoneyBottomTabs"
              component={EarnMoneyBottomTabs}
              options={{ headerShown: false }}
            /> */}

            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
