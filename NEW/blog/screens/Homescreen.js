import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";
import { FlashList } from "@shopify/flash-list";
import Feeds from "../components/Feeds";
import axios from "axios";

const Homescreen = () => {
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
      url: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HYX7CS4ZBVEPDL3JRQIQK5Y6RU.jpg&w=1440",
    },

    {
      id: 3,
      data: "hello",
      url: "https://img.freepik.com/free-photo/picture-amanita-muscaria-mushrooms-neon-style_1268-28579.jpg?t=st=1713353346~exp=1713356946~hmac=45febdc8903c711dbee15e7b718a41f5781ed505243e57017fc85de50eadce30&w=900",
    },
  ];

  const [news, setnews] = useState([]);

  const fetchNews = async () => {
    try {
      const resposnse = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=1d3aaf89c9964e34a70399937d5fac64"
      );
      //  console.log(resposnse.data.articles)
      setnews(resposnse.data.articles);
    } catch (error) {
      console.log(error,"api error");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);


  // console.log(news);

  const feeddata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const renderItem = ({ item }) => {
    return (
      <View className="rounded-lg">
        <Image
          source={{ uri: item.urlToImage }}
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
          data={news}
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
          data={news}
          renderItem={({item}) => {
       
            return (
              <View>
                <Feeds i={item.title} img={item.urlToImage} />
              </View>
            );
          }}
          estimatedItemSize={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
  },
});
