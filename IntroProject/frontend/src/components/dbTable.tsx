import { useEffect, useState } from 'react';
import {
	Box,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TableContainer,
	Button,
	Container,
	TextField,
} from '@mui/material';
// import SearchBar from 'material-ui-search-bar';
import { Outlet, useNavigate } from 'react-router-dom';
import { person } from 'utils/Interfaces';

// set up use of users from previous page
interface props {
	users: person[];
	setSelectedPerson(value: person): void;
}
const DbTable = ({ users, setSelectedPerson }: props) => {
	// navigation stuff
	const navigate = useNavigate();
	// click handler for nav
	const clickHandler = (select: person) => {
		setSelectedPerson(select);
		try {
			navigate('EditUser');
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log('This did not work');
		}
	};
	// state hooks for sorting
	const [nameOrder, setNameOrder] = useState(true);
	const [idOrder, setIdOrder] = useState(true);
	const [tempUsers, setTempUsers] = useState(users);
	const [searchedVal, setSearchedVal] = useState('');
	useEffect(() => setTempUsers(users), [users]);

	// sorting by column

	function dataSort(holdData: person[], sortBy: string) {
		holdData.sort((a, b) => {
			if (sortBy === 'name') {
				if (nameOrder) {
					return a.name < b.name ? -1 : 1;
				}
				return a.name < b.name ? 1 : -1;
			}
			if (idOrder) {
				return a.id < b.id ? -1 : 1;
			}
			return a.id < b.id ? 1 : -1;
		});
	}

	// creating the table
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'left',
				minHeight: '50vh',
				maxHeight: '50vh',
			}}
		>
			<div>
				{/* SearchBar */}
				<Container>
					<TextField
						label='search'
						onChange={(e) => setSearchedVal(e.target.value)}
					/>
				</Container>
				<TableContainer>
					<Table>
						{/* activates sorting based on id/name */}
						<TableHead sx={{ td: { border: 2 }, th: { border: 2 } }}>
							<TableRow>
								<TableCell>
									<Button
										variant='text'
										onClick={() => {
											setIdOrder(!idOrder);
											dataSort(users, 'id');
										}}
									>
										ID
									</Button>
								</TableCell>
								<TableCell>
									<Button
										variant='text'
										onClick={() => {
											setNameOrder(!nameOrder);
											dataSort(users, 'name');
										}}
									>
										Name
									</Button>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{/* maps data to the cells and checks searchBar */}
							{tempUsers
								.filter(
									(user) =>
										!searchedVal.length ||
										user.name
											.toString()
											.toLowerCase()
											.includes(searchedVal.toString().toLowerCase()),
								)
								.map((user) => (
									<TableRow key={user.name} sx={{ 'td, th': { border: 2 } }}>
										<TableCell>
											<Button
												variant='text'
												onClick={() => {
													clickHandler(user);
												}}
											>
												{user.id}
											</Button>
										</TableCell>
										<TableCell>{user.name}</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'right',
					}}
				>
					{/* Cancel Button */}
					<Button
						onClick={() => {
							setSelectedPerson({
								id: NaN,
								name: '',
								age: NaN,
								height: NaN,
								eyeColor: '',
							});
							navigate('AddUser');
						}}
					>
						Add +
					</Button>
				</Box>
			</div>
			<Box>
				<Outlet />
			</Box>
		</Box>
	);
};
export default DbTable;
