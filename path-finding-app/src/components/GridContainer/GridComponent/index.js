import React, { useState, useEffect } from 'react'

import GridRow from './GridRow'

const GridComponent = (props) => {    
    const [grid, setGrid] = useState([])

    useEffect( () => {
        let grid = new Array(props.rows);
        for(let i = 0 ; i < props.rows ; i++){
            grid[i] = new Array(props.cols)
            for(let j = 0 ; j < props.cols ; j++){
                let cellKey = i*props.cols + j;
                grid[i][j] = {available: true, key: cellKey}
            }
        }
        setGrid(grid)
    }, []);

    return(
        <div className="grid">
            {grid && grid.map((row,index) => (
                <GridRow
                    row={row}
                    key={index}
                    cellSize={props.cellSize}
                />
            ))}
        </div>
    );
}

export default GridComponent;