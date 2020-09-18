import React from 'react'

import Grid from './Grid'
import GridHeader from './GridHeader'

const GridContainer = () => {
    return(
        <div className="grid-container">
            <GridHeader />
            <Grid
                rows={20}
                cols={20}
                cellSize={"20px"}
            />
        </div>
    )
}

export default GridContainer