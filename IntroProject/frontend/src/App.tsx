import Navbar from 'components/Navbar';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import PageOne from 'pages/home/PageOne';
import { useEffect, useState } from 'react';
import { person } from 'utils/Interfaces';
import { getDemo } from 'actions/DemoAction';
import PageTwo from 'pages/home/PageTwo';
import Modules from 'pages/home/Modules';
import About from 'pages/home/About';
import Contact from 'pages/home/Contact';
import Profile from 'pages/home/Profile';
import Home from 'pages/home/Home';
import { Box, Button, FormControlLabel, FormGroup, Switch } from '@mui/material';

const App = () => {
	const [people, setPeople] = useState<person[]>([]);
	const [selectedPerson, setSelectedPerson] = useState<person>({
		id: -1,
		name: '',
		age: -1,
		height: -1,
		eyeColor: '',
	});
	const [reloadPage, setReloadPage] = useState<boolean>(true);

	const [logIn, setLogIn] = useState<boolean>(false);

    const handleSignIn = () => {
		setLogIn(!logIn);
	};

	useEffect(() => {
		getDemo().then((response) => {
			if (response.message === 'success') {
				setPeople(response.data);
			}
		});
	}, [reloadPage]);

	return (
		<>
			<Box flexDirection='row' display='flex'>
				<FormGroup sx={{ marginRight: 'auto' }} >
					<FormControlLabel control={<Switch onChange={handleSignIn} defaultChecked />} label="Logged In?" />
				</FormGroup>
				{logIn ?
					<Button variant='text' sx={{  marginLeft: 'auto' }} >Log In</Button>
					:
					null
				}
			</Box>
			<Routes>
				{/* makes sure navbar is on top of every page */}
				<Route path='' element={<Navbar />}>
					<Route path='/Home' element={<Home logIn={logIn} />} />
					{/* <Route path='/Users'>
						<Route
							path=''
							// Displays every user on datatable for routed page as well as sends users and setter for selected person
							element={
								<PageOne users={people} setSelectedPerson={setSelectedPerson} />
							}
						/>
						<Route
							path='EditUser'
							// displays selected user on datatable and the selected person
							element={
								<PageTwo
									chosen={selectedPerson}
									switchString='update'
									setReloadPage={setReloadPage}
									reloadPage={reloadPage}
								/>
							}
						/>
						<Route
							path='AddUser'
							// displays selected user on datatable and the selected person
							element={
								<PageTwo
									chosen={selectedPerson}
									switchString='create'
									setReloadPage={setReloadPage}
									reloadPage={reloadPage}
								/>
							}
						/>
					</Route> */}
					<Route path='/About'>
						<Route path='' element={ <About /> } ></Route>
					</Route>
					<Route path='/Contact'>
						<Route path='' element={ <Contact /> } ></Route>
					</Route>
					<Route path='/Profile'>
						<Route path='' element={ <Profile logIn={logIn} /> } ></Route>
					</Route>
					<Route path='/Modules'>
						<Route path='' element={ <Modules /> } ></Route>
					</Route>
				</Route>
			</Routes>
			<Outlet />
		</>
	);
};
export default App;
