import React, {useState} from 'react';
import {useRouter} from "next/router";
import {useInput} from "../../hooks/useInput";
import axios from "axios";
import {Button, Grid} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/Steps/StepWrapper";
import TrackInfo from "../../components/Steps/TrackInfo";
import FileUpload from "../../components/Steps/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('artist', artist.value)
            formData.append('text', text.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            axios.post('http://localhost:4000/tracks', formData)
                .then(response => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                <TrackInfo name={name} artist={artist} text={text}/>
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
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;