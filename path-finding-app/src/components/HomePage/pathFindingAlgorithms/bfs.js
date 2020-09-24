import sleep from './auxiliary/sleep';

import PathFindingAlgorithm from './PathFindingAlgorithm'

class bfs extends PathFindingAlgorithm{
    constructor(timeStepDelay){
        super(timeStepDelay);
        this.bfsDelayFactor = 20;
    }

    async run(startingNode, goalNode){
        let frontier = [];
        frontier.push([startingNode, 0]);
        let reached = new Set();
        let processingLayer = 0;
        reached.add(startingNode);
        while(!(frontier.length === 0)){
            let [currentNode, currentLayer] = frontier.pop();
            let currentGridState = currentNode.grid;
            if(currentNode === goalNode){
                return
            }
            if(currentLayer === processingLayer){
                processingLayer = processingLayer + 1;
                currentNode.markAsVisited();
                await sleep(this.timeStepDelay * this.bfsDelayFactor);
            }
            let currentNodeNeighbours = currentNode.getNeighbours();
            for(let nextNode of currentNodeNeighbours){
                if(!reached.has(nextNode)){
                    frontier.unshift([nextNode, currentLayer + 1, currentNode]);
                    reached.add(nextNode);
                    currentGridState.gridTable[nextNode.x][nextNode.y].visited = true;
                }
            }
        }
    }
}

export default bfs;