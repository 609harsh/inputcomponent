import React from 'react'

class NormalInput extends React.Component{
    render(){
        return(
            <div className='normal-input'>
                <p>{`<Input value="text"/>`}</p>
                <label>Label<br></br>
                    <input placeholder='Placeholder'></input>
                </label>
            </div>
        )
    }
}

export default NormalInput;