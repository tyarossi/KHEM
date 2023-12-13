import { getDemoURL } from 'utils/urls/DemoUrls';

export const getDemo = async () => {
	const response = await fetch(getDemoURL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response.json();
};

export const postDemo = async (
	id: number,
	password: string,
	name: number,
	email: string,
	eqTestScore: number,
	kinTestScore: number,
	eleTestScore: number,
	balTestScore: number,
) => {
	const response = await fetch('/api/post/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id, password, name, email, eqTestScore, kinTestScore, eleTestScore, balTestScore }),
	});
	return response.json();
};

export const updateDemo = async (
	id: number,
	password: string,
	name: number,
	email: string,
	eqTestScore: number,
	kinTestScore: number,
	eleTestScore: number,
	balTestScore: number,
	
) => {
	const response = await fetch('/api/update/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id, password, name, email, eqTestScore, kinTestScore, eleTestScore, balTestScore }),
	});
	return response.json();
};

export const deleteDemo = async (id: number) => {
	const response = await fetch('/api/delete/', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id }),
	});
	return response.json();
};
