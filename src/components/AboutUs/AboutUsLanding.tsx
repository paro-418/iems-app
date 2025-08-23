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

const AboutUsLanding = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
        source={require('../../../assets/convocation/DSC_4312.webp')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.overlay}>
          <View style={{ gap: 16, paddingHorizontal: 8, paddingVertical: 16 }}>
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
                fontWeight: '600',
                fontSize: 20,
                paddingHorizontal: 12,
              }}
            >
              26, J Road, Bistupur, Jamshedpur, Jharkhand - 831001
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                paddingHorizontal: 12,
              }}
            >
              The Institute of Environmental Management & Studies (IEMS) is the
              only institute of its kind in the industrial city of Jamshedpur.
              It came into existence in 1991 as a result of environmental
              awakening that created a demand for trained environmental
              personnel capable of addressing issues related to Environmental
              Management and compliance with environmental laws and statutes. It
              was formed by environmentalists of Jamshedpur and promoted by TATA
              STEEL, with active support from Tata Motors and other industries
              in and around Jamshedpur.
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                paddingHorizontal: 12,
              }}
            >
              IEMS is a non-profit making Autonomous Non-Governmental
              Organization devoted to the development of skill and expertise of
              the persons engaged in the Environmental Management area. It
              conducts one and half years Educational Programme leading to “Post
              Graduate Diploma in Environmental Management”. In addition, it
              also organizes short courses. We are presently running 3 months
              short course for Tata Motors, Contract employees and this is our
              9th batch. It enjoys patronage of local industries and is
              functioning from a building provided by TATA STEEL at 26 J Road,
              Bistupur, Jamshedpur.
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                paddingHorizontal: 12,
              }}
            >
              In addition, a three semester ‘Post Graduate Industrial Safety
              Programme” course has been launched from January, 2009, approved
              by Ministry of Labour, Employment and Training, Govt. of
              Jharkhand. The Institute also enjoys appropriate support from
              major industry houses of Tata Steel Ltd., Tata Motors Ltd and
              other industries for transfer of knowledge in Safety and
              Environmental Engineering.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AboutUsLanding;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    paddingBottom: 20,
  },
});
