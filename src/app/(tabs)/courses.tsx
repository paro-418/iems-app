import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Heading from '../../components/Heading';
import { Colors } from '../../../constants/Colors';
import { interestedCoursesNameTypes } from '../../lib/interfaces/PotentialStudents.interface';
import DownloadAdmissionForm from '../../components/DownloadAdmissionForm';
import Footer from '../../components/Footer';
import ReachUs from '../../components/ReachUs';

const { height: screenHeight, width: SCREEN_WIDTH } = Dimensions.get('window');

const CoursesScreen = () => {
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
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, gap: 12, backgroundColor: '#fff' }}
      >
        <Heading
          headingContainer={{ gap: 12, padding: 16 }}
          heading='Courses we offer'
          headingStyles={{ padding: 0 }}
          subHeading='IEMS offers industry-relevant programs designed to equip students with the knowledge and skills needed to address environmental and safety challenges. Our courses combine theoretical knowledge with practical applications, ensuring our graduates are ready to make an impact in their fields'
          subHeadingStyles={{ fontSize: 16, color: Colors.bodyTextColor }}
        />

        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#aaa',
            borderRadius: 4,
            marginTop: 20,
            padding: 12,
            gap: 12,
            marginHorizontal: 16,
          }}
        >
          <View>
            <Text
              style={{
                color: Colors.primaryColor,
                fontWeight: '700',
                fontSize: 18,
              }}
            >
              Course 1:
            </Text>
            <Text
              style={{
                // color: Colors.bodyTextColor,
                fontWeight: '600',
                fontSize: 18,
              }}
            >
              Post Graduate Diploma in Environmental Management (PGDEM)
            </Text>
          </View>
          <View style={{ gap: 4 }}>
            <Text
              style={{
                color: Colors.primaryColor,
                fontWeight: '700',
                fontSize: 18,
              }}
            >
              Overview:
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
              <Text style={{ fontWeight: '700', fontSize: 16 }}>Duration:</Text>
              <Text style={{ fontSize: 16 }}>1.5 years (3 semesters)</Text>
            </View>
            <View style={{ gap: 2 }}>
              <Text style={{ fontWeight: '700', fontSize: 16 }}>
                Eligibility:
              </Text>
              <View style={{ flexDirection: 'column', gap: 2 }}>
                <Text style={{ fontSize: 16 }}>
                  1). Bachelor's degree in Science/Engineering or equivalent.
                </Text>
                <Text style={{ fontSize: 16 }}>
                  2). Diploma holders in Engineering.
                </Text>
                <Text style={{ fontSize: 16 }}>
                  3.) Arts/Commerce graduates with a science background
                  (Physics, Chemistry, Math at Intermediate level).
                </Text>
              </View>
            </View>
          </View>

          <View style={{ gap: 12 }}>
            <Text
              style={{
                color: Colors.primaryColor,
                fontWeight: '700',
                fontSize: 18,
              }}
            >
              Course Structure:
            </Text>
            <View style={{ gap: 4 }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  color: Colors.primaryColor,
                }}
              >
                Semester 1:
              </Text>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper I:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Introduction of Ecology and control technologies
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper II:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Environmental Legislation & Environmental Management System,
                  Environmental Impact Assessment
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper III:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Water and Water Pollution and Control Technologies
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper IV:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Air and Air Pollution and Control Technologies
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper V:
                </Text>
                <Text style={{ fontSize: 16 }}>Environmental Chemistry</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper VI:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Pollution Abatement Technologies (Noise, Odour, Ventilation,
                  Incineration, Biomedical Wastes)
                </Text>
              </View>
            </View>
            <View style={{ gap: 4 }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  color: Colors.primaryColor,
                }}
              >
                Semester 2:
              </Text>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper VII:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Environmental Safety and Occupational Health
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper VIII:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Environmental Aspects of Metallurgical and Chemical Industries
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper IX:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Waste & Hazardous Waste Management
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper X:
                </Text>
                <Text style={{ fontSize: 16 }}>Disaster Management</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper XI:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Soil Resource Management, Microbiology, and Environmental
                  Biotechnology
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper XII:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Energy System & Environment
                </Text>
              </View>
            </View>
          </View>

          <Pressable
            style={[styles.button, { backgroundColor: Colors.primaryColor }]}
            onPress={() => handleDownloadClick('PGDEM')}
          >
            <Text style={[styles.buttonText, { color: '#fff' }]}>
              View Admission Form
            </Text>
          </Pressable>
          <View>
            <Text
              style={{
                color: Colors.primaryColor,
                fontSize: 16,
                borderWidth: 1,
                borderColor: Colors.primaryColor,
                padding: 8,
                borderRadius: 4,
              }}
            >
              Note: For original admission form please visit our office at 26, J
              Road, Bistupur, Jamshedpur, Jharkhand - 831001
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#aaa',
            borderRadius: 4,
            marginTop: 20,
            padding: 12,
            gap: 12,
            marginHorizontal: 16,
          }}
        >
          <View>
            <Text
              style={{
                color: Colors.primaryColor,
                fontWeight: '700',
                fontSize: 18,
              }}
            >
              Course 2:
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
              }}
            >
              Post Graduate Diploma in Industrial Safety (PGDIS)
            </Text>
          </View>
          <View style={{ gap: 4 }}>
            <Text
              style={{
                color: Colors.primaryColor,
                fontWeight: '700',
                fontSize: 18,
              }}
            >
              Overview:
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
              <Text style={{ fontWeight: '700', fontSize: 16 }}>Duration:</Text>
              <Text style={{ fontSize: 16 }}>1.5 years (3 semesters)</Text>
            </View>
            <View style={{ gap: 2 }}>
              <Text style={{ fontWeight: '700', fontSize: 16 }}>
                Eligibility:
              </Text>
              <View style={{ flexDirection: 'column', gap: 2 }}>
                <Text style={{ fontSize: 16 }}>
                  1). Bachelor's degree in Science (Physics, Chemistry, Math)
                  with 6 years of industrial exposure.
                </Text>
                <Text style={{ fontSize: 16 }}>
                  2). Diploma in Engineering with 4 years of industrial
                  exposure.
                </Text>
                <Text style={{ fontSize: 16 }}>
                  3.) B.Tech/M.Tech with 2 years of industrial experience.
                </Text>
              </View>
            </View>
          </View>

          <View style={{ gap: 12 }}>
            <Text
              style={{
                color: Colors.primaryColor,
                fontWeight: '700',
                fontSize: 18,
              }}
            >
              Course Structure:
            </Text>
            <View style={{ gap: 4 }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  color: Colors.primaryColor,
                }}
              >
                Semester 1:
              </Text>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper I:
                </Text>
                <Text style={{ fontSize: 16 }}>Safety Philosophy </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper II:
                </Text>
                <Text style={{ fontSize: 16 }}>Safety Engineering-I</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper III:
                </Text>
                <Text style={{ fontSize: 16 }}>Safety Engineering-II</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper IV:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Appraisal, Analysis, Inspection, and Control Procedures
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper V:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Safety in Construction Industry
                </Text>
              </View>
            </View>
            <View style={{ gap: 4 }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  color: Colors.primaryColor,
                }}
              >
                Semester 2:
              </Text>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper VI:
                </Text>
                <Text style={{ fontSize: 16 }}>Safety and the Law</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper VII:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Industrial Hygiene and Occupational Health
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper VIII:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Safety in Chemical Industries
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper IX:
                </Text>
                <Text style={{ fontSize: 16 }}>Protection of Environment</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  Paper X:
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Behavioural & Process Safety
                </Text>
              </View>
            </View>
            <View style={{ gap: 4 }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  color: Colors.primaryColor,
                }}
              >
                Semester 3:
              </Text>

              <Text style={{ fontSize: 16 }}>Project Works</Text>
            </View>
          </View>

          <Pressable
            style={[styles.button, { backgroundColor: Colors.primaryColor }]}
            onPress={() => handleDownloadClick('PGDIS')}
          >
            <Text style={[styles.buttonText, { color: '#fff' }]}>
              View Admission Form
            </Text>
          </Pressable>
          <View>
            <Text
              style={{
                color: Colors.primaryColor,
                fontSize: 16,
                borderWidth: 1,
                borderColor: Colors.primaryColor,
                padding: 8,
                borderRadius: 4,
              }}
            >
              Note: For original admission form please visit our office at 26, J
              Road, Bistupur, Jamshedpur, Jharkhand - 831001
            </Text>
          </View>
        </View>
        <View style={{ padding: 16, gap: 6 }}>
          <Text
            style={{
              color: Colors.primaryColor,
              fontWeight: '700',
              fontSize: 18,
            }}
          >
            General instructions:
          </Text>
          <Text style={{ fontSize: 16, color: Colors.bodyTextColor }}>
            Classes are held from Monday to Friday, start 6:15 PM and end at
            9:00 PM with 15 minutes tea break.
          </Text>
          <Text style={{ fontSize: 16, color: Colors.bodyTextColor }}>
            Students must require 75% attendance in all the subjects to appear
            in the end semester examination. Students having attendance less
            than 75% will be debarred from examination.
          </Text>
        </View>
        <ReachUs />
        <Footer />
      </ScrollView>
      <DownloadAdmissionForm
        courseType={selectedCourse}
        visible={dialogOpen}
        handelModalVisibility={handelModalVisibility}
      />
    </>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: SCREEN_WIDTH * 0.7,
    marginHorizontal: 'auto',
    marginVertical: 12,
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
});
