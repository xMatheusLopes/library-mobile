import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';

import { Theme } from '../../Theme';
import Header from '../layout/Header';
import { Card, Container, Name, Author, Image, Price, BuyBtn, BuyBtnText, Icon, BuyBtnView } from './Styles';
import { Content, Right, Button, ActionSheet, Form, Item, Label, Input } from 'native-base';

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

    const BUTTONS = ["Pesquisar", "Cancelar"];
    // const DESTRUCTIVE_INDEX = 1;
    const CANCEL_INDEX = 1;

    const [clicked, setClicked] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [searchInput, setSearchInput] = useState(null);

    const handleAction = () => {
        switch(clicked) {
            case 0:
                setShowSearch(true);
                break;
        }
    }
    useEffect(() => {
        handleAction();
    }, [clicked])

    const RightContent = () => {
        return (
            <Right>
                <Button
                    transparent
                    onPress={() =>
                        ActionSheet.show(
                          {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            // destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            // title: "Testing ActionSheet"
                          },
                          buttonIndex => {
                            setClicked(buttonIndex);
                          }
                        )}>
                    <Icon type="FontAwesome5" style={{color: Theme.Primary}} name="ellipsis-v" />
                </Button>
            </Right>
        );
    }

    const Search = () => {
        if (showSearch) {
            return (
                <Form style={{ marginRight: 12}}>
                    <Item>
                        <Input
                            autoFocus={showSearch}
                            placeholder="Pesquisar" />
                    </Item>
                </Form>
            );
        }

        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: Theme.Dark}}>
            <Header HeaderTitle='Biblioteca' Right={RightContent}/>
            <Content>
                <Search />
                <View style={{ flex: 1, backgroundColor: Theme.Dark }}>
                    <Container>
                        <FlatList
                            data={items}
                            renderItem={({ item }) => <ItemCard item={item} />}
                            keyExtractor={item => item.id}
                            numColumns={2}
                        />
                    </Container>
                </View>
            </Content>
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
