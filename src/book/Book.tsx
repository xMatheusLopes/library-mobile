import React from 'react';
import { View } from 'react-native';
import Header from '../layout/Header';

// import { Container } from './styles';

const Book = () => {
  return (
      <View>
          <Header BackButton={true} HeaderTitle='Novo Livro' Right={null} />
      </View>
  );
}

export default Book;