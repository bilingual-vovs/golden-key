import React, { Component } from 'react';
import "./Asker.css"

class Asker extends Component {

    state = {
        current: [],
        finished: false,
        state: "unset"
    }

    anses = []

    dict = [["Hello", "Привет"], ["Bye", "Пока"], ["Bye", "Пока"], ["Bye", "Пока"], ["Bye", "Пока"] ,["Bye", "Пока"] ,["Bye", "Пока"],["Bye", "Пока"],["Bye", "Пока"]]

    componentDidMount = () => {
        this.dict = this.shuffle(this.dict)
        this.next()
    }

    shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    next = (evt) => {
        clearTimeout(this.a)
        if ( evt ) evt.preventDefault()
        if (this.dict.length > 0){
            this.setState({
                current: this.dict.splice(0,1)[0],
                state: "unset"
            })
        }
        else{
            this.setState({
                state: "finished"
            })
        }
        
    }

    a = 0 

    submit = (evt) => {
        
        evt.preventDefault()
        let ans = evt.nativeEvent.target.translation.value
        this.anses.push({
            word: this.state.current[0].toLowerCase(),
            ans: ans.toLowerCase(),
            correct: this.state.current[1].toLowerCase()
        })
        switch (ans.toLowerCase()) {
            case this.state.current[1].toLowerCase():
                setTimeout(()=>{
                    this.next()
                },1000)
                this.setState({
                    state: "correct"
                    
                })
                break;
        
            default:
                this.a = setTimeout(() => {
                   this.next() 
                }, 5000);
                this.setState({
                    state: "incorrect"
                })
                break;
        }
    }

    correct = () => {
        return (
            <div className='container'>
                <h1 className='correct'>Correct!!!</h1>
            </div>
        )
    }

    incorrect = () => {
        let {anses, state: {current}} = this
        let ans = anses[anses.length-1]
        return (<div className='container'>
            <h1 className='current'>{current[0]}</h1>
                <form onSubmit={this.next} className="form" action="">
                    <p className='needed'>{ans.correct}</p>
                    <p className='ans'>{ans.ans}</p>
                    <br/>
                    <button id='submit'>{"-->"}</button>
                </form>
        </div>)
    }

    box = () => {
        let {current} = this.state
        return (
            <div id='ask'>
                <h1 className='current'>{current[0]}</h1>
                <form className='form' onSubmit={this.submit} action="">
                    <input  name='translation' placeholder='Translation'></input>
                    <br/>
                    <button >Submit</button>
                </form>
                
            </div>
            
        )
    }
    finished = () => {
        return (<div className='container'>
            <h1 className='correct'>You've done</h1>
            <ul className='list'>
                {
                    this.anses.map(({ans, correct, word}, i) => {
                        
                        return (
                            <li key={i} className='list-itm'>
                                <span className='text'>{word} : </span>
                                <span className={correct === ans ? "correct": "incorrect"}>{ans}</span>
                                {correct === ans ? "" : <span className='text'> {"-->"} {correct}</span>}
                                {this.anses.length > i+1 ? <hr/> : ""}
                            </li>
                        )
                    })
                }
            </ul>
        </div>)
    }

    render() {
        const {state: {state}, box, correct, incorrect, finished} = this

        let inner

        switch (state) {
            case "unset":
                inner =  box()
                break;
        
            case "correct":
                inner =  correct()
            break
            case "incorrect":
                inner =  incorrect()
            break
            case "finished":
                inner =  finished()
            break
            default:
                inner = <span>Some Error</span>
                break;
        }
        
        return (
            <div id="asker">
               {inner}
            </div>
        );
    }
}

export default Asker;
