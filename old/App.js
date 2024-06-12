import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation/Navigation";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignUpScreen from "./screens/SignUpScreen";

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

          <Text>hellooo</Text>
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
      <NavigationContainer>
      <Text>hellooo</Text>
        </NavigationContainer>
      </SignedOut>
    </ClerkProvider>
  );
}

// const style = StyleSheet.create({
//   container: {
//     backgroundColor: "red",
//     flex: 1,
//   },
// });
