import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Asker from './Asker/Asker';


class App extends Component {
    render() {
        return (
            <div id='app'>
                <Router>
                    <Routes>
                        <Route path='/' element={<Asker/>}>
                            
                        </Route>
                        
                    </Routes>
                </Router>
                
            </div>
        );
    }
}

export default App;