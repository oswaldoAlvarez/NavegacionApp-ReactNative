import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  bg: string;
  color: string;
  text: string;
  onPress: () => void;
  disable?: boolean;
}

export default function ButtonBase({ bg, color, text, onPress, disable }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} disabled={disable}>
      <View
        style={{
          ...styles.buttonBase,
          backgroundColor: bg,
        }}
      >
        <Text
          style={{
            ...styles.textButtonBase,
            color: color,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
