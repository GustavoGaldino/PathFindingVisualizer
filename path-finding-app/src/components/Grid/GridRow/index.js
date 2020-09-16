import React from 'react'

import GridCell from './GridCell'

const GridRow = (props) => {
    return(
        <div>
            {props.row.map((cell) => (
                <GridCell
                    cell={cell}
                    key={cell.key}
                />
            ))}
        </div>
    );
}

export default GridRow