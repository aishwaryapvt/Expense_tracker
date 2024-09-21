import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialstate = {
    transactions: [
        { id: 1, text: 'Lotion', amount: -20 },
        { id: 2, text: 'Data entry', amount: 300 },
        { id: 3, text: 'Chips', amount: -10 },
        { id: 4, text: 'Coding', amount: 150 }
    ]
}

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}