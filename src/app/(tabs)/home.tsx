import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeroCarousal from '../../components/Home/HeroCarousal';
import Announcement from '../../components/Home/Announcement';
import AboutUsHome from '../../components/Home/AboutUsHome';
import VisionAndMissions from '../../components/AboutUs/VisionAndMissions';
import CoursesHome from '../../components/Home/CoursesHome';
import GalleryHome from '../../components/GalleryHome';
import ReachUs from '../../components/ReachUs';
import Accordion from '../../components/Accordion';
import Footer from '../../components/Footer';

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
      <VisionAndMissions />
      <CoursesHome />
      <GalleryHome />
      <ReachUs />
      <Accordion />
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
