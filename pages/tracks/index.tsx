import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'Track 1',
            artist: 'Artist 1',
            text: 'Some text',
            listens: 5,
            audio: 'http://localhost:4000/audio/1.mp3',
            picture: 'http://localhost:4000/picture/1.jpg',
            comments: []
        },
        {
            _id: '2',
            name: 'Track 2',
            artist: 'Artist 2',
            text: 'Some text',
            listens: 5,
            audio: 'http://localhost:4000/audio/2.mp3',
            picture: 'http://localhost:4000/picture/2.jpg',
            comments: []
        },
        {
            _id: '3',
            name: 'Track 3',
            artist: 'Artist 3',
            text: 'Some text',
            listens: 5,
            audio: 'http://localhost:4000/audio/3.mp3',
            picture: 'http://localhost:4000/picture/3.jpg',
            comments: []
        },
    ]

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Track list</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Upload
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;