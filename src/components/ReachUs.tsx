import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from './Heading';
import InquiryForm from './InquiryForm';

const ReachUs = () => {
  return (
    <View style={{ gap: 16, paddingVertical: 12, paddingHorizontal: 16 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Heading heading='Get in touch' />
      </View>
      <View>
        <InquiryForm />
        <View>
          <Text>google map</Text>
        </View>
      </View>
    </View>
  );
};

export default ReachUs;

const styles = StyleSheet.create({});
