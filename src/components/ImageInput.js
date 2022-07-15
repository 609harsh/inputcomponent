import React from 'react'

class ImageInput extends React.Component{
    render(){
        const {startIcon=false,
        endIcon=true}=this.props;
        return(
            <div>
                <p>{"<Input "}{startIcon?"startIcon />":"endIcon />"}</p>
                <label >Ḷabel<br></br>
                    {
                        startIcon?
                        <React.Fragment>
                            <div className='image-div-input'> 
                            <span class="material-symbols-outlined">call</span>
                                <input placeholder='Placeholder' className='label-image'></input>
                            </div>
                        </React.Fragment>
                        :<React.Fragment>                        
                            <div className='image-div-input'>
                                <input placeholder='Placeholder' className='label-image'></input>
                                <span class="material-symbols-outlined">lock</span>
                            </div>
                        </React.Fragment>
                    }
                </label>
            </div>
        )
    }
}

export default ImageInput;