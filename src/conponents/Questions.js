import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RadioButton from './RadioButton';

const Questions = ({index, item, onPress}) => {
  return (
    <View style={styles.question}>
      <Text style={styles.text}>{`${index + 1}. ${item?.question}`}</Text>
      <RadioButton
        title={`A. ${item?.optional?.a}`}
        check={item?.selected === 'a'}
        onPress={() => onPress(index, 'a')}
      />
      <RadioButton
        title={`B. ${item?.optional?.b}`}
        check={item?.selected === 'b'}
        onPress={() => onPress(index, 'b')}
      />
      <RadioButton
        title={`C. ${item?.optional?.c}`}
        check={item?.selected === 'c'}
        onPress={() => onPress(index, 'c')}
      />
      <RadioButton
        title={`D. ${item?.optional?.d}`}
        check={item?.selected === 'd'}
        onPress={() => onPress(index, 'd')}
      />
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  question: {
    marginVertical: 6,
  },
});
