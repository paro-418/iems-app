import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const AppLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="team" />
      <Tabs.Screen name="aboutus" />
      <Tabs.Screen name="courses" />
    </Tabs>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
