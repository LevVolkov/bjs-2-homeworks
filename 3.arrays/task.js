function compareArrays(arr1, arr2) {
	return (
		arr1.length === arr2.length &&
		arr1.every((item, index) => item === arr2[index])
	);
}

function getUsersNamesInAgeRange(users, gender) {
	const usersWithGender = users.filter(user => user.gender === gender);
	if (usersWithGender.length === 0) {
		return 0;
	} else {
		const averageAge = usersWithGender.reduce((sum, user) => sum + user.age, 0) / usersWithGender.length;
		return averageAge;
	}
}