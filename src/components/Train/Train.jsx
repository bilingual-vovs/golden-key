import React, { Component } from 'react';
import "./Train.css"

class Train extends Component {
    render() {
        
        const Train = () => {
            switch (1) {
                case 1:
                return (
                    <div id="train-box">
                        <div className='key-container'>
                            <h1 className='key'>Key</h1>
                        </div>
                        <form onSubmit={(evt) => {evt.preventDefault()}}>
                            <input className='word-in' type="text" placeholder='Word...' />
                            <br/>
                            <button className='submit-btn'>Submit</button>
                        </form>
                    </div>  
                )

                case 2:
                return (
                    <div id="train-box">
                        <div className='key-container'>
                            <h1 className='key'>Key</h1>
                        </div>
                        <form onSubmit={(evt) => {evt.preventDefault()}}>
                            <input className='word-in' type="text" placeholder='Word...' />
                            <br/>
                            <button className='submit-btn'>Submit</button>
                        </form>
                    </div>  
                )
            
                default:
                    break;
            }
            
        } 

        return (
            <Train/>
        );
    }
}

export default Train;
