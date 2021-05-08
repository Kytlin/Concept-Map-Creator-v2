import React, { useState, useContext } from 'react';
import FetchCollections from '../api/FetchCollections';
import { CollectionsContext } from '../context/CollectionsContext';

const addCollection = () => {
    const {addCollections} = useContext(CollectionsContext);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [tag, setTag] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await FetchCollections.post("/", {
                title, 
                summary,
                tag
            });
            addCollections(response.data.data.collections);
            console.log(response);
        } catch (err) {

        }
    }

    return (
        <div>
            <div className="card">
                <div>Title: <p /> <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="add-title" placeholder="Title" /> </div>
                <div>Add a Description: <p /> <textarea value={summary} onChange={e => setSummary(e.target.value)} type="text" className="add-summary" /></div>
                <div>Tag: <p /> <input value={tag} onChange={e => setTag(e.target.value)} type="text" className="add-tag" /> </div>
                <button onClick={handleSubmit} type="submit" className="add-btn"> Add Collection </button>
            </div>
        </div>
    )
}

export default addCollection
