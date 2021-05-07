import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UpdateCollection from './components/updateCollection.jsx';
import CollectionDetail from './components/collectionDetail.jsx';
import Collections from './components/collections.jsx';
import './styles/main.scss';

const App = (() => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Collections} />
                    <Route exact path="/collections" component={CollectionDetail} />
                    <Route exact path="/collections/:id/update" component={UpdateCollection} />
                </Switch>
            </Router>
        </div>
    );
})

export default App;
