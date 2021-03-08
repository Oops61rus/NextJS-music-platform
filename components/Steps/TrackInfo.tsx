import React, {ChangeEvent} from 'react';
import {Grid, TextField} from "@material-ui/core";
import {TrackParams} from "../../types/track";

interface TrackInfoProps {
    name: TrackParams,
    artist: TrackParams,
    text: TrackParams
}

const TrackInfo: React.FC<TrackInfoProps> = ({name, artist, text}) => {
    return (
        <Grid container direction={'column'} style={{padding: 20}}>
            <TextField
                {...name}
                style={{marginTop: 10}}
                label={'Track name'}
            />
            <TextField
                {...artist}
                style={{marginTop: 10}}
                label={'Author name'}
            />
            <TextField
                {...text}
                style={{marginTop: 10}}
                label={'Track text'}
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default TrackInfo;