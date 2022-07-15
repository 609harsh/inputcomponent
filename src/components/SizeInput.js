import React from 'react'

class SizeInput extends React.Component{
    render(){
        const size=this.props.size;
        return(
            <div>
                <p>{`<Input size="`}{size}{`" />`}</p>
                <label>
                    <input placeholder='Placeholder' className={`size-${size}`}></input>
                </label>
            </div>
        )
    }
}

export default SizeInput;