import React, { Component } from 'react'
import "./Train.css"

export default class Train extends Component {

    state = {
        state: ''
    }

    trainList = []
    resaultList = []

    getData = () => {
        return [
            {key: "bekl;kjhsfggdkmmm,l", value: "value"},
            {key: "key2", value: "value2"}
        ]
    }

    componentDidMount = () => {
        this.trainList = this.getData()
        this.setState({state: "training"})

        for (var i = this.trainList.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.trainList[i];
            this.trainList[i] = this.trainList[j];
            this.trainList[j] = temp;
        }
    }

  render() {
    let {trainList: [current]} = this
    let inner
    switch (this.state.state) {
        case "training":
            let size = {
                fontSize: `${Math.min((10/(current.key.length))*30+20, 80)*10}%`,
                top : `${(30 - Math.min((10/(current.key.length))*30+20, 80)*0.12)}%`
            }
            inner = (
                <React.Fragment>
                    <h1 style={size} className='key'>{current.key.charAt(0).toUpperCase() + current.key.slice(1)}</h1>
                    <form className='form' action="">
                        <input className='value' type="text" placeholder='Translation...'/>
                        <br/>
                        <button>Submit</button>
                    </form>
                    
                </React.Fragment>
            )
            break;
    
        default:
            break;
    }
    return (
      <div className='train-box'>   
        {inner}
      </div>
    )
  }
}
