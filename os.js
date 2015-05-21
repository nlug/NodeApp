var details, message, os, sysarray, _i, _len;

os = require('os');

message = 'Here is some information about your system';

sysarray = ['Type :' + os.type(), 'Platform :' + os.platform()];

console.log(message);

for (_i = 0, _len = sysarray.length; _i < _len; _i++) {
  details = sysarray[_i];
  console.log(details);
}
