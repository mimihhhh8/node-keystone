var keystone = require('keystone');
var Types = keystone.Field.Types;

var TestMult = new keystone.List('TestMult');

TestMult.add({
	name: { type: Types.Name, required: true, index: true },
	canAccessKeystone: { type: Boolean, initial: true },
	title: { type: String, index: true },
	content: { type: Types.Html, index: true },
});

TestMult.register();
