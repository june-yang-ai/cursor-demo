import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails, uniqueValidEmails } from './email.js';

test('extractEmails returns emails from members array', () => {
    const members = [{ email: 'a@b.com' }, { email: 'c@d.com' }];
    assert.deepEqual(extractEmails(members), ['a@b.com', 'c@d.com']);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails('not-array'), []);
});

test('isValidEmail validates email format', () => {
    assert.equal(isValidEmail('a@b.com'), true);
    assert.equal(isValidEmail('invalid'), false);
    assert.equal(isValidEmail(123), false);
});

test('getValidEmails filters out invalid emails', () => {
    const members = [
        { email: 'a@b.com' },
        { email: 'not-an-email' },
        { email: 'c@d.com' },
    ];
    assert.deepEqual(getValidEmails(members), ['a@b.com', 'c@d.com']);
});

test('uniqueValidEmails removes duplicate valid emails', () => {
    const members = [
        { email: 'a@b.com' },
        { email: 'a@b.com' },
        { email: 'not-an-email' },
        { email: 'c@d.com' },
    ];
    assert.deepEqual(uniqueValidEmails(members), ['a@b.com', 'c@d.com']);
});
