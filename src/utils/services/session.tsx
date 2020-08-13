import AsyncStorage from '@react-native-community/async-storage';

import User from '../../user/user.model';
import { api } from './api';
import moment from 'moment';

import navigation from './navigation';

export const setSession = (data: User) => {
    const item = data;
    item['sessionDate'] = new Date();

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
        navigation.navigate('Login', {})
        return true;
    } catch(error) {
        return false;
    }
}

export const checkSession = async () => {
    const session = await getSession();
    if (session) {
        const now = moment(new Date());
        return now.diff(session['sessionDate'], 'minutes') < 110;
    }

    return false;
}

export const renewSession = async () => {
    try {
        const session = await getSession();
        const response = await api.get(`renew-session/${session.accessKey}`);
        setSession(response.data)
    } catch(e) {
        navigation.navigate('Login', {})
    }
}
