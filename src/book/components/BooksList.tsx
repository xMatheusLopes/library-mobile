import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView } from 'react-native';

import { Card, Name, Author, Price, Image, PurshasedBtn, BuyBtnView, BuyBtnText, BuyBtn } from '../../library/Styles';
import { formatCurrency } from '../../utils/services/pipes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import IBook from '../Interface'

const BooksList = ({ books, isBuyable }: {books: IBook[], isBuyable: boolean}) => {

    const [auxBooks, setAuxBooks]: [any, any] = useState([]);

    useEffect(() => {
        setAuxBooks(books)
    }, [])

    const buyBook = (index: number) => {
        const newItems = [...auxBooks]
        newItems[index].purshased = true
        setAuxBooks(newItems)
    }

    return ( 
        <SafeAreaView>
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
                                        <FontAwesome5 name={'plus'} />
                                        <BuyBtnText> COMPRAR </BuyBtnText>
                                    </BuyBtnView>
                                </BuyBtn>
                            )
                        }
    
                        {
                            isBuyable == true && item.purshased && (
                                <PurshasedBtn>
                                    <BuyBtnView>
                                        <FontAwesome5 name={'check'} />
                                        <BuyBtnText> COMPRADO </BuyBtnText>
                                    </BuyBtnView>
                                </PurshasedBtn>
                            )
                        }
                    </Card>
                )}
                keyExtractor={(item: IBook) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={{marginTop: 10}}
            />
        </SafeAreaView>
    )
}

export default BooksList;