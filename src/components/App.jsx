import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Train from './Train/Train.jsx';


class App extends Component {
    render() {
        return (
            <div id='app'>
                <div className='container'>
                    <Router>
                        <Routes>
                            <Route exact path='/trainTest' element={<Train/>}></Route>
                            
                        </Routes>
                    </Router>
                </div>
                
                
            </div>
        );
    }
}

export default App;