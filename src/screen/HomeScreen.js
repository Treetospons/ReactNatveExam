import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {questions} from '../mocks/questions';
import {useNavigation} from '@react-navigation/native';
import Questions from '../conponents/Questions';
import Button from '../conponents/Button';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isRefrash, setIsRefrash] = useState(false);
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Questions',
    });
  }, [navigation]);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      setIsRefrash(true);
      generateRandom(0, questions.length - 1);
    });

    return subscribe;
  }, [navigation]);

  const generateRandom = (min, max) => {
    const numbers = [];
    const questionList = [];
    while (numbers.length < max - min + 1) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
        questionList.push(questions[randomNum]);
      }
    }
    setData([...questionList]);
    setIsRefrash(false);
  };

  const onSelected = (index, anwer) => {
    const select = Object.assign({}, data[index], {selected: anwer});
    data[index] = select;
    setData([...data]);
  };

  const onNext = () => {
    const score = data
      .map(i => (i?.selected === i?.anwer ? 1 : 0))
      .reduce((acc, cur) => acc + cur, 0);
    navigation.navigate('BoardScreen', {score});
  };

  const refresh = () => {
    setIsRefrash(true);
    generateRandom(0, questions.length - 1);
  };

  return (
    <View style={styles.conatiner}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <Questions index={index} item={item} onPress={onSelected} />
        )}
        refreshing={isRefrash}
        onRefresh={refresh}
        ListFooterComponent={
          <View style={styles.footer}>
            <Button title={'submit'} onPress={onNext} />
          </View>
        }
        extraData={[data]}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  footer: {
    justifyContent: 'center',
  },
});
