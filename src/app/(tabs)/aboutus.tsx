import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AboutUsLanding from '../../components/AboutUs/AboutUsLanding';
import VisionAndMissions from '../../components/AboutUs/VisionAndMissions';
import MessageFromLeaderships from '../../components/AboutUs/MessageFromLeaderships';
import Gallery from '../../components/AboutUs/Gallery';

const AboutUsScreen = () => {
  const sections = [
    { key: 'landing', component: <AboutUsLanding /> },
    { key: 'vision', component: <VisionAndMissions /> },
    { key: 'messages', component: <MessageFromLeaderships /> },
    { key: 'gallery', component: <Gallery /> },
  ];

  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => item.component}
      keyExtractor={(item) => item.key}
    />
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({});
