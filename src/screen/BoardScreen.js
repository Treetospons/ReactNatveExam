import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const BoardScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Score',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>score</Text>
      <Text style={styles.text}>{route?.params?.score}</Text>
    </View>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
  text: {
    fontSize: 48,
    textAlign: 'center',
  },
});
