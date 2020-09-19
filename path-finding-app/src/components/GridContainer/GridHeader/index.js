import React, { useState } from 'react'

import helpIcon from '../../../assets/images/help.png'
import startIcon from '../../../assets/images/start.png'
import refreshIcon from '../../../assets/images/refresh.png'

import './styles.css'

const GridHeader = (props) => {

    const [runningAlgorithm, setRunningAlgorithm] = useState(false);

    return(
        <div className="grid-header">
            <button className="icon-btn" onClick={async () => {
                setRunningAlgorithm(true);
                props.cleanAllVisitedCells();
                await props.pathFindingAlgorithm(props.startingNode, props.goalNode);
                setRunningAlgorithm(false);
            }}>
                <img src={startIcon} className="icon"/>
            </button>
            <button className="icon-btn" onClick={() => {
                if(!runningAlgorithm){
                    props.setInitialState()
                }   
            }}>
                <img src={refreshIcon} className="icon"/>
            </button>
            <button className="icon-btn">
                <img src={helpIcon} className="icon"/>
            </button>
        </div>
    )
}

export default GridHeader