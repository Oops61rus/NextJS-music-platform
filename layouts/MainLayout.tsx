import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string
}

const MainLayout: React.FC<MainLayoutProps>
    = ({
           children,
           title,
           description,
           keywords
       }) => {
    return (
        <>
            <Head>
                <title>
                    {title || 'Music Platform'}
                </title>
                <meta name='description'
                      content={`Music Platform. Here everyone can upload track and become famous.` + description}/>
                <meta name='robots' content='index follow'/>
                <meta name='keywords' content={keywords || 'Music, tracks, artists'}/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;