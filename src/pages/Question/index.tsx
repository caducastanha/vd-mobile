import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons'
import styles from './styles';

interface Item {
  id: string,
  image: any,
  question: {
    text: string,
    answers: {
      text: string,
      isTrue: boolean,
      message: string,
    }[],
  },
};

interface Params {
  item: Item
}

const Question = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [index, setIndex] = useState(-1);
  const { item } = route.params as Params;

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleSelectButton(i: number) {
    if (i === index) {
      setIndex(-1);
    } else {
      setIndex(i);
    }
  }

  function handleSubmit() {
    if (index < 0) {
      Alert.alert(
        "Minha linda",
        "Você esqueceu de selecionar uma resposta",
        [
          { text: "OK", onPress: () => { } }
        ],
        { cancelable: false }
      );
      return;
    }
    const answer = item.question.answers.find((_, i) => i === index)

    if (answer?.isTrue) {
      Alert.alert(
        "Parabénnnns!!!",
        answer.message,
        [
          {
            text: "OK", onPress: () => {
              const answersTrue = item.question.answers.filter(ans => {
                return ans.isTrue;
              });

              if (answersTrue.length > 1) {
                return;
              } else {
                navigation.goBack();
              }

            }
          }
        ],
        { cancelable: false }
      );
      return;
    } else {
      Alert.alert(
        "Errooooou!!!",
        answer?.message,
        [
          { text: "OK", onPress: () => { } }
        ],
        { cancelable: false }
      );
      return;
    }
  }

  return (
    <View style={styles.container} >

      <TouchableOpacity onPress={handleNavigationBack}>
        <Icon name="arrow-left" size={20} color="#EA1F59" />
      </TouchableOpacity>

      <View style={styles.viewQuestion} >
        <View style={styles.viewImage} >
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.viewQuestionText} >
          <Text style={styles.questionText} >{item.question.text}</Text>
        </View>
      </View>

      {item.question.answers.map((answer, i) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.button,
            i === index ? styles.selected : {}
          ]}
          onPress={() => handleSelectButton(i)}
        >
          <Text
            style={[
              styles.buttonText,
              i === index ? styles.buttonTextSelected : {}
            ]}
          >
            {answer.text}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.viewButton} >
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.buttonSubmitText}>Responder</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Question;
