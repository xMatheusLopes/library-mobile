import React, { useEffect, useState } from 'react';

import { View, Text, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { Theme } from '../../Theme';
import { Content } from 'native-base';
import Header from '../layout/Header';
import { api } from '../utils/services/api';

import IBook from './Interfaces';

const Book = () => {
    const [books, setBooks] = useState<[IBook] | null>();

    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = async () => {
        try {
            setBooks(await api.get('books'));
            console.log(books);
        } catch (e) {
            Alert.alert('Não foi possível carregar os livros');
        }

    }

    return (
        <View style={{ flex: 1, backgroundColor: Theme.Dark }}>
            <Header HeaderTitle={'Livros'} Right={null}></Header>
            <Content>
                <Text>Hello</Text>
            </Content>
        </View>
    )
}

export default Book;

Book.navigationOptions = {
    headerShown: false
}

export const BookNavigator = createStackNavigator({
    Book: { screen: Book }
});
