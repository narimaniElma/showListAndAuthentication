import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, extendTheme } from "native-base";

import Colors from "./src/helpers/Colors";
import Navigation from "./src/navigation";

export default function App() {
  const theme = extendTheme({
    colors: Colors,
  });

  return (
    <>
      <NativeBaseProvider theme={theme}>
        <StatusBar style="auto" />
          <Navigation />
      </NativeBaseProvider>
    </>
  );
}
