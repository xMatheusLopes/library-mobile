import AsyncStorage from '@react-native-community/async-storage';

import User from '../../user/user.model';
import moment from 'moment';

import { useNavigation } from '@react-navigation/native';

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
        let response: any = await fetch(`http://192.168.100.208:5000/renew-session/${session.accessKey}`);
        // console.warn(typeof(response), response);
        response = await response.json();
        // console.warn(response);
        setSession(response)
        return true;
    } catch(e) {
        console.log(e);
        return false;
    }
}
