import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../../constants/Colors';

const announcements = [
  'Convocation Function will be held on the 25th of April, 2025.',
  'PGDEM & PGDIS forms will be published on 1st week of July for 2025-2026 Batch.',
  '⁠PGDIS project review is open.',
];
const Announcement = () => {
  const [colorInvert, setColorInvert] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorInvert((prev) => !prev);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <View
        style={{
          backgroundColor: colorInvert
            ? Colors.primaryColor
            : Colors.primaryLightColor,
          paddingVertical: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: '500', color: '#fff' }}>Announcement</Text>
      </View>
      <View style={{}}>
        {announcements.map((ann, i) => (
          <View
            key={ann}
            style={{
              backgroundColor: i % 2 === 0 ? '#ddd' : '#fff',
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 8,
            }}
          >
            <Text>{i + 1}.</Text>
            <Text style={{ paddingHorizontal: 4 }}>{ann}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Announcement;

const styles = StyleSheet.create({});
