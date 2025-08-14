import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Colors } from '../../../constants/Colors';
import { router } from 'expo-router';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const HeroCarousal = () => {
  const shakeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 8,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -8,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.delay(700),
      ])
    ).start();
  }, [shakeAnim]);

  return (
    <View
      style={{
        height: screenHeight * 0.6,
      }}
    >
      <ImageBackground
        style={{
          width: '100%',
          flex: 1,
        }}
        source={require('../../../assets/convocation/DSC_4057.webp')}
      >
        <View style={styles.overlay}>
          <View>
            <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>
              Empowering Environmental and Safety Professionals since 1991
            </Text>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: '300' }}>
              Join us to build a sustainable and safer future
            </Text>
          </View>
          <View style={{ gap: 12 }}>
            <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
              <Pressable
                style={[styles.button, { backgroundColor: '#fff' }]}
                onPress={() => router.push('courses')}
              >
                <Text
                  style={[styles.buttonText, { color: Colors.primaryColor }]}
                >
                  Explore our Courses
                </Text>
              </Pressable>
            </Animated.View>
            <Pressable
              style={[styles.button, { backgroundColor: Colors.primaryColor }]}
            >
              <Text style={[styles.buttonText, { color: '#fff' }]}>
                View Admission Form
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeroCarousal;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6 )',
    paddingHorizontal: 36,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: screenWidth * 0.7,
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
});
