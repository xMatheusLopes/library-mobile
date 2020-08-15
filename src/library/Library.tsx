// Native
import React, { useState, useEffect, useRef } from 'react'
import { View, FlatList, Animated } from 'react-native'

// Native Base
import { 
    Content, 
    Right, 
    Button, 
    ActionSheet, 
    Form, 
    Input 
} from 'native-base';

// Styles
import { Theme } from '../../Theme';
import { 
    Card, 
    Container, 
    Name, 
    Author, 
    Image, 
    Price, 
    Icon, 
    Item
} from './Styles';

// Layout
import Header from '../layout/Header';

// Utils
import { formatCurrency } from '../utils/services/pipes';
import BooksList from '../book/components/BooksList';
import IBook from '../book/Interface';

const Library = () => {
    // Hooks
    const [clicked, setClicked] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [translateYValue, setTranslateYValue] = useState(new Animated.Value(-100));

    useEffect(() => {
        handleAction();
    }, [clicked])

    // TODO load from api
    const [items, setItems] = useState<IBook[]>([
        {
            id: 1,
            picture: 'http://localhost:5000/storage/img/669953cb-3222-41d1-91eb-c2ec064bbbef.jpg',
            name: 'The Witcher',
            author: 'Andrzej Sapkowski',
            price: 40.00,
            purshased: false
        },
        {
            id: 2,
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 2',
            author: 'Andrzej Sapkowski',
            price: 50.00,
            purshased: false
        },
        {
            id: 3,
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 3',
            author: 'Andrzej Sapkowski',
            price: 50.00,
            purshased: false
        },
        {
            id: 4,
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 4',
            author: 'Andrzej Sapkowski',
            price: 40.00,
            purshased: false
        },
        {
            id: 5,
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 5',
            author: 'Andrzej Sapkowski',
            price: 40.00,
            purshased: false
        },
        {
            id: 6,
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 6',
            author: 'Andrzej Sapkowski',
            price: 40.00,
            purshased: false
        },
        {
            id: 7,
            picture: 'https://images-na.ssl-images-amazon.com/images/I/91cO-IrKBpL.jpg',
            name: 'The Witcher 7',
            author: 'Andrzej Sapkowski',
            price: 40.00,
            purshased: false
        },
    ]);

    /**
     * Options: BUTTONS, DESTRUCTIVE_INDEX, CANCEL_INDEX
     */
    const BUTTONS = ["Pesquisar", "Cancelar"];
    const CANCEL_INDEX = 1;

    const showTransitionAnim = () => {
            Animated.timing(
                translateYValue, 
                { 
                    toValue: 1,
                    duration: 1000 
                }
            ).start();
    }

    const hideTransitionAnim = () => {
        Animated.timing(
            translateYValue, 
            { 
                toValue: -100,
                duration: 1000 
            }
        ).start();
    }

    // Handle actions from Right item 
    const handleAction = () => {
        switch(clicked) {
            case 0:
                setShowSearch(true);
                showTransitionAnim();
                break;
        }
    }
    
    /**
     * Componentes
     */

    // Right Actions
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
                    <Icon type="FontAwesome5" style={{color: Theme.Dark}} name="ellipsis-v" />
                </Button>
            </Right>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: Theme.Dark }}>
            <Header HeaderTitle='Biblioteca' Right={RightContent} />
            <Content>
                    { showSearch && 
                        (
                            <Animated.View 
                                style={{ 
                                    height: translateYValue.interpolate({
                                        inputRange: [-100, -80, -60, -40, -20, -10, 1],
                                        outputRange: [0, 10, 20, 30, 40, 50, 65],
                                    }),
                                    transform: [ { translateY: translateYValue } ] 
                                }}>
                                <Form style={{ marginRight: 16}}>
                                        <Item>
                                            <Icon type='FontAwesome5' active name='search' />
                                            <Input autoFocus={showSearch} placeholder="Pesquisar" />
                                            <Icon onPress={() => {
                                                hideTransitionAnim();
                                                setClicked(null);
                                                setTimeout(() => {
                                                    setShowSearch(false);
                                                }, 1000);
                                            }} type='FontAwesome' name='close' />
                                        </Item>
                                </Form>
                            </Animated.View>
                        )
                    }
                
                <View style={{ flex: 1, backgroundColor: Theme.Dark }}>
                    <Container>
                        { items.length > 0 && <BooksList isBuyable={true} books={items} /> }
                    </Container>
                </View>
            </Content>
        </View>
    )
}

export default Library
