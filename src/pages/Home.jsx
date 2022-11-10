import React from 'react';
import Page from "../components/Page";
import SideBar from "../components/SideBar";
import {Container} from "@mui/material";

function Home(props) {
    return (
        <Page>
            <SideBar/>
            <Container>
            </Container>
        </Page>
    );
}

export default Home;