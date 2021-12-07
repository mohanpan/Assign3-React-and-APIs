import React, {useState} from 'react';

const AccessoriesOrderContext = React.createContext({
    Accessories: [],
    order: [],
    initializeAccessories: () => {},
    addAccessoryToOrder: () => {},
    removeAccessoryFromOrder: () => {},
});

export const AccessoriesOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);
    const [Accessories, setAccessories] = useState([]);

    const initializeAccessories = (AccessoriesFromApi) => {
        setAccessories(AccessoriesFromApi);
    }

    const addAccessoryToOrder = (Accessory) => {
        let newOrder = order; 
        newOrder.push (Accessory);
        setOrder(order);
    }

    const removeAccessoryFromOrder = (AccessoryId) => {
        let prevOrder = order;
        const found = order.findIndex( ( Accessory ) => {
            return (Accessory.id === AccessoryId); 
        })
        if (found !== -1) {
            prevOrder.splice(found, 1); // delete one
            setOrder([...prevOrder]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<AccessoriesOrderContext.Provider
     value={{order: order, addAccessoryToOrder: addAccessoryToOrder, removeAccessoryFromOrder: removeAccessoryFromOrder, Accessories: Accessories, initializeAccessories: initializeAccessories }}
    >
        {props.children}
    </AccessoriesOrderContext.Provider>)
}

export default AccessoriesOrderContext;