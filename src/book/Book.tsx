import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import Header from '../layout/Header';

// import { Container } from './styles';

const Book = () => {
  return (
      <View>
          <Header BackButton={true} HeaderTitle='Novo Livro' Right={null} />
      </View>
  );
}

/**
 * Navigation
 */
Book.navigationOptions = {
    headerShown: false
}

export default Book;