import React from 'react';
import { Container } from '@mui/material';

interface props {
    login: boolean;
}

const Home2 = ({ login }:props): JSX.Element => (
	<Container>
        Welcome to KHEM!
	</Container>
);
export default Home2;