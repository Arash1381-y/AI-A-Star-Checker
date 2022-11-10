class Tree {
    constructor(name, attributes, labels) {
        this.name = name;
        this.labels = labels;
        this.children = null;
    }

    addChild(child) {
        if (this.children === null) {
            this.children = [];
        }
        this.children.push(child);
    }
}


class State {
    constructor(id, parent, heuristic, cost, labels) {
        this.id = id;
        this.parent = parent;
        this.heuristic = heuristic;
        this.cost = cost;
        this.labels = labels;
    }

    get f() {
        return this.heuristic + this.cost;
    }
}

function createTree(stepsList) {
    //split data by empty line into array of strings
    const dataArr = stepsList.trim().split(/\n\s*\n/);
    // each element of data Array is a string of label and heuristic and g function
    // split each element by new line
    const statesAsString = dataArr.map((element) => {
        return element.split(/\n/);
    });

    const statesArray = []
    const labelsSet = new Set();
    for (let i = 0; i < statesAsString.length; i++) {
        const indices = statesAsString[i][0].split(" ");
        const stateIndex = parseInt(indices[0])
        const parentIndex = parseInt(indices[1])

        let labels = statesAsString[i][1].split(" ");


        labels = labels.map((label) => {
            return parseInt(label);
        });

        if (labelsSet.has(labels)) {
            //return error
            return {
                Error: 'Labels are not unique'
            }
        }

        labelsSet.add(labels);
        let costAndHeuristic = statesAsString[i][2].split(" ");
        const cost = parseInt(costAndHeuristic[0]);
        const heuristic = parseInt(costAndHeuristic[1]);

        statesArray.push(new State(stateIndex, parentIndex, heuristic, cost, labels));
    }

    const indexTreeDict = {}

    //iterate over states
    for (let i = 0; i < statesArray.length; i++) {
        indexTreeDict[statesArray[i].id] =
            new Tree('g: ' + statesArray[i].cost + ' h: ' + statesArray[i].heuristic, {
                'step': i + 1
            }, statesArray[i].labels);
    }

    const rootId = statesArray[0].id;
    const root = indexTreeDict[rootId];

    //iterate over states except first element
    for (let i = 1; i < statesArray.length; i++) {
        const tree = indexTreeDict[statesArray[i].id];
        const parentTree = indexTreeDict[statesArray[i].parent];
        parentTree.addChild(tree);
    }

    return root
}

function createGraph(nodesNumber, edges) {
    const relationsAsString = edges.trim().split(/\n/);
    const relations = relationsAsString.map((relation) => {
        const relationArr = relation.split(" ");
        return {
            source: relationArr[0],
            target: relationArr[1]
        }
    });
    //create nodes array
    const nodes = [];
    const teta = 2 * Math.PI / nodesNumber;
    const center = 250;
    for (let i = 0; i < nodesNumber; i++) {
        nodes.push({
            id: `${i}`,
            x: center + nodesNumber * 18.5 * Math.cos(teta * i),
            y: center + nodesNumber * 18.5 * Math.sin(teta * i)
        })
    }
    return {
        nodes: nodes,
        links: relations
    }
}

export function dataMiner(state) {
    if (state === null) return {
        graph: null,
        tree: null
    }

    const graph = createGraph(state.nodesNumber, state.edgesList);
    const root = createTree(state.stepsList);
    return {
        graph: graph,
        tree: root
    }
}


