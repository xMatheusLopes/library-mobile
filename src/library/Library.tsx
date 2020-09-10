// Native
import React, { useState, useEffect } from 'react'

// Native Base
import {    
    ActionSheet, 

} from 'native-base';

// Styles
import { Theme } from '../../Theme';
import { MyContent, MyContainer } from '../utils/styles/Styles';

// Layout
import Header from '../layout/Header';


// Utils
import BooksList from '../book/components/BooksList';
import IBook from '../book/Interface';

import Search from './Search';

// Icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Right, Button } from './Styles';

const Library = () => {
    
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
    
    const [clicked, setClicked] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        handleAction();
    }, [clicked])

    // Handle actions from Right item 
    const handleAction = () => {
        switch(clicked) {
            case 0:
                setShowSearch(true);
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
                    <FontAwesome5 style={{color: Theme.Dark, fontSize: 18}} name={"ellipsis-v"} />
                </Button>
            </Right>
        );
    }

    return (
        <MyContainer>
            <Header HeaderTitle='Biblioteca' Right={RightContent} />
            <MyContent>
                { showSearch &&  <Search setShowSearch={setShowSearch} showSearch={showSearch} setClicked={setClicked} />}
                { items.length > 0 && <BooksList isBuyable={true} books={items} /> }
            </MyContent>
        </MyContainer>
    )
}

export default Library
