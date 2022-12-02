import React from 'react';

const Correct = ({current, next}) => {
    return (
        <div id="train-box">
            <div className='key-container'>
                <h1 style={{color: "greenyellow"}} className='key'>{"Correct!!!"}</h1>
            </div>
            <form onSubmit={next}>
                <input style={{color: "green"}} defaultValue={current.value} className='word-in' type="text" placeholder='Word...' />
                <br/>
                <button className='submit-btn'>Ok</button>
            </form>
        </div> 
    );
}

export default Correct;
