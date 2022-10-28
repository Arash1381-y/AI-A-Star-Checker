class Tree {
    constructor(name) {
        this.name = name;
        this.attributes = [];
        this.children = [];
    }
}

function createNestedTree(states){
    //create a tree for each of the nodes
    //iterate over each state
    for (let i = 0; i < states.length; i++) {
        //iterate over each line of the state

    }
}


function dataMiner(data) {
    //split data by empty line into array of strings
    const dataArr = data.split(/\n\s*\n/);
    // each element of data Array is a string of label and heuristic and g function
    // split each element by new line
    const states = dataArr.map((element) => {
        return element.split(/\n/);
    });

    // iterate over each state
}