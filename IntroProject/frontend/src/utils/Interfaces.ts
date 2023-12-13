export type demoInterface = {
	demoNum: number;
	demoString: string;
};

export type users = {
	id: number;
	password: string;
	name: number;
	email: string;
	eqTestScore: number;
	kinTestScore: number;
	eleTestScore: number;
	balTestScore: number;
};

export type UserProps = {
	id: number;
	password: string;
	name: number;
	email: string;
	setLogin: boolean;
	eqTestScore: number;
	kinTestScore: number;
	eleTestScore: number;
	balTestScore: number;
};

export type SignIn ={
	signIn: boolean;
}
