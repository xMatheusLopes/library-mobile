import AsyncStorage from '@react-native-community/async-storage';

import User from '../../user/user.model';
import { api } from './api';

export const setSession = (data: User) => {
    const item = data;

    try {
        AsyncStorage.setItem('session', JSON.stringify(item));
        return item;
    } catch (error) {
        return null;
    }
}

export const getSession = async () => {
    const session = await AsyncStorage.getItem('session');

    if (session !== null) {
        return JSON.parse(session);
    } else {
        return null;
    }
}

export const removeSession = async () => {
    try {
        await AsyncStorage.removeItem('session');
        return true;
    } catch(error) {
        return false;
    }
}
