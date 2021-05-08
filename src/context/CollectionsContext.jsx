import React, { useState, createContext } from "react";

export const CollectionsContext = createContext();

export const CollectionsContextProvider = props => {
    const [collections, setCollections] = useState([]);

    const addCollections = (collection) => {
        setCollections([...collections, collection]);
    }
    return (
        <CollectionsContext.Provider value={{collections, setCollections, addCollections}}>
            {props.children}
        </CollectionsContext.Provider>
    )
}