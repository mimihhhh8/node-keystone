var keystone = require('keystone');
var Types = keystone.Field.Types;

var Test = new keystone.List('Test');

Test.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true },
	canAccessKeystone: { type: Boolean, initial: true },
});

Test.register();
