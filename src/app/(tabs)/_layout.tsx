import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../../../constants/Colors";

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          color: Colors.primaryColor,
          fontWeight: "700",
          fontSize: 24,
          textAlign: "center",
        },
        headerRight: () => (
          <Pressable style={{ marginRight: 10 }}>
            <MaterialIcons name="menu" size={24} color={Colors.primaryColor} />
          </Pressable>
        ),
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
          height: 60,
        },
        tabBarActiveBackgroundColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: "Courses",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="book" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aboutus"
        options={{
          title: "About Us",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: "Team",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="group" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
