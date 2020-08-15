import React, { useEffect, useState } from 'react';

import { View, Alert, FlatList } from 'react-native';

import { Theme } from '../../Theme';
import { Fab, Icon } from 'native-base';
import Header from '../layout/Header';
import { api } from '../utils/services/api';

import { Card, Name, Author, Price, Image } from '../library/Styles';
import { formatCurrency } from '../utils/services/pipes';

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
            <View style={{ flex: 1 }}>
                { books.length > 0 && (
                    <FlatList
                        data={books}
                        renderItem={({ item, index }) => (
                            <Card>
                                <Image source={{ uri: item.picture}} />
                                <Name> {item.name} </Name>
                                <Author> {item.author} </Author>
                                <Price> {formatCurrency(item.price)} </Price>
                            </Card>
                        )}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                )}
                
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

export default ListBooks;