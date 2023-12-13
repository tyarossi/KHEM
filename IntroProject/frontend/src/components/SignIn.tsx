import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { users } from 'utils/Interfaces';

interface props {
    setLogIn(value: boolean): void;
    setLoggedUser(value: users): void;
    users: users[];
}

const SignIn = ({setLogIn, setLoggedUser, users}: props) => {
    // const clickHandler = (select: person) => {
	// 	setSelectedPerson(select);
	// 	try {
	// 		navigate('EditUser');
	// 	} catch (error) {
	// 		// eslint-disable-next-line no-console
	// 		console.log('This did not work');
	// 	}
	// };
    const handleClick = () => {
        setLogIn(true);
    }

    return (
        <Box
            marginTop='30px'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            >
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
                <Button 
                onClick={handleClick} 
                style={{maxWidth: '200px'}}>Log In</Button>
                <Typography>
                    Don't have an account? {<Button variant='text'>Register.</Button>}
                </Typography>
        </Box>
    );
};

export default SignIn;
