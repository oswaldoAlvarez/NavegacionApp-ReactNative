import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  placeholder?: string;
  autoCorrect?: boolean;
  onChange: (text: string) => void;
  textValue: any;
  keyboardType?: KeyboardTypeOptions;
  onSubmit?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
}
export default function PrimaryInput({
  onChange,
  autoCorrect = false,
  keyboardType,
  placeholder,
  textValue,
  onSubmit,
  secureTextEntry,
  placeholderTextColor,
}: Props) {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      style={styles.inputStyle}
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      autoCapitalize="none"
      onChangeText={onChange}
      keyboardType={keyboardType}
      value={textValue}
      onSubmitEditing={onSubmit}
      secureTextEntry={secureTextEntry}
    />
  );
}
