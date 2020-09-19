import React from 'react'

import GridContainer from '../GridContainer'

import bfs from './pathFindingAlgorithms/bfs'

import './styles.css'

export default function Landing(){
    return(
        <div id="landing">
            <GridContainer
                pathFindingAlgorithm={bfs}
                rows={30}
                cols={30}
                cellSize={"20px"}
            />
        </div>
    );
}