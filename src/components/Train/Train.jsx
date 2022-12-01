import React, { Component } from 'react';
import "./Train.css"
import Loader from '../Loader/Loader';

class Train extends Component {

    state = {
        state: "startup",
        current: null,
    }

    dict = [
        {key: "key1", value: "Value1"},
        {key: "key2", value: "Value2"}
    ]

    answears = []

    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    componentDidMount() {
        this.dict = this.shuffle(this.dict)
        this.setState({state: "asking", current: this.dict.pop()})
    }

    submit = (evt) => {
        evt.preventDefault()
        const {current} = this.state
        if (current.value.toLowerCase() === evt.target[0].value.toLowerCase()){
            this.setState({state: "correct"})
            setTimeout(this.next, 500)
        }
        else {
            this.setState(({current}) => {
                return {current: {...current, ans: evt.target[0].value}, state: "incorrect"}
            })
        }
    }

    next = () => {
        if (this.dict.length !== 0){
            this.setState({state: "asking", current: this.dict.pop()})
        }
        else{
            this.setState({state: "finished"})
        }
    }

    render() {
        const {state, current} = this.state
        const Train = () => {
            switch (state) {
                case "asking":
                return (
                    <div id="train-box">
                        <div className='key-container'>
                            <h1 className='key'>{current.key}</h1>
                        </div>
                        <form onSubmit={this.submit}>
                            <input className='word-in' type="text" placeholder='Word...' />
                            <br/>
                            <button className='submit-btn'>Submit</button>
                        </form>
                    </div>  
                )

                case "startup":
                return (
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center'
                    }} id="train-box">
                        <Loader/>
                    </div>  
                )

                case "correct":
                    return (
                        <div id="train-box">
                            <div className='key-container'>
                                <h1 style={{color: "greenyellow"}} className='key'>{"Correct!!!"}</h1>
                            </div>
                            <form onSubmit={this.next}>
                                <input style={{color: "green"}} defaultValue={current.value} className='word-in' type="text" placeholder='Word...' />
                                <br/>
                                <button className='submit-btn'>Ok</button>
                            </form>
                        </div> 
                    )

                case "incorrect":
                    return (
                        <div id="train-box">
                            <div className='key-container'>
                                <h1 style={{color: "tomato"}} className='key'>{"Incorrect!!"}</h1>
                            </div>
                            <div className='correction-box'>
                                <span className='correction'>{current.value}</span>
                            </div>
                            <form onSubmit={this.next}>
                                <input style={{color: "tomato", textDecoration: "line-through", letterSpacing: "0.1em"}} defaultValue={current.ans} className='word-in' type="text" placeholder='Word...' />
                                <br/>
                                <button className='submit-btn'>Next</button>
                            </form>
                        </div> 
                    )
            
                case "finished":
                    return (
                        <div id="train-box">
                            <div className='key-container'>
                                <h1 className='key'>{"Congratulations"}</h1>
                            </div>
                        </div> 
                    )       
                

                default:
                    return (
                        <div id="train-box">
                            <div className='key-container'>
                                <h1 className='key'>{"Incorrect state"}</h1>
                            </div>
                        </div> 
                    )
                    
            }
            
        } 

        return (
            <Train/>
        );
    }
}

export default Train;
