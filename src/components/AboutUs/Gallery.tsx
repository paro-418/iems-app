import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Heading from '../Heading';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const photos: {
  src: ImageSourcePropType;
  width: number;
  height: number;
  alt: string;
}[] = [
  {
    src: require('../../../assets/convocation/IMG_6214.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/IMG_6302.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/IMG_6308.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/IMG_6276.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/IMG_6314.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/IMG_6265.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/2R9A7133.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/2R9A7208.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/2R9A7210.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/2R9A7256.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/2R9A7290.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/2R9A7354.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/2R9A7360.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/2R9A7408.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
  {
    src: require('../../../assets/convocation/DSC_4312.webp'),
    width: 800,
    height: 600,
    alt: 'Convocation',
  },
];
const Gallery = () => {
  return (
    <View
      style={{
        backgroundColor: '#000',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        paddingVertical: 16,
        paddingHorizontal: 8,
      }}
    >
      <Heading
        heading='Gallery'
        headingStyles={{ color: '#fff', borderBottomColor: '#fff' }}
      />
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <View
            style={{
              width: '100%',
              borderRadius: 10,
              overflow: 'hidden',
              marginVertical: 4,
            }}
          >
            <Image
              source={item.src}
              width={SCREEN_WIDTH}
              height={100}
              style={{
                width: SCREEN_WIDTH,
                height: (SCREEN_WIDTH - 32) * 0.6,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
