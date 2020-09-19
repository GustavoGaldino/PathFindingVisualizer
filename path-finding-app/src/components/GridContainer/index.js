import React, { useState, useEffect } from 'react'

import GridComponent from './GridComponent'
import GridHeader from './GridHeader'

import Grid from './classes/Grid'

const GridContainer = (props) => {

    const [grid, setGrid] = useState([])

    useEffect(() => {
        let gridState = new Grid(props.rows, props.cols);
        setGrid(gridState);
    }, []);

    const gridContainerStyle = {
        border: "solid 2px black"
    }

    return(
        <div className="grid-container" style={gridContainerStyle}>
            <GridHeader
                pathFindingAlgorithm={() => props.pathFindingAlgorithm()}
                grid={grid}
                startingNode={props.startingNode}
                goalNode={props.goalNode}
            />
            <GridComponent
                rows={props.rows}
                cols={props.cols}
                cellSize={props.cellSize}
                grid={grid}
                startingNode={props.startingNode}
                goalNode={props.goalNode}
            />
        </div>
    )
}

export default GridContainer