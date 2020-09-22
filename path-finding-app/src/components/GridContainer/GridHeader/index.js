import React, { useState } from 'react'

import helpIcon from '../../../assets/images/help.png'
import startIcon from '../../../assets/images/start.png'
import refreshIcon from '../../../assets/images/refresh.png'
import gridIcon from '../../../assets/images/boilerplate.png'

import './styles.css'

const GridHeader = (props) => {

    const [runningAlgorithm, setRunningAlgorithm] = useState(false);

    return(
        <div className="grid-header">
            <button className="icon-btn" title="Start Algorithm" onClick={async () => {
                if(!runningAlgorithm){
                    setRunningAlgorithm(true);
                    props.cleanAllVisitedCells();
                    await props.pathFindingAlgorithm();
                    setRunningAlgorithm(false);
                }
            }}>
                <img src={startIcon} className="icon"/>
            </button>
            <button className="icon-btn" title="Restart Grid" onClick={() => {
                if(!runningAlgorithm){
                    props.setInitialState()
                }   
            }}>
                <img src={refreshIcon} className="icon"/>
            </button>
            <h1>{props.algorithmTitle}</h1>
            <button className="icon-btn" title="Help">
                <img src={helpIcon} className="icon"/>
            </button>
            <button className="icon-btn" title="Boilerplates">
                <img src={gridIcon} className="icon"/>
            </button>
        </div>
    )
}

export default GridHeader