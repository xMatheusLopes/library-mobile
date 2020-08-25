import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';

import { 
    Form, 
    Input 
} from 'native-base';

import {  
    Item
} from './Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const library = ({clicked, setShowSearch, showSearch, setClicked}) => {
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

    return (
        <Animated.View 
            style={{ 
                height: translateYValue.interpolate({
                    inputRange: [-100, -80, -60, -40, -20, -10, 1],
                    outputRange: [0, 10, 20, 30, 40, 50, 65],
                }),
                transform: [ { translateY: translateYValue } ], 
                opacity: translateYValue.interpolate({
                    inputRange: [-100, -50, 1],
                    outputRange: [0, 0.5, 1]
                })
            }}>
            <Form style={{ marginRight: 16}}>
                <Item>
                    <FontAwesome5 active name={'search'} />
                    <Input autoFocus={showSearch} placeholder="Pesquisar" />
                    <FontAwesome5 onPress={() => {
                        hideTransitionAnim();
                        setClicked(null);
                        setTimeout(() => {
                            setShowSearch(false);
                        }, 1000);
                    }} name={'times'} />
                </Item>
            </Form>
        </Animated.View>
    );
}

export default library;