const test = require('tape');
const difference = require('./difference.js');

test('Testing difference', (t) => {
	//For more information on all the methods supported by tape
	//Please go to https://github.com/substack/tape
	t.true(typeof difference === 'function', 'difference is a Function');
	//t.deepEqual(difference(args..), 'Expected');
	//t.equal(difference(args..), 'Expected');
	//t.false(difference(args..), 'Expected');
	//t.throws(difference(args..), 'Expected');
	t.end();
});