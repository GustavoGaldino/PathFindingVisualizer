import React, { useState, useEffect } from 'react'

import GridComponent from './GridComponent'
import GridHeader from './GridHeader'

import Grid from './classes/Grid'

const GridContainer = (props) => {

    const [grid, setGrid] = useState([])
    const [startingNode, setStartingNode] = useState();
    const [goalNode, setGoalNode] = useState()

    const updateVisitedCell = (cell,grid) => {
        let newGridState = {...grid};
        newGridState.gridTable[cell.x][cell.y].visited = true;
        setGrid(newGridState);
    }

    const updateStartingNode = (x,y, grid=grid) => {
        setStartingNode(grid.getCell(x,y));
        let newGridState = {...grid};
        newGridState.gridTable[x][y].startingNode = true;
        setGrid(newGridState);
    }

    const updateGoalNode = (x,y, grid=grid) => {
        setGoalNode(grid.getCell(x,y));
        let newGridState = {...grid};
        newGridState.gridTable[x][y].goalNode = true;
        setGrid(newGridState);
    }

    const setInitialState = () => {
        let initialGridState = new Grid(props.rows, props.cols, updateVisitedCell);
        setGrid(initialGridState);
        updateStartingNode(6,6,initialGridState);
        updateGoalNode(props.rows-1,props.cols-1,initialGridState);
    }

    useEffect(() => {
        setInitialState();
    }, []);

    const gridContainerStyle = {
        border: "solid 2px black"
    }

    return(
        <div className="grid-container" style={gridContainerStyle}>
            <GridHeader
                pathFindingAlgorithm={() => props.pathFindingAlgorithm(startingNode, goalNode)}
                grid={grid}
                startingNode={props.startingNode}
                goalNode={props.goalNode}
                setInitialState={setInitialState}
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