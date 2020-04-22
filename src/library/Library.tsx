import React from 'react'
import { View, FlatList } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';

import { Theme } from '../../Theme';
import Header from '../layout/Header';
import { Card, Container, Name, Author, Image, Price, BuyBtn, BuyBtnText, Icon, BuyBtnView } from './Styles';

const Library = () => {
    const items = [
        {
            id: '1',
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher',
            author: 'Andrzej Sapkowski',
            status: 1,
            price: 40.00
        },
        {
            id: '2',
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 2',
            author: 'Andrzej Sapkowski',
            status: 1,
            price: 50.00
        },
        {
            id: '3',
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 3',
            author: 'Andrzej Sapkowski',
            status: 1,
            price: 50.00
        },
        {
            id: '4',
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 4',
            author: 'Andrzej Sapkowski',
            status: 1,
            price: 40.00
        },
        {
            id: '5',
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 5',
            author: 'Andrzej Sapkowski',
            status: 1,
            price: 40.00
        },
        {
            id: '6',
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 6',
            author: 'Andrzej Sapkowski',
            status: 1,
            price: 40.00
        },
        {
            id: '7',
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 7',
            author: 'Andrzej Sapkowski',
            status: 1,
            price: 40.00
        },
    ];

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const ItemCard = ({item}) => {
        return (
                <Card>
                    <Image
                        source={{ uri: item.picture}}
                    />
                    <Name>
                        {item.name}
                    </Name>
                    <Author>
                        {item.author}
                    </Author>
                    <Price>
                        {formatCurrency(item.price)}
                    </Price>
                    <BuyBtn>
                        <BuyBtnView>
                            <Icon name='add' />
                            <BuyBtnText>
                                CARRINHO
                            </BuyBtnText>
                        </BuyBtnView>
                    </BuyBtn>
                </Card>
            )
    }

    return (
        <View style={{ flex: 1 }}>
            <Header Right={null} HeaderTitle='Biblioteca'/>
            <View style={{ flex: 1, backgroundColor: Theme.DarkContent }}>
                <Container>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => <ItemCard item={item} />}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </Container>
            </View>
        </View>
    )
}

Library.navigationOptions = {
    headerShown: false
}

export const LibraryNavigator = createStackNavigator({
    Library: { screen: Library }
});

export default Library
