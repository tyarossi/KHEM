import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

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
                />
                <Typography variant='h5' >Passssword:</Typography>
                <TextField
                    style={{maxWidth: '400px'}}
                />
                <Typography>
                    Don't have an account? {<Button variant='text'>Register</Button>}.
                </Typography>
        </Box>
    );
};

export default SignIn;
