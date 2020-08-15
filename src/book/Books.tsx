import React, { useEffect, useState } from 'react';

import { View, Alert } from 'react-native';

import { Theme } from '../../Theme';
import { Fab, Icon } from 'native-base';
import Header from '../layout/Header';
import { api } from '../utils/services/api';

import BooksList from './components/BooksList';
import IBook from './Interface';

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

    return (
        <View style={{ flex: 1, backgroundColor: Theme.Dark }}>
            <Header HeaderTitle={'Livros'} Right={null} ></Header>
            <View style={{ flex: 1 }}>
                { books.length > 0 && <BooksList isBuyable={false} books={books}  />}
                <Fab
                    style={{ backgroundColor: Theme.Primary }}
                    position="bottomRight"
                    onPress={() => navigation.navigate('Book')}>
                    <Icon name="plus" style={{ color: Theme.Dark }} type="FontAwesome5"/>
                </Fab>
            </View>
        </View>
    )
}

export default Books;