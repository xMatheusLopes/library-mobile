import React, { useEffect, useState, useCallback } from 'react';

import { View, Text, Alert, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { Theme } from '../../Theme';
import { Content, Button, Fab, Icon, Container } from 'native-base';
import Header from '../layout/Header';
import { api } from '../utils/services/api';

import IBook from './Interfaces';

const ListBooks = ({navigation}) => {
    const [books, setBooks] = useState([]);

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
            <View style={{ flex: 1 }} >

                <FlatList
                    data={books}
                    renderItem={({ item, index }) => (
                        <Text style={{color: '#ffff'}}>{item.name}</Text>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
                <Fab
                    style={{ backgroundColor: Theme.Primary }}
                    position="bottomRight"
                    onPress={() => navigation.navigate('Book')}>
                    <Icon name="plus" type="FontAwesome5"/>
                </Fab>
            </View>
        </View>
    )
}

export default ListBooks;

ListBooks.navigationOptions = {
    headerShown: false
}

export const ListBooksNavigator = createStackNavigator({
    ListBooks: { screen: ListBooks }
});
