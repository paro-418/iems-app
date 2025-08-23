import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

const Footer = () => {
  return (
    <View
      style={{
        padding: 20,
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
      }}
    >
      <View style={{ alignItems: 'center', marginTop: 12 }}>
        <Image
          source={require('../../assets/iems.png')}
          style={styles.image}
          resizeMode='contain'
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          Institute of Environmental Management & Studies
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
});
