import React, { Component } from 'react';
import "./Train.css"
import Loader from '../Loader/Loader';
import Asking from './States/Asking';
import Correct from './States/Correct';
import Incorrect from './States/Incorrect';
import Finished from './States/Finished';

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
        while (currentIndex !== 0) {
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
        document.addEventListener("keypress", ({key}) => {
            if (key === "Enter") this.next()
        })
    }

    submit = (evt) => {
        evt.preventDefault()
        const {current} = this.state

        this.answears.push({...this.state.current, ans: evt.target[0].value})

        if (current.value.toLowerCase() === evt.target[0].value.toLowerCase()){
            this.setState({state: "correct"})
            setTimeout(this.next, 500)
        }
        else {
            this.setState(({current}) => {
                return {current: {...current, ans: evt.target[0].value}}
            })
            this.setState({state: "incorrect"})
        }
    }

    next = (evt) => {
        if (evt) evt.preventDefault()

        if (this.state.state !== "incorrect" && this.state.state !== "correct") return

        if (this.dict.length !== 0){
            this.setState({state: "asking", current: this.dict.pop()})
        }
        else{
            this.setState({state: "finished"})
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", ({key}) => {
            if (key === "Enter") this.next()
        })
    }

    render() {
        const {state, current} = this.state
        const Train = () => {
            switch (state) {
                case "asking":
                return (
                    <Asking submit={this.submit} current={current}/>  
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
                        <Correct next={this.next} current={current}/>
                    )

                case "incorrect":
                    return (
                        <Incorrect current={current} next={this.next}/>
                    )
            
                case "finished":
                    return (
                        <Finished answears={this.answears}/>
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
