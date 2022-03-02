// @flow
import * as React from 'react';
import { View,Text } from 'react-native';
import 'localstorage-polyfill';
import TopTabs from './topbar';
import { Login } from '../pages/browse/login';

const Protected = () => {
    let hastoken = JSON.parse(localStorage.getItem('auth'));
    console.log(hastoken);
    return (
        hastoken !== null ? (
        <TopTabs />
        ) : (
            <Login/>
                )
        
        //  hastoken !== null ? (
        //         <Rendercomponent {...props} />
        //     ) : (
        //         navigation.navigate("Login")
        //     )
    )
}

export default Protected;