import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PotentialStudentFormSchema } from '../lib/schema/PotentialStudentFormSchema.schema';
import { FormField } from './FormField';
import { Colors } from '../../constants/Colors';
import { TPotentialStudentForm } from '../lib/interfaces/PotentialStudents.interface';

const InquiryForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(PotentialStudentFormSchema),
    defaultValues: {
      email: '',
      name: '',
      inquiryText: '',
      interestedCourse: 'all',
      phoneNo: '',
    },
  });

  const onSubmit = async (formData: TPotentialStudentForm) => {
    try {
      setLoading(true);
      console.log('formData', formData);
      // call api to save data
    } catch (error) {
      Alert.alert('Error', 'Failed to submit form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.description}>Have an Inquiry?</Text>
      </View>

      {/* Form */}
      <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
        <FormField
          name='name'
          label='Name'
          placeholder='Your name'
          form={form}
          styles={{
            errorText: styles.errorText,
            input: styles.input,
            inputContainer: styles.inputContainer,
            inputError: styles.inputError,
            label: styles.label,
            multilineInput: styles.multilineInput,
          }}
        />

        <FormField
          name='phoneNo'
          label='Phone Number'
          placeholder='Your phone number'
          keyboardType='phone-pad'
          maxLength={10}
          form={form}
          styles={{
            errorText: styles.errorText,
            input: styles.input,
            inputContainer: styles.inputContainer,
            inputError: styles.inputError,
            label: styles.label,
            multilineInput: styles.multilineInput,
          }}
        />

        <FormField
          name='email'
          label='Email'
          placeholder='Your email'
          keyboardType='email-address'
          form={form}
          styles={{
            errorText: styles.errorText,
            input: styles.input,
            inputContainer: styles.inputContainer,
            inputError: styles.inputError,
            label: styles.label,
            multilineInput: styles.multilineInput,
          }}
        />
        <FormField
          name='inquiryText'
          label='inquiryText'
          placeholder='your inquiry'
          keyboardType='default'
          form={form}
          styles={{
            errorText: styles.errorText,
            input: styles.input,
            inputContainer: styles.inputContainer,
            inputError: styles.inputError,
            label: styles.label,
            multilineInput: styles.multilineInput,
          }}
        />
        <FormField
          name='interestedCourse'
          label='Course'
          component='select'
          options={[
            { label: 'All', value: 'all' },
            {
              label: 'Post Graduate Diploma in Industrial Safety (PGDIS)',
              value: 'PGDIS',
            },
            {
              label:
                'Post Graduate Diploma in Environmental Management (PGDEM)',
              value: 'PGDEM',
            },
          ]}
          form={form}
          styles={{
            errorText: styles.errorText,
            input: styles.input,
            inputContainer: styles.inputContainer,
            inputError: styles.inputError,
            label: styles.label,
            multilineInput: styles.multilineInput,
          }}
        />
      </ScrollView>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={form.handleSubmit(onSubmit)}
          disabled={loading}
        >
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size='small' color='#fff' />
              <Text style={styles.submitButtonText}>Saving...</Text>
            </View>
          ) : (
            <Text style={styles.submitButtonText}>View Form</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InquiryForm;

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    color: Colors.primaryColor,
    fontWeight: '600',
  },
  form: {
    padding: 20,
    // maxHeight: 400,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: '#ff4444',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 12,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  button: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: Colors.primaryColor,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
