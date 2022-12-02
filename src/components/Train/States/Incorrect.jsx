import React from 'react';

const Incorrect = ({current, next}) => {
    return (
        <div id="train-box">
            <div className='key-container'>
                <h1 style={{color: "tomato"}} className='key'>{"Incorrect!!"}</h1>
            </div>
            <div className='correction-box'>
                <span className='correction'>{current.value}</span>
            </div>
            <form onSubmit={next}>
                <input style={{color: "tomato", textDecoration: "line-through", letterSpacing: "0.1em"}} defaultValue={current.ans ?? "We've lost your ans"} className='word-in' type="text" placeholder='Word...' />
                <br/>
                <button className='submit-btn'>Next</button>
            </form>
        </div> 
    );
}

export default Incorrect;
