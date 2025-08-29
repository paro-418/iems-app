import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  IFormField,
  interestedCoursesNameTypes,
  TPotentialStudentForm,
} from '../lib/interfaces/PotentialStudents.interface';
import { Colors } from '../../constants/Colors';
import { PotentialStudentFormSchema } from '../lib/schema/PotentialStudentFormSchema.schema';
import { FormField } from './FormField';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';
import { useCreatePotentialStudents } from '../services/potentialStudents/createPotentialStudents';

interface IDownloadAdmissionForm {
  courseType: interestedCoursesNameTypes;
  visible: boolean;
  handelModalVisibility: (open: boolean) => void;
}

const DownloadAdmissionForm = ({
  courseType,
  visible,
  handelModalVisibility,
}: IDownloadAdmissionForm) => {
  const [loading, setLoading] = useState(false);
  const { mutate: createPotentialStudentMutate } = useCreatePotentialStudents();

  const form = useForm<TPotentialStudentForm>({
    resolver: zodResolver(PotentialStudentFormSchema),
    defaultValues: {
      name: '',
      phoneNo: '',
      email: '',
      interestedCourse: 'all',
      inquiryText: '',
    },
  });

  const onSubmit = async (formData: TPotentialStudentForm) => {
    try {
      setLoading(true);
      console.log('formData', formData);
      // call api to save data
      createPotentialStudentMutate(formData);
      await downloadPdf();
    } catch (error) {
      Alert.alert('Error', 'Failed to submit form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadPdf = async () => {
    try {
      const PDFAssets: Record<
        Exclude<interestedCoursesNameTypes, 'all'>,
        any
      > = {
        PGDIS: require('../../assets/forms/PGDIS.pdf'),
        PGDEM: require('../../assets/forms/PGDEM.pdf'),
      };

      if (courseType === 'all') {
        return;
      }

      const selectedPdfAsset = PDFAssets[courseType];
      const fileName = `IEMS_${courseType}_Admission_Form.pdf`;
      const fileUri = `${FileSystem.documentDirectory}${fileName}`;

      // Convert asset to Asset object and download
      const asset = Asset.fromModule(selectedPdfAsset);
      await asset.downloadAsync();

      if (!asset.localUri) {
        throw new Error('Failed to download asset');
      }

      // Copy file to document directory
      await FileSystem.copyAsync({
        from: asset.localUri,
        to: fileUri,
      });

      // Share the file
      await Sharing.shareAsync(fileUri, {
        mimeType: 'application/pdf',
        dialogTitle: 'Download Admission Form',
      });

      Alert.alert('Success', 'Form downloaded successfully!', [
        {
          text: 'OK',
          onPress: () => {
            form.reset();
            handelModalVisibility(false);
          },
        },
      ]);
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Error', 'Failed to download form. Please try again.');
    }
  };

  return (
    <Modal
      visible={visible}
      animationType='slide'
      transparent={true}
      onRequestClose={() => {
        form.reset();
      }}
    >
      <KeyboardAvoidingView
        style={styles.modalOverlay}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.title}>
                  View {courseType} Admission Form
                </Text>
                <Text style={styles.description}>
                  Please provide your details to view the form
                </Text>
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  form.reset();
                  handelModalVisibility(false);
                }}
              >
                <Ionicons name='close' size={24} color='#666' />
              </TouchableOpacity>
            </View>

            {/* Form */}
            <ScrollView
              style={styles.formContainer}
              showsVerticalScrollIndicator={false}
            >
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
            </ScrollView>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => {
                  form.reset();
                  handelModalVisibility(false);
                }}
                disabled={loading}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

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
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    maxWidth: 400,
    maxHeight: '80%',
  },
  modalContent: {
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
  headerTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  closeButton: {
    padding: 4,
  },
  formContainer: {
    padding: 20,
    maxHeight: 400,
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

export default DownloadAdmissionForm;
