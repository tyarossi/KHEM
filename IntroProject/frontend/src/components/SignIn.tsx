import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const SignIn = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            >
                <Typography variant='h3' margin='auto'>Sign In</Typography>
                <Typography variant='h5' >Username or Email:</Typography>
                <TextField
                    style={{maxWidth: '400px'}}
                >
                    s
                </TextField>
                <Typography variant='h5' >Password:</Typography>
                <TextField
                    style={{maxWidth: '400px'}}
                >
                    s
                </TextField>
        </Box>
    );
};

export default SignIn;
