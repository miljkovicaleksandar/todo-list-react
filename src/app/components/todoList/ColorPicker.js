import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = (props) => {
    const {handleClick, displayColorPicker, popover, cover, chosenColor, handleChange,handleClose } = props
    return(
       
        <div className="color-picker-wrapper">      
                    <p> Color: <i className="fas fa-paint-brush color-picker" onClick={ handleClick}></i></p>
                    { displayColorPicker ? <div style={ popover }>
                    <div style={ cover } onClick={ handleClose }/>
                    <ChromePicker color={ chosenColor }onChange={handleChange} />
                     </div> : null }
        </div>
    )
}

export default ColorPicker;