import { Controller } from 'react-hook-form';
import { IFormField } from '../lib/interfaces/PotentialStudents.interface';
import { Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const FormField = ({
  name,
  label,
  placeholder,
  keyboardType = 'default',
  maxLength,
  multiline = false,
  secureTextEntry = false,
  styles,
  form,
  component,
  options,
}: IFormField) => (
  <Controller
    control={form.control}
    name={name}
    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        {component === 'select' ? (
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={[
              styles.input,
              error && styles.inputError,
              multiline && styles.multilineInput,
              {
                borderWidth: 1,
                borderColor: 'gray',
              },
            ]}
          >
            {options?.map((o) => (
              <Picker.Item
                key={String(o.value)}
                label={o.label}
                value={o.value}
              />
            ))}
          </Picker>
        ) : (
          <TextInput
            style={[
              styles.input,
              error && styles.inputError,
              multiline && styles.multilineInput,
            ]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
            multiline={multiline}
            numberOfLines={multiline ? 4 : 1}
            secureTextEntry={secureTextEntry}
          />
        )}
        {error && <Text style={styles.errorText}>{error.message}</Text>}
      </View>
    )}
  />
);
