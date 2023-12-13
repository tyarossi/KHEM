import Navbar from 'components/Navbar';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { users } from 'utils/Interfaces';
import { getDemo } from 'actions/DemoAction';
import Modules from 'pages/home/Modules';
import About from 'pages/home/About';
import Contact from 'pages/home/Contact';
import Profile from 'pages/home/Profile';
import LoginPage from 'pages/home/LoginPage';
import Home2 from 'pages/home/Home2';
import Equations from 'pages/home/Equations';

const App = () => {
	const [users, setUsers] = useState<users[]>([]);
	const [loggedUser, setLoggedUser] = useState<users>({
		id: -1,
		password: '',
		name: -1,
		email: '',
		eqTestScore: -1,
		kinTestScore: -1,
		eleTestScore: -1,
		balTestScore: -1,
	});
	const [reloadPage, setReloadPage] = useState<boolean>(true);

	const [logIn, setLogIn] = useState<boolean>(false);

	useEffect(() => {
		getDemo().then((response) => {
			if (response.message === 'success') {
				setUsers(response.data);
			}
		});
	}, [reloadPage]);

	return (
		<>
			<Routes>
				{/* makes sure navbar is on top of every page */}
				<Route path='' element={<Navbar logIn={logIn} setLogIn={setLogIn} />}>
					{logIn ?
					<Route path='/Home' element={<LoginPage setLogIn={setLogIn} setLoggedUser={setLoggedUser} users={users} />} />
					:
					<Route path='/Home' element={<Home2 login={logIn} />} />
					}
					<Route path='/LoginPage' element={<LoginPage setLogIn={setLogIn} setLoggedUser={setLoggedUser} users={users} />} />
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
					<Route path='/Equations/:choice' >
						<Route path='' element={ <Equations/> }></Route>
					</Route>
				</Route>
			</Routes>
			<Outlet />
		</>
	);
};
export default App;
