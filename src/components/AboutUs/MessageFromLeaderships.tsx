import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { Colors } from '../../../constants/Colors';
import Heading from '../Heading';
import { Shadow } from 'react-native-shadow-2';
import { router } from 'expo-router';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const messages: {
  message: string;
  name: string;
  designation: string;
  image: ImageSourcePropType;
}[] = [
  {
    message: `Welcome to the Institute of Environmental Management & Studies (IEMS), Jamshedpur.At IEMS, we are dedicated to advancing the fields of environmental sustainability and safety management. Our mission is to create a safer, greener future through cutting-edge research, innovative solutions, and comprehensive educational programs.
  Our institute is at the forefront of addressing today’s environmental and safety challenges. We believe that through collaboration, education, and community engagement, we can make a significant impact. Our programs are designed to equip professionals, students, and communities with the knowledge and skills needed to foster a sustainable and safe environment.
  We are proud of our diverse team of experts and our state-of-the-art facilities, which enable us to offer top-tier education.`,
    name: 'Neeraj Kumar Sinha',
    designation: 'Chairman, IEMS',
    image: require('../../../assets/team/leaderships/neerajksinha.webp'),
  },
  {
    message: `Welcome to the Institute of Environmental Management & Studies (IEMS), Jamshedpur. At IEMS, we are dedicated to fostering a culture of environmental stewardship and safety excellence. Our mission is to drive innovative solutions and provide comprehensive education and training to address the pressing environmental and safety challenges of our time.
Our institute stands as a beacon of knowledge and expertise, committed to advancing sustainability and safety across various sectors. We believe that through collaborative efforts, rigorous research, and practical applications, we can significantly contribute to a safer and greener future. We take immense pride in our state-of-the-art facilities and our team of dedicated professionals who bring a wealth of experience and knowledge to our programs. At IEMS, we offer a wide range of education and training opportunities to navigate and mitigate environmental and safety risks.
IEMS is more than an institute, it is a community of passionate individuals working towards a common goal. We are dedicated to continuous improvement and innovation, ensuring that our efforts have a lasting and positive impact on society. Thank you for your interest in IEMS. We invite you to join us in our journey towards a sustainable and safe future. Together, we can make a difference.`,
    name: 'Uday S Verma',
    designation: 'Director, IEMS',
    image: require('../../../assets/team/leaderships/MrUdaySVerma.webp'),
  },
];

const MessageFromLeaderships = () => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScrolling, setAutoScrolling] = useState(true);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;

    if (autoScrolling) {
      scrollInterval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % messages.length;

        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });

        setActiveIndex(nextIndex);
      }, 5000);
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [activeIndex, autoScrolling]);

  const renderItem = ({ item }: { item: (typeof messages)[0] }) => (
    <View style={styles.messageCard}>
      <Text style={styles.messageText}>{item.message}</Text>
      <Text style={styles.wishesText}>Best wishes,</Text>
      <View style={styles.profileContainer}>
        <Image
          source={item.image}
          style={styles.profileImage}
          resizeMode='cover'
        />
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.designationText}>{item.designation}</Text>
        </View>
      </View>
    </View>
  );

  const renderDotIndicator = () => (
    <View style={styles.indicatorContainer}>
      {messages.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor:
                index === activeIndex ? Colors.primaryColor : '#ccc',
            },
          ]}
        />
      ))}
    </View>
  );

  const handleScrollBegin = () => {
    setAutoScrolling(false);
  };

  const handleScrollEnd = () => {
    setAutoScrolling(true);
  };

  return (
    <View style={styles.container}>
      <Heading heading='Messages from Our Leadership' />
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={SCREEN_WIDTH - 16}
        decelerationRate='normal'
        onScrollBeginDrag={handleScrollBegin}
        onMomentumScrollEnd={(event) => {
          const slideSize = SCREEN_WIDTH - 100;
          const index = Math.floor(
            event.nativeEvent.contentOffset.x / slideSize
          );
          setActiveIndex(index);
          handleScrollEnd();
        }}
        getItemLayout={(_, index) => ({
          length: SCREEN_WIDTH - 16,
          offset: (SCREEN_WIDTH - 16) * index,
          index,
        })}
      />
      {renderDotIndicator()}

      <View style={{ marginHorizontal: 'auto', marginTop: 12 }}>
        <Shadow distance={4} startColor='rgba(0,0,0,0.1)'>
          <Pressable
            style={styles.meetTeamButton}
            onPress={() => router.push('team')}
          >
            <Text style={styles.meetTeamText}>Meet our Team</Text>
          </Pressable>
        </Shadow>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryLightestColor,
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 12,
  },
  messageCard: {
    width: SCREEN_WIDTH - 32,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: Colors.bodyTextColor,
  },
  wishesText: {
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '600',
  },
  designationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  meetTeamButton: {
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: SCREEN_WIDTH * 0.7,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
  },
  meetTeamText: {
    color: Colors.primaryColor,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default MessageFromLeaderships;
