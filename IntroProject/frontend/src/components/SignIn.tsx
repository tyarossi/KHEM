import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface props {
    logIn: boolean;
}

const SignIn = ({logIn}: props) => {


    return (
        <Box
            marginTop='30px'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            >
                <>
                    {logIn ?
                        <>
                            <Typography variant='h3' margin='auto'>
                                Sign In
                            </Typography>
                            <Typography variant='h5'>
                                Username or Email:
                            </Typography>
                            <TextField style={{ maxWidth: '400px' }} />
                            <Typography variant='h5'>
                                Password:
                            </Typography><TextField style={{ maxWidth: '400px' }} />
                            <Button style={{maxWidth: '200px'}}>Log In</Button>
                            <Typography>
                                Don't have an account? {<Button variant='text'>Register.</Button>}
                            </Typography>
                        </>
                        :
                        null
                    }
                </>
        </Box>
    );
};

export default SignIn;
