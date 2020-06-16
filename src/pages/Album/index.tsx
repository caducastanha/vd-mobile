import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons'

import styles from './styles';
import data from '../../../data';
import { useNavigation } from '@react-navigation/native';

const Album = () => {
  const navigation = useNavigation();

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleGoToQuestion(item: any) {
    if(item.isVideo){
      // navigation.navigate('VideoPage');
      return;
    } else {
      navigation.navigate('Question', { item });
    }
  }

  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={handleNavigationBack}>
        <Icon name="arrow-left" size={20} color="#EA1F59" />
      </TouchableOpacity>

      <Text style={styles.title} >Nosso Album</Text>
      <Text style={styles.description} >
        Cada foto representa um {"\n"}
      momento e você lembra  {"\n"}
      de todos?
      {"\n"}{"\n"}
      Clica nas fotos {"\n"}
      para responder {"\n"}
      umas perguntinhas.
      </Text>

      <FlatList
        style={styles.flatList}
        keyExtractor={(_, index) => String(index)}
        numColumns={3}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleGoToQuestion(item)}
            >
              <Image
                style={styles.itemImage}
                source={item.image}
              />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default Album;
