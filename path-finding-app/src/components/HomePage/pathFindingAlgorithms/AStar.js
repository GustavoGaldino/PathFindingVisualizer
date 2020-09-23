import TinyQueue from 'tinyqueue';
import sleep from './auxiliary/sleep';

import PathFindingAlgorithm from './PathFindingAlgorithm'

class AStar extends PathFindingAlgorithm{
    constructor(timeStepDelay){
        super(timeStepDelay);
    }

    async run(startingNode, goalNode){
        let reached = new Set();
        startingNode.originDistance = 0;
        startingNode.cost = startingNode.getGoalDistance(goalNode);
        let heap = new TinyQueue([startingNode], (a,b) => {return a.cost - b.cost});
        reached.add(startingNode);
        while(!(heap.length === 0)){
            let peekNode = heap.pop();
            if(peekNode === goalNode){
                return
            }
            let peekNodeNeighbours = peekNode.getNeighbours();
            for(let neighbour of peekNodeNeighbours){
                if(!reached.has(neighbour)){
                    reached.add(neighbour);
                    neighbour.markAsVisited();
                    await sleep(this.timeStepDelay)
                    neighbour.originDistance = peekNode.originDistance + 1;
                    neighbour.cost = neighbour.originDistance + neighbour.getGoalDistance(goalNode);
                    heap.push(neighbour);
                }
            }
        }
    }
}

export default AStar;