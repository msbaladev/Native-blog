import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";
import Feeds from "../components/Feeds";
import { FlashList } from "@shopify/flash-list";

export default function Homescreen() {
  const screen_height = Dimensions.get("screen").height;
  const data = [
    {
      id: 1,
      data: "hello",
      url: "https://img.freepik.com/free-photo/picture-amanita-muscaria-mushrooms-neon-style_1268-28579.jpg?t=st=1713353346~exp=1713356946~hmac=45febdc8903c711dbee15e7b718a41f5781ed505243e57017fc85de50eadce30&w=900",
    },
    {
      id: 2,
      data: "hello",
      url: "https://img.freepik.com/free-photo/picture-amanita-muscaria-mushrooms-neon-style_1268-28579.jpg?t=st=1713353346~exp=1713356946~hmac=45febdc8903c711dbee15e7b718a41f5781ed505243e57017fc85de50eadce30&w=900",
    },
    {
      id: 3,
      data: "hello",
      url: "https://img.freepik.com/free-photo/picture-amanita-muscaria-mushrooms-neon-style_1268-28579.jpg?t=st=1713353346~exp=1713356946~hmac=45febdc8903c711dbee15e7b718a41f5781ed505243e57017fc85de50eadce30&w=900",
    },
  ];

  const feeddata = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];

  const renderItem = ({ item }) => {
    return (
      <View className="rounded-lg">
        <Image
          source={{ uri: item.url }}
          style={{ width: 300, height: 200, borderRadius: 10 }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View>
        <View className="flex flex-row justify-between ">
          <TouchableOpacity className="bg-gray-200 p-2 rounded-full">
            <Text>
              <Icon name="menu" size={30} />
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row space-x-3">
            <TouchableOpacity className="bg-gray-200 p-2 rounded-full">
              <Text>
                <Icon name="search" size={30} />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 p-2 rounded-full">
              <Text>
                <Icon name="notifications-outline" size={30} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="mt-2">
        <Carousel
          loop
          data={data}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={300}
        />
      </View>



      <View
        className=""
        style={{ height: screen_height, width: Dimensions.get("screen").width }}
      >
        <FlashList
          data={feeddata}
          renderItem={({ item }) => {
            return (
              <View>
                <Feeds i={item}/>
              </View>
            );
          }}
          estimatedItemSize={data.length}
        />
      </View>



    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
  },
});
