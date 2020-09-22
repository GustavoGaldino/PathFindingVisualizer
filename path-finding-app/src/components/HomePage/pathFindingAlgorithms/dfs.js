import sleep from './auxiliary/sleep';

import PathFindingAlgorithm from './PathFindingAlgorithm'

class dfs extends PathFindingAlgorithm{
    constructor(timeStepDelay){
        super(timeStepDelay);
    }

    async run(currentNode, goalNode, visitedSet=(new Set()), flagObject={endRecursionFlag: false}){
        if(currentNode === goalNode){
            flagObject.endRecursionFlag = true;
        }
        else{
            let currentNodeNeighbours = currentNode.getNeighbours();
            for(let neighbour of currentNodeNeighbours){
                if(!visitedSet.has(neighbour)){
                    visitedSet.add(neighbour);
                    neighbour.markAsVisited();
                    await sleep(10);
                    await this.run(neighbour, goalNode, visitedSet, flagObject);
                    if(flagObject.endRecursionFlag){
                        return
                    }
                }
            }
        }
    }
}

export default dfs