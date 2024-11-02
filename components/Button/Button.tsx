import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large'; // New size prop
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  small: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  medium: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  large: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  textSmall: {
    fontSize: 12,
  },
  textMedium: {
    fontSize: 16,
  },
  textLarge: {
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
});

export const MyButton = ({ text, onPress, color, textColor, size = 'medium' }: ButtonProps) => {
  const buttonSizeStyle = styles[size];
  const textSizeStyle = styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}`];

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, buttonSizeStyle, !!color && { backgroundColor: color }]}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={[styles.buttonText, textSizeStyle, !!textColor && { color: textColor }]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
