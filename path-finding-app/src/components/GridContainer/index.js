import React from 'react'

import GridComponent from './GridComponent'
import GridHeader from './GridHeader'

const GridContainer = () => {
    return(
        <div className="grid-container">
            <GridHeader />
            <GridComponent
                rows={20}
                cols={20}
                cellSize={"20px"}
            />
        </div>
    )
}

export default GridContainer