import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from '../Heading';
import OurCoreValues from './OurCoreValues';
import { Colors } from '../../../constants/Colors';

const VisionAndMissions = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 16,
        paddingHorizontal: 10,
        paddingVertical: 40,
        backgroundColor: '#fff',
      }}
    >
      <View>
        <Heading heading='Our Vision & Mission' />
        <View style={{ flexDirection: 'column', gap: 12 }}>
          <Text style={{ textAlign: 'center', color: Colors.bodyTextColor }}>
            A world where environmental sustainability and safety excellence
            coexist, ensuring a healthy and thriving planet for future
            generations.
          </Text>
          <Text style={{ textAlign: 'center', color: Colors.bodyTextColor }}>
            Our mission is to achieve this vision by advancing knowledge,
            developing innovative solutions, and educating professionals in
            environmental sustainability and safety excellence.
          </Text>
        </View>
      </View>
      <OurCoreValues />
    </View>
  );
};

export default VisionAndMissions;

const styles = StyleSheet.create({});
