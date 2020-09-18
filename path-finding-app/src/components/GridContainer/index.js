import React from 'react'

import GridComponent from './GridComponent'
import GridHeader from './GridHeader'

const GridContainer = () => {

    const gridContainerStyle = {
        border: "solid 2px black"
    }

    return(
        <div className="grid-container" style={gridContainerStyle}>
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