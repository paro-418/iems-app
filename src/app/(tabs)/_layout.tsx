import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          color: "#16a34a",
          fontWeight: "700",
          fontSize: 24,
          textAlign: "center",
        },
        headerRight: () => (
          <Pressable style={{ marginRight: 10 }}>
            <MaterialIcons name="menu" size={24} color="#16a34a" />
          </Pressable>
        ),
        tabBarActiveTintColor: "#16a34a",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#16a34a",
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
