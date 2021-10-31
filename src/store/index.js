import React from 'react';

export const defaultStore = {
    authModal: {
        register: false,
        login: false,
        forgot: false
    },
    noti: {
        status: '',
        text: '',
        active: false
    },
    login: {
        mail: '',
    }
};



export const StateContext = React.createContext();
export const DispatchContext = React.createContext();