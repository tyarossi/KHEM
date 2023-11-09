
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TransferProjectMessage from '../TemplateComponent';

test('renders no content', async () => {
	const { getByText, getByTestId } = render(
		// eslint-disable-next-line react/react-in-jsx-scope
		<TransferProjectMessage content='test' />,
	);

	expect(getByTestId('test'));
	expect(getByText('test'));
});
