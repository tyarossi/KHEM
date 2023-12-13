import { Box, AppBar, Toolbar, Tabs, Tab, Button } from '@mui/material';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
interface props {
	logIn: boolean;
	setLogIn(value: boolean): void;
}
// Navbar
const Navbar = ({ logIn, setLogIn }: props): JSX.Element => {
	
	// Navigate is used to swap pages and then I make the pages into functions to be used with onClick
	const navigate = useNavigate();
	const homePage = () => {
		navigate('/Home');
	};
	const PageOne = () => {
		navigate('/Users');
	};
	const About = () => {
		navigate('/About');
	};
	const Contact = () => {
		navigate('/Contact');
	};
	const Profile = () => {
		navigate('/Profile');
	};
	const Modules = () => {
		navigate('/Modules');
	};
	const LoginPage= () => {
		navigate('/LoginPage')
	}
	
	const [value, setValue] = React.useState('one');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const handleClick = () => {
		{logIn?
			(setLogIn(false),
			navigate('LoginPage'))
		:
			(setLogIn(true),
			navigate('LoginPage'))
		}
	}
	return (
		// navbar display element
		<Box display='flex' flexDirection='column'>
			<AppBar position='static'>
				<Toolbar sx={{ justifyContent: 'left', align: 'left' }}>
					<Tabs value={value} onChange={handleChange}>
						{/* Swaps to home page */}
						<Tab onClick={homePage} value='one' label='Home' />
						{/* Swaps to About page */}
						<Tab onClick={About} value='two' label='About' />
						{/* Swaps to Contact page */}
						<Tab onClick={Contact} value='three' label='Contact' />
						{/* Swaps to Profile page */}
						{logIn?
						<Tab onClick={Profile} value='four' label='Profile' />
						:
						null
						}
						{/* Swaps to Modules page */}
						<Tab onClick={Modules} value='five' label='Modules' />
					</Tabs>
					<Box marginLeft='auto'>
					<Button variant='text'
					onClick={handleClick} sx={{  marginLeft: 'auto', color: 'white' }} >{logIn? 'Log Out' : 'Log In' }</Button>
			</Box>
				</Toolbar>
			</AppBar>
				<Outlet />
		</Box>
	);
};

export default Navbar;
