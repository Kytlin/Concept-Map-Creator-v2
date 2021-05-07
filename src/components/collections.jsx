import React, { useEffect, useContext } from 'react';
import FetchCollections from '../api/FetchCollections';
import { CollectionsContext } from '../context/CollectionsContext';

const collections = () => {
    const { collections, setCollections } = useContext(CollectionsContext);
    useEffect(async () => {
        try {
            const response = await FetchCollections.get("/");
            setCollections(response.data.data.collections);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (<>
        <div className="grid">
            <div className="title">Concept Map Collections</div> 
            {collections && collections.map((collection) => {
                return (
                    <div key={collection.id} className="card">
                        <div className="subtitle">{collection.title}</div>
                        <hr></hr>
                        <div className="summary">{collection.summary}</div>
                    </div>
                )
            })}
        </div>
    </>)
}

export default collections
