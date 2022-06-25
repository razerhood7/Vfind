import React from 'react';
import './InputOption.css';
import Feed from './Feed';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

function InputOption({Icon, title, color}) {
    return (
        <div className='inputOption'>
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption
