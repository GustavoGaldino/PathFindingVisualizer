import React from 'react'

import GridContainer from '../GridContainer'

import bfs from './pathFindingAlgorithms/bfs'
import dfs from './pathFindingAlgorithms/dfs'

import './styles.css'

export default function HomePage(){
    return(
        <div id="homepage">
            <GridContainer
                pathFindingAlgorithm={bfs}
                algorithmTitle={"BFS"}
                rows={20}
                cols={20}
                cellSize={"22.5px"}
            />
            <GridContainer
                pathFindingAlgorithm={dfs}
                algorithmTitle={"DFS"}
                rows={20}
                cols={20}
                cellSize={"22.5px"}
            />
        </div>
    );
}