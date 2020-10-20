import React from 'react';
import { ViewItem, Item, TextError, FA5, TextInput } from './Styles';

const MyFormItem = (
    { item, errors, touched, handleChange, handleBlur, values, ...rest } : 
    { item: any, errors: Array<string>, touched: any, handleChange: any, handleBlur: any, values: Array<any> 
} ) => {
  return (
    <ViewItem>
        <Item error={errors[item.field] && touched[item.field]}>
            <FA5 name={item.icon} solid/>
            <TextInput 
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