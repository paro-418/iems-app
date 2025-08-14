import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Heading from './Heading';
import { Colors } from '../../constants/Colors';
import { router } from 'expo-router';
import { Shadow } from 'react-native-shadow-2';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const photos = [
  {
    src: require('../../assets/convocation/2R9A7408.webp'),
    alt: 'Convocation 1',
  },
  {
    src: require('../../assets/convocation/2R9A7455.webp'),
    alt: 'Convocation 2',
  },
];

const GalleryHome = () => {
  return (
    <View style={styles.container}>
      <Heading heading='Gallery' />

      {/* Grid Container */}
      <View style={styles.gridContainer}>
        {photos?.map((photo, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={photo.src} style={styles.image} resizeMode='cover' />
          </View>
        ))}
      </View>

      {/* See More Button */}
      <Shadow distance={4} startColor='rgba(0,0,0,0.1)'>
        <Pressable
          style={styles.seeMoreButton}
          onPress={() => router.push('aboutus')}
        >
          <Text style={styles.seeMoreText}>See More</Text>
        </Pressable>
      </Shadow>
    </View>
  );
};

export default GalleryHome;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  gridContainer: {
    paddingVertical: 4,
    width: '100%',
    gap: 4,
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  seeMoreButton: {
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: screenWidth * 0.7,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
  },
  seeMoreText: {
    color: Colors.primaryColor,
    fontWeight: '600',
    textAlign: 'center',
  },
});
