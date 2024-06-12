import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";

export default function SignUpScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const googleSignIn = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

 

  return (
    <SafeAreaView style={style.container}>
      <View className="flex flex-col justify-evenly items-center h-full ">
        <View>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/tourist-with-backpack-map-travel-adventure-vector-illustration_1142-112576.jpg?w=740",
              height: 300,
              width: 400,
            }}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Text onPress={googleSignIn} style={{ flexDirection: "row", alignItems: "center" }} className="bg-gray-300 p-4 rounded-full">
              <Icon name="google" size={50} color="#000" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
