import React, { useEffect, useState } from 'react';

import { View, Alert } from 'react-native';

import { Theme } from '../../Theme';
import { Fab } from 'native-base';
import Header from '../layout/Header';
import { api } from '../utils/services/api';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import BooksList from './components/BooksList';
import IBook from './Interface';
import { MyContainer, MyContent } from '../utils/styles/Styles';

const Books = ({navigation}) => {
    const [books, setBooks] = useState<IBook[]>([]);

    const loadBooks = async () => {
        try {
            const auxBooks = await api.get('books')
            setBooks(auxBooks.data);
        } catch (e) {
            Alert.alert('Não foi possível carregar os livros');
        }
    }

    useEffect(() => {
        loadBooks()
    }, [])

    const FabBtn = () => (
        <Fab
            style={{ backgroundColor: Theme.Primary }}
            position="bottomRight"
            onPress={() => navigation.navigate('Book')}>
            <FontAwesome5 name={"plus"} style={{ color: Theme.Dark }}/>
        </Fab>
    )

    return (
        <MyContainer>
            <Header HeaderTitle={'Livros'} Right={null} ></Header>
            <MyContent>
                { books.length > 0 && <BooksList isBuyable={false} books={books}  />}
                <FabBtn />
            </MyContent>
        </MyContainer>
    )
}

export default Books;