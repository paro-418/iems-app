import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Ionicons } from '@expo/vector-icons';
import Heading from './Heading';

const FAQData: { question: string; answer: string }[] = [
  {
    question: 'Why Choose IEMS?',
    answer:
      'IEMS is a pioneer in environmental and safety education, offering industry-backed programs, experienced faculty, and state-of-the-art facilities. With strong support from leading industries like Tata Steel and Tata Motors, we provide practical, hands-on training that prepares you for real-world challenges.',
  },
  {
    question: 'What Programs Does IEMS Offer?',
    answer:
      'IEMS offers two flagship programs: - **Post Graduate Diploma in Environmental Management (PGDEM)** - **Post Graduate Diploma in Industrial Safety (PGDIS)** Both programs are designed to equip students with the knowledge and skills needed to excel in environmental and safety management.',
  },
  {
    question: 'Who Can Apply for These Programs?',
    answer:
      '- **PGDEM:** Bachelor’s degree in Science/Engineering or equivalent. Diploma holders in Engineering or Arts/Commerce graduates with a science background (Physics, Chemistry, Math at Intermediate level) are also eligible. - **PGDIS:** Bachelor’s degree in Science (Physics, Chemistry, Math) with 6 years of industrial exposure, Diploma in Engineering with 4 years of industrial exposure, or B.Tech/M.Tech with 2 years of industrial experience.',
  },
  {
    question: 'What Is the Duration of the Programs?',
    answer:
      'Both PGDEM and PGDIS are 1.5-year programs divided into 3 semesters. Classes are held in the evening from Monday to Friday (6:15 PM to 9:00 PM) to accommodate working professionals.',
  },
  {
    question:
      'What Are the Career Opportunities After Completing These Programs?',
    answer:
      'Graduates of IEMS can pursue careers in: - Environmental Management - Industrial Safety - Sustainability Consulting - Waste Management - Occupational Health and Safety - Disaster Management - Environmental Compliance and Auditing',
  },
  {
    question: 'Does IEMS Provide Placement Assistance?',
    answer:
      'Yes, IEMS has strong industry connections and provides placement assistance to its students. Our alumni are working in leading organizations across various sectors.',
  },
  {
    question: 'What Is the Fee Structure?',
    answer:
      'For fee details, please visit the office or contact us at 6576847647 or email us at iemsjsr@gmail.com/ uday.evenstar@gmail.com. Please note: Office timings: 05:00PM – 07:30PM (Monday - Friday)',
  },
  {
    question: 'How Can I Apply for Admission?',
    answer:
      'You can apply for admission by submitting admission form by visiting our office at 26, J Road, Bistupur, Jamshedpur, Jharkhand - 831001. Adminssion form is only available at office.',
  },
];

const AccordionItem = ({
  item,
  isActive,
  onPress,
}: {
  item: (typeof FAQData)[0];
  isActive: boolean;
  onPress: (event: GestureResponderEvent) => void;
}) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.header} onPress={onPress}>
      <Text style={styles.question}>{item.question}</Text>
      <Ionicons
        name={isActive ? 'chevron-up' : 'chevron-down'}
        size={24}
        color='#333'
      />
    </TouchableOpacity>
    <Collapsible collapsed={!isActive}>
      <View style={styles.content}>
        <Text style={styles.answer}>{item.answer}</Text>
      </View>
    </Collapsible>
  </View>
);

const Accordion = () => {
  const [activeSections, setActiveSections] = useState<number>(-1);

  const toggleSection = (index: number) =>
    activeSections === index ? setActiveSections(-1) : setActiveSections(index);

  return (
    <View style={styles.container}>
      <Heading heading='FAQs' />
      {FAQData.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isActive={index === activeSections}
          //   isActive={activeSections.includes(index)}
          onPress={() => toggleSection(index)}
        />
      ))}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  itemContainer: {
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    padding: 16,
    backgroundColor: '#fff',
  },
  answer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
