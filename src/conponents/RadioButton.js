import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RadioButton = ({title, check = false, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.containerRadio, check && styles.radio]} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
  },
  containerRadio: {
    width: 14,
    height: 14,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: 8,
  },
  radio: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
});
