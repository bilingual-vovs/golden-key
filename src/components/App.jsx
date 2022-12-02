import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Finished from './Train/States/Finished';
import Train from './Train/Train.jsx';


class App extends Component {
    render() {
        return (
            <div id='app'>
                <div className='container'>
                    <Router>
                        <Routes>
                            <Route exact path='/trainTest' element={<Train/>}></Route>
                            <Route exact path='/finishTest' element={<Finished answears={[{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "value1"},{key: "key1", value: "Value1", ans: "value1"},{key: "key1", value: "Value1", ans: "value1"},{key: "key1", value: "Value1", ans: "Value1"},{key: "key1", value: "Value1", ans: "value1"},{key: "key1", value: "Value1", ans: "value1"},]}/>}></Route>
                        </Routes>
                    </Router>
                </div>
                
                
            </div>
        );
    }
}

export default App;