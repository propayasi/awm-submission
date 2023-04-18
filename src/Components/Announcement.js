import React from 'react'
import img1 from "../Assets/Vector.png"
import '../Styles/announ.css'
import img2 from "../Assets/dotty dots.png"

function Announcement() {
    
    return (
        <div className='ann_main_container'>

            <div className='dotty_dot'>
                <img src={img2} />  
                <img src={img2} /> 
                <img src={img2} /> 
                <img src={img2} /> 
            </div>

            <div className='textty_text'>
                    <p>Use this announcement bar to inform visitors of something important.</p>
            </div>

            <div className='dotty_dot'>
                <img src={img2} />  
                <img src={img2} /> 
                <img src={img2} /> 
                <img src={img2} /> 
            </div>
            
            
        </div>
        )       
}

export default Announcement