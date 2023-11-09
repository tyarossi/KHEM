import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import UserScores from 'components/UserScores';

interface props {
    logIn: boolean;
}

const Profile = ({logIn}: props): JSX.Element => (
	<Container>
        {!logIn ?
            <Box
            marginTop='30px'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            >
                <Typography variant='h3' margin='auto'>
                    User Profile
                </Typography>
                <Typography variant='h5'>
                    Username:
                </Typography>
                <TextField style={{ maxWidth: '400px' }} />
                <Typography variant='h5'>
                    Email:
                </Typography>
                <TextField style={{ maxWidth: '400px' }} />
                <Typography variant='h5'>
                    Password:
                </Typography>
                <TextField style={{ maxWidth: '400px' }} />
                <Button style={{maxWidth: '200px'}}>Change Password</Button>
                <Typography variant='h4'>
                    Scores
                </Typography>
                <UserScores />
            </Box>
            :
            null
        }
	</Container>
);
export default Profile;
