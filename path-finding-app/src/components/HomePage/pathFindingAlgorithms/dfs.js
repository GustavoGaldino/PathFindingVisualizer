function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function dfs(currentNode, goalNode, visitedSet=(new Set())){
    if(currentNode === goalNode){
        alert("Found the goal node.")
    }
    else{
        let currentNodeNeighbours = currentNode.getNeighbours();
        for(let neighbour of currentNodeNeighbours){
            if(!visitedSet.has(neighbour)){
                visitedSet.add(neighbour);
                neighbour.markAsVisited();
                await sleep(25);
                await dfs(neighbour, goalNode, visitedSet);
            }
        }
    }
}

export default dfs