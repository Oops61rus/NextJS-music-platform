import React, {useEffect} from 'react';
import {Card, Grid, IconButton} from "@material-ui/core";
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import TrackProgress from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

let audio;

const Player = () => {
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
    const {pause, volume, duration, currentTime, active} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack} = useActions()

    useEffect(() => {
        if(!audio) {
            audio = new Audio()
            audio.src = track.audio
        }
    }, [])

    const play = () => {
        if(pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
        </div>
    );
};

export default Player;