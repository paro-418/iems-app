import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeroCarousal from '../../components/Home/HeroCarousal';
import Announcement from '../../components/Home/Announcement';
import AboutUsHome from '../../components/Home/AboutUsHome';

const HomeScreen = () => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <HeroCarousal />
      <Announcement />
      <AboutUsHome />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
