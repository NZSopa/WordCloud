import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './AppShell';
import Home from './Home';
import Text from './Texts';
import Words from './Words';
import Detail from './Detail';

class App extends Component {
    render() {
        return (
            <Router>
                <AppShell >
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Texts' component={Text} />
                        <Route exact path='/Words' component={Words} />
                        <Route exact path='/Detail/:textID' component={Detail} />
                    </div>
                </AppShell>
            </Router>
        );
    }
}
export default App;