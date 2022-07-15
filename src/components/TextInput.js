import React from 'react'

class TextInput extends React.Component{
    render(){
        const {error=false}=this.props;
        return(
            <div className='text-inputs'>
                <p>{`<Input helpertext="Some interesting text"`}{error?` error />`:` />`}</p>
                <label className={`label-text-${error?"error":"none"}`}>Label<br></br>
                    <input placeholder='Placeholder' ></input>
                    <p>Some Interesting text</p>
                </label>
            </div>
        )
    }
}

export default TextInput;