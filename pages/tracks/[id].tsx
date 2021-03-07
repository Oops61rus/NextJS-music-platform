import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@material-ui/core";
import {useRouter} from "next/router";

const TrackPage = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Some text',
        listens: 5,
        audio: 'http://localhost:4000/audio/1.mp3',
        picture: 'http://localhost:4000/picture/1.jpg',
        comments: []
    }
    const router = useRouter()

    return (
        <MainLayout>
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                To List
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img
                    src={'http://localhost:4000/' + track.picture}
                    width={200}
                    height={200}
                />
                <div style={{marginLeft: 30}}>
                    <h1>Track name: {track.name}</h1>
                    <h1>Artist: {track.artist}</h1>
                    <h1>Listens: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Track text</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField
                    label='Your name'
                    fullWidth
                />
                <TextField
                    label='Comment'
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>
                    Send comment
                </Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;