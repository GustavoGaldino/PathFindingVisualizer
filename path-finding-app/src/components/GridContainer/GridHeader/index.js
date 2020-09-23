import React, { useState } from 'react'

import helpIcon from '../../../assets/images/help.png'
import startIcon from '../../../assets/images/start.png'
import refreshIcon from '../../../assets/images/refresh.png'
import gridIcon from '../../../assets/images/boilerplate.png'

import './styles.css'

const GridHeader = (props) => {

    const [runningAlgorithm, setRunningAlgorithm] = useState(false);

    const timeStepDelay = 10;
    let pathFindingAlgorithm = new props.pathFindingAlgorithm(timeStepDelay);

    return(
        <div className="grid-header">
            <button className="icon-btn" title="Start Algorithm" onClick={async () => {
                if(!runningAlgorithm){
                    setRunningAlgorithm(true);
                    props.cleanAllVisitedCells();
                    await pathFindingAlgorithm.run(props.startingNode, props.goalNode);
                    setRunningAlgorithm(false);
                }
            }}>
                <img src={startIcon} alt="start-algorithm-icon" className="icon"/>
            </button>
            <button className="icon-btn" title="Restart Grid" onClick={() => {
                if(!runningAlgorithm){
                    props.setInitialState()
                }   
            }}>
                <img src={refreshIcon} alt="refresh-icon" className="icon"/>
            </button>
            <h1>{props.algorithmTitle}</h1>
            <button className="icon-btn" title="Help">
                <img src={helpIcon} alt="help-icon" className="icon"/>
            </button>
            <button className="icon-btn" title="Boilerplates">
                <img src={gridIcon} alt="grid-icon" className="icon"/>
            </button>
        </div>
    )
}

export default GridHeader