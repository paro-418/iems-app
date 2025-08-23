import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from './Heading';
import InquiryForm from './InquiryForm';
import Map from './Map';

const ReachUs = () => {
  return (
    <View
      style={{
        gap: 16,
        padding: 16,
        marginTop: 24,
      }}
    >
      <View
        style={{
          gap: 16,
          flex: 1,
        }}
      >
        <InquiryForm />
        <View
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 8,
            marginTop: 16,
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}
        >
          <Heading heading='Visit Us' />
          <Map />
        </View>
      </View>
    </View>
  );
};

export default ReachUs;

const styles = StyleSheet.create({});
