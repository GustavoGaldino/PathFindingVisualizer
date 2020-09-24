import React from 'react'

import helpIcon from '../../../../../assets/images/help.png'

import './styles.css'

const CellInfo = (props) => {
    return(
        <div className="cell-info">
            <div className="cell-representation" style={{backgroundColor: props.cellColor}}/>
            <div className="cell-info-text-container">
                <div>
                    <h1 style={{fontSize: "1.2rem"}}>{props.cellInfoTitle}</h1>
                    <p style={{fontSize: "1.05rem"}}>{props.cellInfoParagraph}</p>
                </div>
                {props.help ?
                    <button className="help-btn">
                        <img src={helpIcon} />
                    </button>
                    :
                    (() => {})
                }
            </div>
        </div>    
    );
}

export default CellInfo;