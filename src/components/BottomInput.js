import React from 'react'

class BottomInput extends React.Component{
    render(){
        const {full=false}=this.props;
        return(
            <div>
                <p>{`<Input ${full?"fullWidth />":`multiline row="4" />`}`}</p>
                <label>Label<br></br>
                    {full?<input placeholder='Placeholder'></input>:<textarea rows='10' cols='20' placeholder='Placeholder'></textarea>}
                </label>
            </div>
        )
    }
}

export default BottomInput;