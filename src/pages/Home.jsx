import React from 'react';
import Page from "../components/Page";
import SideBar from "../components/SideBar";
import Graph from "../const/images/home.png";
import {Container} from "@mui/material";


const homeStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${Graph})`,
    backgroundSize: 'cover',
}

function Home(props) {
    return (
        <Page>
            <SideBar/>
            <Container sx={homeStyle}>
            </Container>
        </Page>
    );
}

export default Home;