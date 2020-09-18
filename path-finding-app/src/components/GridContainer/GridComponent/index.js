import React, { useState, useEffect } from 'react'

import GridRow from './GridRow'
import Grid from './classes/Grid';

const GridComponent = (props) => {    
    const [grid, setGrid] = useState([])

    useEffect( () => {
        let grid = new Grid(props.rows, props.cols);
        setGrid(grid);
    }, []);

    return(
        <div className="grid">
            {grid.gridTable && grid.gridTable.map((row,index) => (
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