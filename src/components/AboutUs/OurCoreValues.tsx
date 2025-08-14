import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from '../Heading';
import { Colors } from '../../../constants/Colors';

const OurCoreValues = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Heading heading='Our Core Values' />
      <View style={{ flexDirection: 'column', gap: 12 }}>
        <View
          style={{
            flexDirection: 'column',
            gap: 4,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Text style={{ color: Colors.bodyTextColor }}>
            Environmental stewardship
          </Text>
          <Text style={{ color: Colors.bodyTextColor }}>Safety excellence</Text>
          <Text style={{ color: Colors.bodyTextColor }}>
            Innovation and Creativity
          </Text>
          <Text style={{ color: Colors.bodyTextColor }}>
            Collaboration and teamwork
          </Text>
          <Text style={{ color: Colors.bodyTextColor }}>
            Ethics and Integrity
          </Text>
          <Text style={{ color: Colors.bodyTextColor }}>
            Respect and inclusivity
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OurCoreValues;

const styles = StyleSheet.create({});
