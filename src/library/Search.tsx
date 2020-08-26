import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { 
    Form, 
    Input 
} from 'native-base';

import {  
    Item
} from './Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const library = ({setShowSearch, showSearch, setClicked}) => {
    // Hooks
    const [translateYValue, setTranslateYValue] = useState(new Animated.Value(-100));

    useEffect(() => {
        if (showSearch) 
            showTransitionAnim();
        
    }, [showSearch])

    const showTransitionAnim = () => {
            Animated.timing(
                translateYValue, 
                { 
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false
                }
            ).start();
    }

    const hideTransitionAnim = () => {
        Animated.timing(
            translateYValue, 
            { 
                toValue: -100,
                duration: 1000,
                useNativeDriver: false
            }
        ).start();
    }

    const handleHideTransition = () => {
        hideTransitionAnim();
        setClicked(null);
        setTimeout(() => {
            setShowSearch(false);
        }, 1000)
    }

    const animatedViewStyles = {
        height: translateYValue.interpolate({
            inputRange: [-100, -80, -60, -40, -20, -10, 1],
            outputRange: [0, 10, 20, 30, 40, 50, 65],
        }),
        transform: [ { translateY: translateYValue } ], 
        opacity: translateYValue.interpolate({
            inputRange: [-100, -50, 1],
            outputRange: [0, 0.5, 1]
        })
    }

    return (
        <Animated.View style={animatedViewStyles}>
            <Form style={{ marginRight: 16}}>
                <Item>
                    <FontAwesome5 active name={'search'} />
                    <Input autoFocus={showSearch} placeholder="Pesquisar" />
                    <FontAwesome5 onPress={handleHideTransition} name={'times'} />
                </Item>
            </Form>
        </Animated.View>
    );
}

export default library;