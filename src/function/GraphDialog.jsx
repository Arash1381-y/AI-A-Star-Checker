import {Graph} from "react-d3-graph";
import {Dialog} from "@mui/material";
import React from 'react';

const prepareData = (graph, labels) => ({
    nodes: graph.nodes.map((node) => ({
        id: `${node.id} (${labels[node.id]})`,
        x: node.x,
        y: node.y
    })),
    links: graph.links.map((link) => ({
        source: `${link.source} (${labels[link.source]})`,
        target: `${link.target} (${labels[link.target]})`,
    }))
});

const myConfig = {
    nodeHighlightBehavior: true,
    height: 500,
    width: 500,
    node: {
        color: "lightgreen",
        size: 500,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },

};

const GraphDialog = ({graph, labels, open, onClose}) => {
    const data = prepareData(graph, labels);
    return (
        <Dialog open={open} onClose={onClose}>
            <Graph
                id='graph-id' // id is mandatory
                data={data}
                config={myConfig}
            />
        </Dialog>
    );
}

export default GraphDialog;