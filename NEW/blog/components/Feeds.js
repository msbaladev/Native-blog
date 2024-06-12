import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Feeds = ({i,img}) => {

  return (
    <View>
      <View className="flex flex-row p-2 mt-2">
        <View>
          <Image
            source={{
              uri: img,
            }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        </View>
        <View className="flex flex-col justify-evenly p-2">
          <Text>{i}</Text>
        
         
        </View>
      </View>
    </View>
  );
};

export default Feeds;
