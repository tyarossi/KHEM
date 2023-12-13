import React from 'react';
import { Container } from '@mui/material';
import SignIn from 'components/SignIn';
import { users } from 'utils/Interfaces';

interface props {
    setLogIn(value: boolean): void;
    setLoggedUser(value: users): void;
    users: users[];
}
const LoginPage = ({setLogIn, setLoggedUser, users}: props): JSX.Element => (
	<Container>
        <SignIn setLogIn={setLogIn} setLoggedUser={setLoggedUser} users={users} />
	</Container>
);
export default LoginPage;