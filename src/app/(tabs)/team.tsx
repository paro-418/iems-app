import {
  Dimensions,
  FlatList,
  Image,
  ImageRequireSource,
  SectionList,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import React, { useRef } from 'react';
import Heading from '../../components/Heading';
import { Colors } from '../../../constants/Colors';
import Footer from '../../components/Footer';
import ReachUs from '../../components/ReachUs';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export interface TeamMembers {
  photoUrl: ImageRequireSource;
  name: string;
  position: string;
  designation: string;
}

const Leaderships: TeamMembers[] = [
  {
    name: 'Mr. Neeraj Sinha',
    position: 'Chairperson',
    photoUrl: require('../../../assets/team/leaderships/neerajksinha.webp'),
    designation: 'Chief Safety, Tata Steel',
  },
  {
    name: 'Dr. Amit Ranjan Chakraborty',
    position: 'Vice Chairperson',
    photoUrl: require('../../../assets/team/leaderships/DrAmitRanjanChakraborty.webp'),
    designation: 'Chief Environment Management, Tata Steel',
  },
  {
    name: 'Mrs. Jaya Singh Panda',
    position: 'Vice Chairperson',
    photoUrl: require('../../../assets/team/leaderships/MrsJayaSinghPanda.webp'),
    designation: 'Chief L&D & Chief Diversity Officer, Tata Steel',
  },
  {
    name: 'Mr. Pranay Sinha',
    position: 'Vice Chairperson',
    photoUrl: require('../../../assets/team/leaderships/PranaySinha.webp'),
    designation: 'Chief Corporate Services , Tata Steel',
  },
  {
    name: 'Mr. Uday S Verma',
    position: 'Director',
    photoUrl: require('../../../assets/team/leaderships/MrUdaySVerma.webp'),
    designation: 'Ex. Tata Steel',
  },
  {
    name: 'Mr. Tanmoy Banik',
    position: 'Member',
    photoUrl: require('../../../assets/team/leaderships/MrTanmoyBanik.webp'),
    designation: 'Head Corporate Safety, TSDPL',
  },
  {
    name: 'Ms. Priyanka Upadhyay',
    position: 'Member',
    photoUrl: require('../../../assets/team/leaderships/PriyankaUpadhyay.webp'),
    designation: 'Head, Environment Management, Tata Steel',
  },

  {
    name: 'Mr. S B K Sinha',
    position: 'Member',
    photoUrl: require('../../../assets/team/leaderships/sbksinha.webp'),
    designation: 'Head Procress Safety Projects',
  },
  {
    name: 'Mr. Udit Verma',
    position: 'Member',
    photoUrl: require('../../../assets/team/leaderships/uditverma.webp'),
    designation: 'Head, Safety Competency & Capability Development',
  },
  {
    name: 'Mr. Sukesh Jha',
    position: 'Member',
    photoUrl: require('../../../assets/team/leaderships/SukeshJha.webp'),
    designation: 'Sr. Manager Safety',
  },
];
const Faculties: TeamMembers[] = [
  {
    name: 'Vivekanand',
    position: 'PGDIS',
    photoUrl: require('../../../assets/team/faculties/Vivekanand.webp'),
    designation: 'Ex-Head Engineering Project, Tata Steel',
  },
  {
    name: 'Ashish Gulania',
    position: 'PGDIS',
    photoUrl: require('../../../assets/team/faculties/AshishGulania.webp'),
    designation: 'Area Manager, Tata Steel',
  },
  {
    name: 'Dharmendra Kumar',
    position: 'PGDIS',
    photoUrl: require('../../../assets/team/faculties/DharmendraKumar.webp'),
    designation: 'Sr Area Manager, Process Safety, Tata Steel',
  },
  {
    name: 'Dr K J Parekh',
    position: 'PGDIS',
    photoUrl: require('../../../assets/team/faculties/DrKJParekh.webp'),
    designation: 'Ex-Head Occupational Health Services, Tata Steel',
  },
  {
    name: 'Suman Chatterjee',
    position: 'PGDIS',
    photoUrl: require('../../../assets/team/faculties/SumanChatterjee.webp'),
    designation: ' Ex- Senior manager, Tata Steel',
  },
  {
    name: 'Srikant Singh',
    position: 'PGDIS',
    photoUrl: require('../../../assets/team/faculties/SrikantSingh.webp'),
    designation: 'DGM Safety, NVCL, Jamshedpur',
  },
  {
    name: 'Ramanuj Ojha',
    position: 'PGDEM',
    photoUrl: require('../../../assets/team/faculties/RamanujOjha.webp'),
    designation: 'Senior Manager (SHE & Sustainability), Tata Motors ltd.',
  },
  {
    name: 'Prof. Arbind Prasad Pandit',
    position: 'PGDEM',
    photoUrl: require('../../../assets/team/faculties/ProfArbindPrasadPandit.webp'),
    designation:
      'HOD CHEMISTRY Sports incharge NSS programme officer, LBSM COLLEGE Jamshedpur',
  },
  {
    name: 'Arindam Bhowmik',
    position: 'PGDEM',
    photoUrl: require('../../../assets/team/faculties/ArindamBhowmik.webp'),
    designation: 'Environment Coordinator, Tata Steel',
  },
  {
    name: 'Vivek',
    position: 'PGDEM',
    photoUrl: require('../../../assets/team/faculties/Vivek.webp'),
    designation: 'Assistant Manager, Tata Steel',
  },
  {
    name: 'Dr. Anita Kumari',
    position: 'PGDEM',
    photoUrl: require('../../../assets/team/faculties/DrAnitaKumari.webp'),
    designation: 'Assistant Professor, Co-operative College',
  },
  {
    name: 'PRADIP KUMAR PARIDA',
    position: 'PGDEM',
    photoUrl: require('../../../assets/team/faculties/PRADIPKUMARPARIDA.webp'),
    designation: 'Assistant Engineer, Engineering Services, Tata Steel',
  },
  {
    name: 'Neeraj Kumar',
    position: 'PGDEM',
    photoUrl: require('../../../assets/team/faculties/NeerajKumar.webp'),
    designation: 'Assistant Secretary, IEMS',
  },
];
const TeamScreen = () => {
  const sections = [
    { title: 'Our Leaderships', data: Leaderships },
    { title: 'Our Faculties', data: Faculties },
  ];

  const animatedSectionHeaderRef = useRef(
    sections.map(() => new Animated.Value(-SCREEN_WIDTH))
  ).current;
  const renderSectionHeader = ({
    section,
  }: {
    section: { title: string; data: TeamMembers[] };
  }) => {
    const index = sections.findIndex((s) => s.title === section.title);
    // Start animation when header comes into view
    Animated.spring(animatedSectionHeaderRef[index], {
      toValue: 0,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();

    return (
      <Animated.View
        style={[
          {
            marginTop: 20,
            marginBottom: 4,
            backgroundColor: Colors.primaryLightestColor,
            padding: 8,
            marginHorizontal: 12,
          },
          {
            transform: [{ translateX: animatedSectionHeaderRef[index] }],
          },
        ]}
      >
        <Text
          style={{
            fontWeight: '700',
            fontSize: 17,
            color: Colors.primaryColor,
          }}
        >
          {section.title}
        </Text>
      </Animated.View>
    );
  };
  return (
    <SectionList
      style={{ backgroundColor: '#fff', flex: 1 }}
      sections={sections}
      ListHeaderComponent={() => (
        <Heading
          heading='Meet Our Team'
          subHeading={`Meet the distinguished industry leaders and executives guiding IEMS's vision for environmental and safety excellence`}
          headingContainer={{ gap: 12, padding: 16 }}
          headingStyles={{ padding: 0 }}
          subHeadingStyles={{
            fontSize: 16,
            color: Colors.bodyTextColor,
            textAlign: 'center',
            lineHeight: 24,
          }}
        />
      )}
      // renderSectionHeader={({ section: { title } }) => (
      //   <View
      //     style={{
      //       marginTop: 20,
      //       marginBottom: 4,
      //       backgroundColor: Colors.primaryLightestColor,
      //       padding: 8,
      //       marginHorizontal: 12,
      //     }}
      //   >
      //     <Text
      //       style={{
      //         fontWeight: '700',
      //         fontSize: 17,
      //         color: Colors.primaryColor,
      //       }}
      //     >
      //       {title}
      //     </Text>
      //   </View>
      // )}
      renderSectionHeader={renderSectionHeader}
      renderItem={({ item, index }) => (
        <View
          style={{
            gap: 10,
            marginVertical: 10,
            borderWidth: 0.5,
            borderColor: '#aaa',
            padding: 12,
            borderRadius: 8,
            marginHorizontal: 12,
          }}
        >
          <View style={{ overflow: 'hidden', borderRadius: 8 }}>
            <Image
              source={item.photoUrl}
              style={{
                maxWidth: SCREEN_WIDTH - 12,
                height: SCREEN_WIDTH - 12,
                // aspectRatio: 1,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View>
            <Text
              style={{ fontWeight: '600', fontSize: 18, textAlign: 'center' }}
            >
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>
              {item.position}
            </Text>
            <Text style={{ color: '#666', fontSize: 16, textAlign: 'center' }}>
              {item.designation}
            </Text>
          </View>
        </View>
      )}
      ListFooterComponent={() => (
        <View>
          <ReachUs />
          <Footer />
        </View>
      )}
      windowSize={5}
      removeClippedSubviews={true}
      keyExtractor={(item, index) => item.name + index}
    />
  );
};

export default TeamScreen;

const styles = StyleSheet.create({});
