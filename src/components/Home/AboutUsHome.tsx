import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/Colors';
import { router } from 'expo-router';
import Heading from '../Heading';

const AboutUsHome = () => {
  return (
    <ImageBackground
      style={{
        width: '100%',
        flex: 1,
      }}
      source={require('../../../assets/convocation/DSC_4312.webp')}
    >
      <View style={styles.overlay}>
        <View
          style={{
            paddingVertical: 16,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingTop: 24,
          }}
        >
          <Heading heading='About Us' />
        </View>

        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 22,
            paddingHorizontal: 12,
          }}
        >
          Institute of Environmental Management & Studies (IEMS)
        </Text>
        <Text
          style={{
            color: '#fff',
            fontWeight: '400',
            fontSize: 16,
            paddingHorizontal: 12,
          }}
        >
          The Institute of Environmental Management and Studies (IEMS) is the
          only institute of its kind in the industrial city of Jamshedpur. It
          came into existence in 1991 as a result of environmental awakening
          that created a demand for trained environmental personnel capable of
          addressing issues related to Environmental Management and compliance
          with environmental laws and statutes. It was formed by
          environmentalists of Jamshedpur and promoted by TATA STEEL, with
          active support from Tata Motors and other industries in and around
          Jamshedpur.
        </Text>
        <Text
          style={{
            color: '#fff',
            fontWeight: '400',
            fontSize: 16,
            paddingHorizontal: 12,
          }}
        >
          IEMS is a non-profit making Autonomous Non-Governmental Organization
          devoted to the development of skill and expertise of the persons
          engaged in the Environmental Management area. It conducts one and half
          years Educational Programme leading to “Post Graduate Diploma in
          Environmental Management”. In addition, it also organizes short
          courses. We are presently running 3 months short course for Tata
          Motors, Contract employees and this is our 9th batch. It enjoys
          patronage of local industries and is functioning from a building
          provided by TATA STEEL at 26 J Road, Bistupur, Jamshedpur.
        </Text>
        <Pressable
          style={{
            borderWidth: 2,
            borderColor: Colors.primaryLightColor,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingVertical: 12,
          }}
          onPress={() => router.push('aboutus')}
        >
          <Text style={{ color: '#fff', fontWeight: '500' }}>
            {' '}
            More about us
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default AboutUsHome;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7 )',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    paddingBottom: 20,
  },
});
