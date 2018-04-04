function printFullAge(yearOfBirth) {
	var ages = [];
	var fullAges = [];

	for (var i 	= 0; i < yearOfBirth.length; i++) {
	ages[i] = 2018 - yearOfBirth[i];
}


	for (i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, TRUE.');
		fullAges.push(true);
	} else {
		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, FALSE.');
		fullAges.push(false);
	}
}
	return fullAges;
}

var yearOfBirth = [1989, 1983, 1999, 1993, 1997];
var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge([2001, 1985, 1991, 2010, 1982]);


