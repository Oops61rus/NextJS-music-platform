import React from 'react';
import {Button} from "@material-ui/core";

const Index = () => {
    return (
        <>
            <div className='center'>
                <h1>Welcome</h1>
                <h3>This is the best music collection</h3>
            </div>

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }                
                `}
            </style>
        </>
    );
};

export default Index;