import React, { Component } from 'react';

class Asking extends Component {

    componentDidMount(){
        document.getElementById("word-in").focus()
    }

    render() {
        let {current, submit} = this.props
        return (
            <div id="train-box">
                <div className='key-container'>
                    <h1 className='key'>{current.key}</h1>
                </div>
                <form onSubmit={submit}>
                    <input id='word-in' className='word-in' type="text" placeholder='Word...' />
                    <br/>
                    <button className='submit-btn'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Asking;
