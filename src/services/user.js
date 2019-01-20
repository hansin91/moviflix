const UserService = {
	getUsers: () => {
		let users = localStorage.getItem('users');
		return users ? JSON.parse(users) : [];
	},
	addUser: (user) => {}
};

export default UserService;
