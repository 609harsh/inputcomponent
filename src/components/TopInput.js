import React from 'react'

class TopInput extends React.Component{
    render(){
        const {
            error=false
            ,disabled=false}=this.props;
        console.log(disabled,error);
        return(
            <div className='top-input'>
                {disabled===true?<p>{"<Input disabled />"}</p>
                        :(error===true?
                        <p>{"<Input error/>"}</p>
                        :<p>{"<Input />"}</p>)}
                <label className={`label-top-${disabled?"disable":(error?"error":"")}`}>Label<br></br>
                {disabled?
                            <input placeholder='Placeholder' disabled className='input-top-disable'></input>
                        :(error?
                        <input placeholder='Placeholder' className='input-top-error' ></input>
                        :<input placeholder='Placeholder'className='input-top' ></input>)   }
                </label>
            </div>
        )
    }
}

export default TopInput;