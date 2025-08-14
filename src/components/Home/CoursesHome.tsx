import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../constants/Colors';
import { interestedCoursesNameTypes } from '../../lib/interfaces/PotentialStudents.interface';
import Heading from '../Heading';
import { router } from 'expo-router';
import DownloadAdmissionForm from '../DownloadAdmissionForm';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const CoursesHome = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [selectedCourse, setSelectedCourse] =
    useState<interestedCoursesNameTypes>('PGDIS');

  const handleDownloadClick = (courseType: interestedCoursesNameTypes) => {
    setSelectedCourse(courseType);
    handelModalVisibility(true);
  };

  const handelModalVisibility = (modalState: boolean) => {
    setDialogOpen(modalState);
  };

  return (
    <>
      <View
        id='home-courses'
        style={{
          flexDirection: 'column',
          paddingVertical: 28,
          backgroundColor: Colors.primaryLightestColor,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Heading heading='Courses we Offer' />
        </View>
        <View
          style={{
            flexDirection: 'column',
            gap: 16,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: 8,
              gap: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              1. Post Graduate Diploma in Industrial Safety (PGDIS)
            </Text>
            <Pressable
              onPress={() => handleDownloadClick('PGDIS')}
              style={{
                borderWidth: 1,
                borderColor: Colors.primaryLightColor,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                backgroundColor: '#fff',
              }}
            >
              <Text>View Admission Form</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'column',
              gap: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 'auto',
              padding: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              2. Post Graduate Diploma in Environmental Management (PGDEM)
            </Text>
            <Pressable
              onPress={() => handleDownloadClick('PGDEM')}
              style={{
                borderWidth: 1,
                borderColor: Colors.primaryLightColor,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                backgroundColor: '#fff',
              }}
            >
              <Text>View Admission Form</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'column', marginVertical: 24, gap: 16 }}>
          <Pressable
            style={{
              marginHorizontal: 'auto',
              backgroundColor: Colors.primaryColor,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 4,
              width: screenWidth * 0.7,
            }}
            onPress={() => router.push('courses')}
          >
            <Text
              style={{
                fontWeight: '600',
                textAlign: 'center',
                fontSize: 16,
                color: '#fff',
              }}
            >
              See courses details
            </Text>
          </Pressable>
          <Text
            style={{
              fontStyle: 'italic',
              color: Colors.primaryColor,
              borderWidth: 1,
              borderColor: Colors.primaryLightColor,
              padding: 10,
              fontSize: 16,
              width: 'auto',
              marginHorizontal: 'auto',
              backgroundColor: '#fff',
              borderRadius: 4,
            }}
          >
            Note: For original admission form please visit our office at 26, J
            Road, Bistupur, Jamshedpur, Jharkhand - 831001
          </Text>
        </View>
      </View>
      <DownloadAdmissionForm
        courseType={selectedCourse}
        visible={dialogOpen}
        handelModalVisibility={handelModalVisibility}
      />
    </>
  );
};

export default CoursesHome;

const styles = StyleSheet.create({});
