import React from 'react'

import GridContainer from '../GridContainer'

import dfs from './pathFindingAlgorithms/dfs'

import './styles.css'

export default function Landing(){
    return(
        <div id="landing">
            <GridContainer pathFindingAlgorithm={dfs}/>
        </div>
    );
}