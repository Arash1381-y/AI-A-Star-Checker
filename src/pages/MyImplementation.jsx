import React from 'react';
import {Container} from "@mui/material";
import Page from "../components/Page";
import Tree from "react-d3-tree";
import './Tree-style.css'
import {TextField} from "material-ui";
import GridLines from 'react-gridlines';

function MyImplementation({data}) {


    const orgChart = {
        name: '',
        children: [
            {
                name: '',
                children: [
                    {
                        name: '',
                        children: [
                            {
                                name: '',
                            },
                        ],
                    },
                    {
                        name: '',
                        children: [
                            {
                                name: '',
                            },
                        ],
                    },
                ],
            },
        ],
    };


    return (
        <Page>
            <Container sx={{minWidth:'100%',margin:0, padding:0, background: 'white', alignItems: 'center'}}>
                    <GridLines className="grid-area" cellWidth={60} strokeWidth={2} cellWidth2={12}>
                        <div id="treeWrapper" style={{ width: '95vw', height: '98vh' }}>
                            <Tree style={{height: '100vh'}} data={orgChart}
                                  rootNodeClassName="node__root"
                                  branchNodeClassName="node__branch"
                                  leafNodeClassName="node__leaf"/>
                        </div>
                    </GridLines>
            </Container>

        </Page>
    );
}

export default MyImplementation;