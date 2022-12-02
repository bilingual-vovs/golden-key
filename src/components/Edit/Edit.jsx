import React, { Component } from 'react';
import "./Edit.css"

class Edit extends Component {

    module = {
        name: "Menshen A.1 | Lection 5",
        cards: [
            {key: "card1", value: "Word1"},
            {key: "card3", value: "Word3"},
            {key: "card2", value: "Word2"},
        ]
    }

    render() {
        const {name, cards} = this.module
        return (
            <div className='module-container'>
                <h1 className='module-name'>{name}</h1>
                <ul className='cards-list'>
                    {
                        cards.map((el, i) => {
                            return (
                                <li key={i} className='list-itm'><input className='itm-text' defaultValue={el.key}/><p className='itm-parting'>:</p><input className='itm-text' defaultValue={el.value}/></li>
                            )
                        })
                    }
                </ul>
                
            </div>
        );
    }
}

export default Edit;
