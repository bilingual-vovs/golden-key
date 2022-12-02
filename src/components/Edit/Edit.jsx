import React, { Component } from 'react';
import Loader from '../Loader/Loader';

import "./Edit.css"

import edit from "./edit.png"
import close from "./Close.svg"

class Edit extends Component {

    state = {
        moduleName: "",
        cards: [],
        nameState: false
    }

    module = {
        name: "Menshen A.1  |  Lection 5",
        cards: [
            {key: "card1", value: "Word1"},
            {key: "card3", value: "Word3"},
            {key: "card2", value: "Word2"},
        ]
    }

    componentDidMount(){
        this.setState({moduleName: this.module.name, cards: this.module.cards})
        document.addEventListener("click", (evt) => {
            if(evt.target.id !== "module-in"){
                this.setState({nameState: false})
            }
        })
    }

    componentWillUnmount () {
        document.addEventListener("click", (evt) => {
            if(evt.target.id !== "module-in"){
                this.nameSubmit()
            }
        })
    }

    add = () => {
        this.setState(({cards}) => {
            return {cards: [...cards, {key: "", value: ""}]}
        })
    }

    nameEdit = (evt) => {
        this.setState({nameState: true})
    }

    nameChange = (evt) => {
        this.setState({moduleName: evt.target.value})
    }

    nameSubmit = (evt) => {
        if (evt ?? false){
            evt.preventDefault()
            this.setState({moduleName: evt.target[0].value, nameState: false})
        }
        
    }

    delete = (i) => {
        this.setState(({cards}) => {
            return {cards: [...cards.slice(0, i), ...cards.slice(i+1, cards.length)]}
        })
    }

    changeKey = (id, {target}) => {
        this.setState(({cards}) =>{
            let cardsN = [...cards]
            cards[id].key = target.value
            return {cards: cardsN}
        })
    }

    changeVal = (id, {target}) => {
        this.setState(({cards}) =>{
            let cardsN = [...cards]
            cards[id].value = target.value
            return {cards: cardsN}
        })
    }

    render() {
        const {moduleName: name, cards, nameState} = this.state
        return (
            <div className='module-container'>
                {
                    nameState ?
                    <form  onSubmit={this.nameSubmit}><input id='module-in' className='module-name module-in' onChange={this.nameChange} defaultValue={name}/></form>
                    :
                    <h1 onDoubleClick={this.nameEdit} className='module-name'>{name}<img style={{width: '30px', paddingLeft: "10px"}} alt="edit" src={edit}/></h1>
                }
                
                <ul className='cards-list'>
                    {
                        cards !== undefined ?
                        cards.map((el, i) => {
                            return (
                                <li key={i} className='list-itm'>
                                    <input onChange={(evt) => this.changeKey(i, evt)}  placeholder="Word..." className='itm-text' value={this.state.cards[i].key}/>
                                    <p className='itm-parting'>:</p>
                                    <input onChange={(evt) => this.changeVal(i, evt)} placeholder='Translation...' className='itm-text' value={this.state.cards[i].value}/> 
                                    <img  onClick={() => {this.delete(i)}} className='close-btn' src={close} alt="close" />
                                </li>
                            )
                        })
                        :
                        <Loader/>
                    }
                    <button onClick={this.add} className='add-btn'>+</button>
                </ul>
                
            </div>
        );
    }
}

export default Edit;
