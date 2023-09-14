/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
	Box,
	TableHead,
	TableRow,
	Table,
	TableCell,
	TableContainer,
	TableBody,
	Button,
	TextField,
} from '@mui/material';
import { deleteDemo, postDemo, updateDemo } from 'actions/DemoAction';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { person } from 'utils/Interfaces';

// set up use of usersfrom previous page
interface props {
	user: person;
	updateVsCreate: string;
	setReloadPage(value: boolean): void;
	reloadPage: boolean;
}

const UserTable = ({
	user,
	updateVsCreate,
	setReloadPage,
	reloadPage,
}: props) => {
	// State initiation
	const [edit, setEdit] = useState<boolean>(false);
	const [fillIn, setFillIn] = useState<string[]>([]);
	const [tempData, setTempData] = useState<person>(user);
	// handle edit button
	const handleEditClick = () => {
		setEdit(true);
	};
	const navigate = useNavigate();

	// handle deleting
	function handleDelete() {
		deleteDemo(tempData.id).then((request: person) => {
			request = user;
			console.log(request);
		});
		navigate('/Users');
	}
	// On call, checks which fields are invalid and gives an alert telling the user as well as changes those fields to red
	function handleSubmitClick() {
		let base = [];

		if (tempData.name === null || tempData.name === '') {
			base.push('name');
		}
		if (Number.isNaN(tempData.age) || tempData.age <= 0) {
			base.push('age');
		}
		if (Number.isNaN(tempData.height) || tempData.height <= 0) {
			base.push('height');
		}
		if (tempData.eyeColor === null || tempData.eyeColor === '') {
			base.push('eyeColor');
		}
		if (base.length === 0) {
			if (updateVsCreate === 'update') {
				updateDemo(
					tempData.id,
					tempData.name,
					tempData.age,
					tempData.height,
					tempData.eyeColor,
				).then();
			} else if (updateVsCreate === 'create') {
				postDemo(
					tempData.id,
					tempData.name,
					tempData.age,
					tempData.height,
					tempData.eyeColor,
				).then();
			}
			user = tempData;
			navigate('/Users');
			return;
		}
		setFillIn(base);
		alert(`One or more fields are improperly filled in: ${base}`);
		base = [];
	}
	// navigate back to User Page when clicking cancel
	function handleCancel() {
		navigate('/Users');
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '70vh',
			}}
		>
			<div>
				<TableContainer>
					<Table>
						{/* Table Headers */}
						<TableHead sx={{ td: { border: 2 }, th: { border: 2 } }}>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Age</TableCell>
								<TableCell>Height</TableCell>
								<TableCell>Eye Color</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{/* Table Cells */}
							<TableRow sx={{ 'td, th': { border: 2 } }}>
								<TableCell>
									<TableCell>{tempData.id}</TableCell>
								</TableCell>
								<TableCell>
									<TextField
										id='namecell'
										disabled={!edit}
										color={fillIn.includes('name') ? 'error' : 'primary'}
										focused={fillIn.includes('name')}
										defaultValue={tempData.name}
										onChange={(e) => {
											tempData.name = e.target.value;
											setTempData(tempData);
										}}
									/>
								</TableCell>
								<TableCell>
									<TextField
										id='agecell'
										disabled={!edit}
										color={fillIn.includes('age') ? 'error' : 'primary'}
										focused={fillIn.includes('age')}
										defaultValue={tempData.age}
										onChange={(e) => {
											tempData.age = parseInt(e.target.value, 10);
											setTempData(tempData);
										}}
									/>
								</TableCell>

								<TableCell>
									<TextField
										id='heightcell'
										disabled={!edit}
										color={fillIn.includes('height') ? 'error' : 'primary'}
										focused={fillIn.includes('height')}
										defaultValue={tempData.height}
										onChange={(e) => {
											tempData.height = parseInt(e.target.value, 10);
											setTempData(tempData);
										}}
									/>
								</TableCell>
								<TableCell>
									<TextField
										id='eyecolorcell'
										disabled={!edit}
										color={fillIn.includes('eyeColor') ? 'error' : 'primary'}
										focused={fillIn.includes('eyeColor')}
										defaultValue={tempData.eyeColor}
										onChange={(e) => {
											tempData.eyeColor = e.target.value;
											setTempData(tempData);
										}}
									/>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'right',
					}}
				>
					{/* Delete Button */}
					<Button
						disabled={edit}
						onClick={() => {
							handleDelete();
							setReloadPage(!reloadPage);
						}}
					>
						Delete
					</Button>
					{/* Cancel Button */}
					<Button
						onClick={() => {
							handleCancel();
							setReloadPage(!reloadPage);
						}}
					>
						Cancel
					</Button>
					{/* edit button */}
					<Button disabled={edit} onClick={handleEditClick}>
						Edit
					</Button>
					{/* submit button */}
					<Button
						disabled={!edit}
						onClick={() => {
							handleSubmitClick();
							setReloadPage(!reloadPage);
						}}
					>
						Submit
					</Button>
				</Box>
			</div>
			<Box>
				<Outlet />
			</Box>
		</Box>
	);
};

export default UserTable;
