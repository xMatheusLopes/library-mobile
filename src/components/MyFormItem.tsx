import React from 'react';
import { ViewItem, Item, TextError } from './Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'native-base';

const MyFormItem = ({ item, errors, touched, handleChange, handleBlur, values, ...rest }) => {
  return (
    <ViewItem>
        <Item error={errors[item.field] && touched[item.field]}>
            <FontAwesome5 active name={item.icon} solid/>
            <Input 
                autoCapitalize="none" 
                placeholder={item.placeholder} 
                onChangeText={handleChange(item.field)}
                onBlur={handleBlur(item.field)}
                value={values[item.field]}
                {...rest}
            />
        </Item>
        <TextError>{errors[item.field] && touched[item.field] && errors[item.field]}</TextError>
    </ViewItem>
    );
}

export default MyFormItem;