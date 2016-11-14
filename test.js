import test from 'ava';
import m from './';

test(t => {
	t.is(m().length, 32);

	const created = new Set();

	for (let i = 0; i < 100000; i++) {
		const str = m();

		if (created.has(str)) {
			t.fail(`${str} already exists`);
		}

		t.is(str.length, 32);

		created.add(str);
	}
});
