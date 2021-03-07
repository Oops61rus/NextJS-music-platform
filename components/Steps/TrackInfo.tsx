import React from 'react';
import {Grid, TextField} from "@material-ui/core";

const TrackInfo = () => {
    return (
        <Grid container direction={'column'} style={{padding: 20}}>
            <TextField
                style={{marginTop: 10}}
                label={'Track name'}
            />
            <TextField
                style={{marginTop: 10}}
                label={'Author name'}
            />
            <TextField
                style={{marginTop: 10}}
                label={'Track text'}
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default TrackInfo;