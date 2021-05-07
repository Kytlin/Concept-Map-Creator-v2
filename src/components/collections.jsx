import React, { useEffect } from 'react';
import FetchCollections from '../api/FetchCollections';

const collections = () => {
    useEffect(async () => {
        try {
            const response = await FetchCollections.get("/");
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (<>
        <div className="grid">
            <div className="title">Concept Map Collections</div>
            <div className="card">
                <div className="subtitle">Title #1</div>
                <hr></hr>
                <div className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam odio nulla, sollicitudin sit amet enim fringilla, 
                fringilla imperdiet augue. Aliquam feugiat in augue id sodales. 
                Praesent nec est vitae mi sollic.</div>
            </div>
            <div className="card">
                <div className="subtitle">Title #2</div>
                <hr></hr>
                <div className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam odio nulla, sollicitudin sit amet enim fringilla, 
                fringilla imperdiet augue. Aliquam feugiat in augue id sodales. 
                Praesent nec est vitae mi sollicitudin porttitor eget nec metus. 
                Suspendisse aliquet dui odio, et elementum metus placerat eu. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Nam nec lorem sed libero luctus ullamcorper. Suspendisse rhoncus 
                malesuada consequat.</div>
            </div>
            <div className="card">
                <div className="subtitle">Title #3</div>
                <hr></hr>
                <div className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam odio nulla, sollicitudin sit amet enim fringilla, 
                fringilla imperdiet augue. Aliquam feugiat in augue id sodales. 
                Praesent nec est vitae mi sollicitudin porttitor eget nec metus. 
                </div>
            </div>
        </div>
    </>)
}

export default collections
