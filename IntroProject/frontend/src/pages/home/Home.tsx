import React from 'react';
import { Container } from '@mui/material';
import SignIn from 'components/SignIn';

interface props {
    logIn: boolean;
}
const About = ({logIn}: props): JSX.Element => (
	<Container>
        <SignIn logIn={logIn} />
	</Container>
);
export default About;
