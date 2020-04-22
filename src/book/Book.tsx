import React from 'react';

import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// import { Container } from './styles';

const Book = () => <View />;

export default Book;

Book.navigationOptions = {
    headerShown: false
}

export const BookNavigator = createStackNavigator({
    Book: { screen: Book }
});
