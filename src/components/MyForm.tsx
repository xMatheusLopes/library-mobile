import React from 'react';

// Native Base
import {    
    Button as NBButton, 
    Text as NBText
} from 'native-base';

import { ActivityIndicator, ViewAccessButton, Form } from './Styles';
import { Theme } from '../../Theme';
import { Formik } from 'formik';
import MyFormItem from './MyFormItem';

const MyForm = ({ schema, submit, isSubmitting, items }: { schema: any, submit: any, isSubmitting: boolean, items: any }) => {
    const AccessButton = ({ handleSubmit, errors } : { handleSubmit: any, errors: any }) => {
        const hasError = Object.keys(errors).length !== 0;

        return (
            <NBButton dark disabled={isSubmitting || hasError} onPress={handleSubmit} block>
                <NBText>ACESSAR</NBText>
                <ActivityIndicator size="large" color={Theme.Accent} animating={isSubmitting} />
            </NBButton>
        )
    }

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => submit(values)}
            validationSchema={schema}>
            {(props) => (
                <Form>
                    {items.map((item: any) => (
                        <MyFormItem 
                            key={item.key} 
                            item={item} 
                            errors={props.errors} 
                            touched={props.touched} 
                            handleChange={props.handleChange} 
                            handleBlur={props.handleBlur} 
                            values={props.values} {...item.options} />
                    ))}
                    <ViewAccessButton>
                        <AccessButton handleSubmit={props.handleSubmit} errors={props.errors}></AccessButton>
                    </ViewAccessButton>
                </Form>
            )}
        </Formik>
  );
}

export default MyForm;