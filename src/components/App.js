import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppShell from './AppShell';
import Home from './Home';
import Text from './Texts';
import Words from './Words';

class App extends Component {
    render() {
        return (
            <Router>
                <AppShell >
                    <div>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/Texts' element={<Text />} />
                            <Route exact path='/Words' element={<Words />} />
                        </Routes>
                    </div>
                </AppShell>
            </Router>
        );
    }
}
export default App;