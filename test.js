import test from 'ava';
import uniqueString from '.';

test('main', t => {
	t.is(uniqueString().length, 32);

	const created = new Set();

	for (let i = 0; i < 100000; i++) {
		const str = uniqueString();

		if (created.has(str)) {
			t.fail(`${str} already exists`);
		}

		t.is(str.length, 32);

		created.add(str);
	}
});
