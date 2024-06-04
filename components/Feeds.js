import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Feeds = ({i}) => {
  return (
    <View>
      <View className="flex flex-row p-2 mt-2">
        <View>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/picture-amanita-muscaria-mushrooms-neon-style_1268-28579.jpg?t=st=1713353346~exp=1713356946~hmac=45febdc8903c711dbee15e7b718a41f5781ed505243e57017fc85de50eadce30&w=900",
            }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        </View>
        <View className="flex flex-col justify-evenly p-2">
          <Text>{i}</Text>
          <Text>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been .
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Feeds;
