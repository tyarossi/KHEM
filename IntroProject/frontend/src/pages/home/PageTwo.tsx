import UserTable from 'components/UserTable';
import { person } from 'utils/Interfaces';

// set up use of user from previous page

interface props {
	chosen: person;
	switchString: string;
	setReloadPage(value: boolean): void;
	reloadPage: boolean;
}

const pageTwo = ({
	chosen,
	switchString,
	setReloadPage,
	reloadPage,
}: props): JSX.Element => (
	// Display user edit table passing the selected person element
	<div>
		<UserTable
			user={chosen}
			updateVsCreate={switchString}
			setReloadPage={setReloadPage}
			reloadPage={reloadPage}
		/>
	</div>
);

export default pageTwo;
