import React from 'react';
import { colores } from '../theme/appTheme';
import ButtonBase from './ButtonBase';

interface Props {
  text: string;
  onPress: () => void;
  disable?: boolean;
  theme?: string;
}

export default function PrimaryButton({
  text,
  onPress,
  disable,
  theme,
}: Props) {
  return (
    <ButtonBase
      bg={theme === 'primary' ? colores.primary : colores.disableBG}
      color={theme === 'primary' ? colores.textPrimary : colores.disableText}
      text={text}
      onPress={onPress}
      disable={disable}
    />
  );
}
