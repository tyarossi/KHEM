import Navbar from 'components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import PageOne from 'pages/home/PageOne';
import { useEffect, useState } from 'react';
import { person } from 'utils/Interfaces';
import { getDemo } from 'actions/DemoAction';
import PageTwo from 'pages/home/PageTwo';

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

	useEffect(() => {
		getDemo().then((response) => {
			if (response.message === 'success') {
				setPeople(response.data);
			}
		});
	}, [reloadPage]);

	return (
		<>
			<Routes>
				{/* makes sure navbar is on top of every page */}
				<Route path='' element={<Navbar />}>
					<Route path='/Home' element={<div>Home Page</div>} />
					<Route path='/Users'>
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
					</Route>
				</Route>
			</Routes>
			<Outlet />
		</>
	);
};
export default App;
