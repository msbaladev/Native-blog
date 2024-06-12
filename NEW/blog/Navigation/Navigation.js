import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Homescreen from "../screens/Homescreen";
import Icon from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyBlogs from "../screens/MyBlogs";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MyBlogs}
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
           
          )
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={MyBlogs}
        options={{ presentation: "fullScreenModal", headerShown: false ,
        tabBarIcon: ({ color, size }) => (
          <Icon name="google" size={size} color={color} />
         
        ),}}
      />
    </Tab.Navigator>
  );i
};

export default Navigation;
