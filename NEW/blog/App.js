import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import SignUpScreen from "./screens/SignUpScreen";
import Navigation from "./Navigation/Navigation";
import Homescreen from "./screens/Homescreen";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_YmVsb3ZlZC1yYXR0bGVyLTg1LmNsZXJrLmFjY291bnRzLmRldiQ"
      }
    >
      <SignedIn>
        <NavigationContainer>
          {/* <Navigation /> */}

          <Homescreen />
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <NavigationContainer>
          <SignUpScreen />
        </NavigationContainer>
      </SignedOut>
    </ClerkProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
