import React from 'react';
import {styled} from "@mui/material/styles";
import SideBar from "./SideBar";

const Container = styled('div')(({color = 'white'}) => ({
    width: '100%',
    height: '100vh',
    backgroundColor: color,
}));

function Page({children}) {

    return (
        <Container>
            <SideBar loggedIn={false}/>
            {children}
        </Container>
    );
}

export default Page;