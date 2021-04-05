import test from 'ava';
import uniqueString from './index.js';

test('main', t => {
	t.is(uniqueString().length, 32);

	const created = new Set();

	for (let i = 0; i < 100000; i++) {
		const string = uniqueString();

		if (created.has(string)) {
			t.fail(`${string} already exists`);
		}

		t.is(string.length, 32);

		created.add(string);
	}
});
