import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native';

import { Card, Name, Author, Price, Image, PurshasedBtn, BuyBtnView, Icon, BuyBtnText, BuyBtn } from '../../library/Styles';
import { formatCurrency } from '../../utils/services/pipes';

import IBook from '../Interface'

const BooksList = ({ books, isBuyable,  ...rest }: {books: IBook[], isBuyable: boolean}) => {

    const [auxBooks, setAuxBooks] = useState([]);

    useEffect(() => {
        setAuxBooks(books)
    }, [])

    const buyBook = (index: number) => {
        const newItems = [...auxBooks]
        newItems[index].purshased = true
        setAuxBooks(newItems)
    }

    return (
        <FlatList
            data={auxBooks}
            renderItem={({ item, index }: {item: IBook, index: number}) => (
                <Card>
                    <Image source={{ uri: item.picture}} />
                    <Name> {item.name} </Name>
                    <Author> {item.author} </Author>
                    <Price> {formatCurrency(item.price)} </Price>
                    {
                        isBuyable == true && !item.purshased && (
                            <BuyBtn onPress={() => buyBook(index)}>
                                <BuyBtnView>
                                    <Icon type="FontAwesome5" name='plus' />
                                    <BuyBtnText> COMPRAR </BuyBtnText>
                                </BuyBtnView>
                            </BuyBtn>
                        )
                    }

                    {
                        isBuyable == true && item.purshased && (
                            <PurshasedBtn>
                                <BuyBtnView>
                                    <Icon type="FontAwesome5" name='check' />
                                    <BuyBtnText> COMPRADO </BuyBtnText>
                                </BuyBtnView>
                            </PurshasedBtn>
                        )
                    }
                </Card>
            )}
            keyExtractor={(item: IBook) => item.id.toString()}
            numColumns={2}
        />
    )
}

export default BooksList;