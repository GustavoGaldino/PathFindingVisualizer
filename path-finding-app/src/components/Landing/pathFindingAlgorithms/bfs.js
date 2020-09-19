function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function bfs(startingNode, goalNode){
    let frontier = new Array();
    frontier.push([startingNode, 0]);
    let reached = new Set();
    let processingLayer = 0;
    reached.add(startingNode);
    while(!(frontier.length == 0)){
        let [currentNode, currentLayer] = frontier.pop();
        if(currentNode === goalNode){
            return
        }
        if(currentLayer === processingLayer){
            processingLayer = processingLayer + 1;
            console.log(processingLayer);
            await sleep(60);
        }
        let currentNodeNeighbours = currentNode.getNeighbours();
        for(let nextNode of currentNodeNeighbours){
            if(!reached.has(nextNode)){
                frontier.unshift([nextNode, currentLayer + 1]);
                reached.add(nextNode);
                nextNode.markAsVisited();
            }
        }
    }
}

export default bfs;