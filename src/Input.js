import React  from 'react';
import TopInput from './components/TopInput';
import TextInput from './components/TextInput';
import ImageInput from './components/ImageInput';
import NormalInput from './components/Normalnput';
import SizeInput from './components/SizeInput';
import BottomInput from './components/BottomInput.js';

class Input extends React.Component{
    render(){
        return(
            <div className='input'>
                <div className='input-input'>
                    <div className='input-heading'>
                        <h3>Inputs</h3>
                    </div>
                    <div className='input-content'>
                        <TopInput />
                        <TopInput error={true}/>
                        <TopInput disabled={true}/>
                        <div className='text-input'>
                            <TextInput />
                            <TextInput error={true}/>
                        </div>
                        <div className='image-input'> 
                            <ImageInput startIcon={true}/>
                            <ImageInput endIcon={true}/>
                        </div>
                        <NormalInput/>
                        <div className='size-input'>
                            <SizeInput size="sm"/>
                            <SizeInput size="md"/>
                        </div>
                        <div className='bottom-input'>
                            <BottomInput full={true}/>
                            <BottomInput full={false}/>
                        </div>
                        <p>created by <a>username</a>-devChallenges.io</p>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Input;