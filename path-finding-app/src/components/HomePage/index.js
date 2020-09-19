import React from 'react'

import GridContainer from '../GridContainer'

import bfs from './pathFindingAlgorithms/bfs'

import './styles.css'

export default function HomePage(){
    return(
        <div id="homepage">
            <GridContainer
                pathFindingAlgorithm={bfs}
                algorithmTitle={"BFS"}
                rows={25}
                cols={25}
                cellSize={"20px"}
            />
        </div>
    );
}