import React from 'react';
import Tree from "react-d3-tree";
import GridLines from 'react-gridlines';
import Page from "../components/Page";
import {useLocation} from "react-router-dom";
import {dataMiner} from "../function/dataMiner";
import ShowGraph from "../function/GraphDialog";
import {Container} from "@mui/material";

function MyImplementation() {
    const {state} = useLocation();
    const {tree, graph} = dataMiner(state);
    const [label, setLabel] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const onClose = () => {
        setOpen(false);
    }

    return (
        <Page>
            <div style={{minWidth: '100%'}}>
                <ShowGraph graph={graph} open={open} labels={label} onClose={onClose}/>}
                <Container sx={{minWidth: '100%', margin: 0, padding: 0, background: 'white', alignItems: 'center'}}>
                    <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={12}>
                        <div id="treeWrapper" style={{width: '95vw', height: '98vh'}}>
                            {state && <Tree style={{height: '100vh'}} data={tree}
                                            collapsible={false}
                                            onNodeClick={(nodeData) => {
                                                setOpen(true)
                                                setLabel(nodeData.data.labels)
                                            }
                                            }
                                            orientation={'vertical'}
                                            pathFunc={'step'}
                                            translate={
                                                {
                                                    x: 300,
                                                    y: 300
                                                }
                                            }
                                            rootNodeClassName="node__root"
                                            branchNodeClassName="node__branch"
                                            leafNodeClassName="node__leaf"
                            />}
                        </div>
                    </GridLines>
                </Container>
            </div>
        </Page>
    );
}

export default MyImplementation;