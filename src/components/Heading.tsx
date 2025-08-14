import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

interface IHeading {
  heading: string;
  subHeading?: string;
  headingStyles?: {
    [key: string]: [value: string];
  };
  subHeadingStyles?: {
    [key: string]: [value: string];
  };
}
const Heading = ({
  heading,
  headingStyles,
  subHeading,
  subHeadingStyles,
}: IHeading) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={[styles.heading, headingStyles]}>{heading}</Text>
      <Text style={[styles.subHeading, subHeadingStyles]}>{subHeading}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    flexDirection: 'column',
    gap: 2,
  },
  heading: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    color: Colors.primaryColor,
    fontSize: 24,
    fontWeight: '800',
  },
  subHeading: {
    color: '#333',
    fontSize: 20,
  },
});
