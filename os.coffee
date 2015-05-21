os = require('os');
message = 'Here is some information about your system';
sysarray = [
	'Type :'+os.type(),
	'Platform :'+os.platform()
]
console.log(message);
console.log details for details in sysarray