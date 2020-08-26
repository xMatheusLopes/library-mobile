import React from 'react';
import Header from '../layout/Header';
import { MyContainer } from '../utils/styles/Styles';

const Book = () => {
  return (
      <MyContainer>
          <Header BackButton={true} HeaderTitle='Novo Livro' Right={null} />
      </MyContainer>
  );
}

export default Book;