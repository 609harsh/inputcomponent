import React from 'react'

class SideBar extends React.Component{
    render(){
        return(
            <div className='sidebar'>
                <div className='sidebar-heading'>
                    <h3><span className='dev'>Dev</span>Challenges.io</h3>
                </div>
                <div className="sidebar-list">
                    <ul>
                        <li>Colors</li>
                        <li>Typography</li>
                        <li>Buttons</li>
                        <li>Spaces</li>
                        <li>Inputs</li>
                        <li>Grid</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;