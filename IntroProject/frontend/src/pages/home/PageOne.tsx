import DbTable from 'components/dbTable';
import { person } from 'utils/Interfaces';
import { Container } from '@mui/material';

// set up use of users and setter for selected person from previous page
interface props {
	users: person[];
	setSelectedPerson(value: person): void;
}

const PageOne = ({ users, setSelectedPerson }: props): JSX.Element => (
	// shows table and passes users/setter for selected person
	<Container>
		<DbTable users={users} setSelectedPerson={setSelectedPerson} />
	</Container>
);
export default PageOne;
