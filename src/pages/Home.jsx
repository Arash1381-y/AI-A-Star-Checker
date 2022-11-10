import React from 'react';
import Page from "../components/Page";
import SideBar from "../components/SideBar";
import Graph from "../const/images/home.png";
import {Container} from "@mui/material";

function Home(props) {
    return (
        <Page>
            <SideBar/>
            <Container>
                <img
                    height={'80%'}
                    width={'80%'}
                    src={Graph}
                    alt={'graph loop'}/>
            </Container>
        </Page>
    );
}

export default Home;