import React, { useState, createContext } from "react";

export const CollectionsContext = createContext();

export const CollectionsContextProvider = props => {
    const [collections, setCollections] = useState([])

    return (
        <CollectionsContext.Provider value={{collections, setCollections}}>
            {props.children}
        </CollectionsContext.Provider>
    )
}