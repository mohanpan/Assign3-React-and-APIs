import React, {useState} from 'react';

const AccessoriesOrderContext = React.createContext({
    order: [],
    addAccessoryToOrder: () => {},
    removeAccessoryFromOrder: () => {},
});

export const AccessoriesOrderContextProvider = (props) => {
    
}