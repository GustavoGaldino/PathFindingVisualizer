import React from 'react'

import GridContainer from '../GridContainer'
import AppBar from '../AppBar'

import bfs from './pathFindingAlgorithms/bfs'
import dfs from './pathFindingAlgorithms/dfs'
import AStar from './pathFindingAlgorithms/AStar'

import './styles.css'

export default function HomePage(){
    return(
        <div id="homepage">
            <AppBar />
            <GridContainer
                pathFindingAlgorithm={bfs}
                algorithmTitle={"BFS"}
                rows={22}
                cols={22}
                cellSize={"22px"}
            />
            <GridContainer
                pathFindingAlgorithm={dfs}
                algorithmTitle={"DFS"}
                rows={22}
                cols={22}
                cellSize={"22px"}
            />
            <GridContainer
                pathFindingAlgorithm={AStar}
                algorithmTitle={"A*"}
                rows={22}
                cols={22}
                cellSize={"22px"}
            />
        </div>
    );
}