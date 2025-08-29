import { useMutation } from '@tanstack/react-query';
import { TPotentialStudentForm } from '../../lib/interfaces/PotentialStudents.interface';
import { Alert } from 'react-native';

// API base URL - development aur production ke liye alag
const API_BASE_URL = process.env.API_BASE_URL || 'http://10.61.18.151:3000/api';

async function createPotentialStudents(submittedForm: TPotentialStudentForm) {
  try {
    const { name, email, phoneNo, inquiryText, interestedCourse } =
      submittedForm;
    if (!name || !email || !phoneNo) {
      throw new Error('Name, email, and phone number are required.');
    }

    const response = await fetch(`${API_BASE_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'IEMS-ReactNative-App',
      },
      body: JSON.stringify(submittedForm),
    });

    const result = await response.json();
    console.log('API response:', result.success, result.status);

    if (result && !result.success) {
      throw new Error(result.message || 'Failed to create potential student.');
    }

    return result;
  } catch (error) {
    console.error('Error creating potential student:', error);
    throw error;
  }
}

// const createPotentialStudents = async (
//   submittedForm: TPotentialStudentForm
// ) => {
//   try {
//     const { name, email, phoneNo } = submittedForm;

//     if (!name || !email || !phoneNo) {
//       throw new Error('Name, email, and phone number are required.');
//     }

//     console.log('🔗 API URL:', `${API_BASE_URL}/students`);
//     console.log('📤 Payload:', submittedForm);

//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

//     const response = await fetch(`${API_BASE_URL}/students`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         'User-Agent': 'IEMS-ReactNative-App',
//       },
//       body: JSON.stringify(submittedForm),
//       signal: controller.signal,
//       // Add these for React Native
//       mode: 'cors',
//       credentials: 'omit',
//     });

//     clearTimeout(timeoutId);

//     console.log('📥 Response status:', response.status);
//     console.log('📥 Response headers:', response.headers);

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('❌ Error response:', errorText);
//       throw new Error(`HTTP ${response.status}: ${errorText}`);
//     }

//     const result = await response.json();
//     console.log('✅ Success response:', result);
//     return result;
//   } catch (error: any) {
//     console.error('💥 Full error object:', error);
//     console.error('💥 Error name:', error.name);
//     console.error('💥 Error message:', error.message);
//     console.error('💥 Error stack:', error.stack);

//     // More specific error handling
//     if (error.name === 'AbortError') {
//       throw new Error('Request timeout. Server is taking too long to respond.');
//     }

//     if (error.message.includes('Network request failed')) {
//       throw new Error(
//         `Network error: Unable to reach server at ${API_BASE_URL}. Please check if server is running and accessible.`
//       );
//     }

//     if (error.message.includes('TypeError')) {
//       throw new Error(
//         'Connection error. Please check your internet connection and server URL.'
//       );
//     }

//     throw error;
//   }
// };
export const useCreatePotentialStudents = () =>
  //   submittedForm: TPotentialStudentForm
  {
    return useMutation({
      mutationFn: (submittedForm: TPotentialStudentForm) =>
        createPotentialStudents(submittedForm),
      onSuccess: () => {
        Alert.alert('Success', 'Form submitted successfully');
      },
      onError: (error: any) => {
        console.log('Error creating PS', error);
        Alert.alert('Form not submitted', error.message);
      },
    });
  };
