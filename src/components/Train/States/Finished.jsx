import React from 'react';

const Finished = ({answears}) => {
    
    const ListItem = ({k, ans, val}) => {
      return (
        <li className='ans-list-itm'>
            <p className='ans-list-txt'>{k}: </p>
            <p style={{color: (ans.toLowerCase() === val.toLowerCase() ? "green" : "tomato")}} className='ans-list-txt'>{ans}</p>
            {
            ans.toLowerCase() === val.toLowerCase() ? "": 
                <React.Fragment>
                    <p className='ans-list-txt'>{"-->"}</p><p style={{color: "green"}} className='ans-list-txt'> {val}</p>
                </React.Fragment>
            }
        </li>
      )
    }
    

    return (
        <div id="train-box">
            <div style={{marginTop: "-3%"}} className='key-container'>
                <h1 className='key'>{"Congratulations"}</h1>
            </div>
            <ul className='ans-list'>
                {answears.map((el, i) => {
                    return <ListItem key={`key-${el.key}-${i}`} k={el.key} val={el.value} ans={el.ans}/>
                })}
            </ul>
        </div> 
    );
}

export default Finished;
