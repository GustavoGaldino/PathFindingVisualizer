import React from 'react'

import './styles.css'

const CellInfo = (props) => {

    return(
        <div className="cell-info">
            <div className="cell-representation" style={{backgroundColor: props.cellColor}}/>
            <div className="cell-info-text">
                <h1 style={{fontSize: "1.2rem"}}>{props.cellInfoTitle}</h1>
                <p style={{fontSize: "1.05rem"}}>{props.cellInfoParagraph}</p>
            </div>
        </div>        
    );
}

export default CellInfo;