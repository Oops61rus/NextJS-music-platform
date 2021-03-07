import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/Steps/StepWrapper";
import {Button, Grid} from "@material-ui/core";
import TrackInfo from "../../components/Steps/TrackInfo";
import FileUpload from "../../components/Steps/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)

    const next = () => {
        setActiveStep(prev => prev + 1)
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                <TrackInfo/>
                }
                {activeStep === 1 &&
                <FileUpload setFile={setPicture} accept='image/*'>
                    <Button>Upload Cover</Button>
                </FileUpload>
                }
                {activeStep === 2 &&
                <FileUpload setFile={setAudio} accept='audio/*'>
                    <Button>Upload Track</Button>
                </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button disabled={activeStep === 2} onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;