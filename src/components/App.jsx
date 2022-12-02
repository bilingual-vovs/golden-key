import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Edit from './Edit/Edit';
import Finished from './Train/States/Finished';
import Train from './Train/Train.jsx';


class App extends Component {
    render() {
        return (
            <div id='app'>

                <Router>
                    <Routes>
                        <Route exact path='/trainTest' element={<Train/>}></Route>
                        <Route exact path='/editTest' element={<Edit/>}></Route>
                        <Route exact path='/finishTest' element={<Finished answears={[{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "2342s"},{key: "key1", value: "Value1", ans: "value1"},{key: "key1", value: "Value1", ans: "value1"},{key: "key1", value: "Value1", ans: "value1"},{key: "key1", value: "Value1", ans: "Value1"},{key: "key1", value: "Value1", ans: "value1"},{key: "key1", value: "Value1", ans: "value1"},]}/>}></Route>
                    </Routes>
                </Router>

                
                
            </div>
        );
    }
}

export default App;