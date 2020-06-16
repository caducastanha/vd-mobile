import React from 'react';
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

const Home = () => {
  const navigation = useNavigation();

  function handlePushToAlbum() {
    navigation.navigate('Album');
  }

  return (
    <View style={styles.container} >
      <View style={styles.viewImage}>
        <Image source={require('../../assets/logo.png')} style={styles.Image} />
      </View>

      <Text style={styles.description} >
        você está pronta {"\n"}
        para saber se {"\n"}
        é a melhor {"\n"}
        namorada {"\n"}
        do mundo? {"\n"}
      </Text>


      <View style={styles.viewButton} >
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePushToAlbum()}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
